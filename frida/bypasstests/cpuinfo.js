https://github.com/iddoeldor/frida-snippets?tab=readme-ov-file#intercept-open

// var fds = {}; // Stores file descriptors for tracking


// Interceptor.attach(Module.findExportByName(null, 'open'), {
//     onEnter: function (args) {
       
//         var filename = Memory.readCString(ptr(args[0]));
//         if (filename === "/proc/cpuinfo") {
//             this.flag = true; // Set the flag if /proc/cpuinfo is opened
//             this.fname = filename; // Store the file name

            
//             var backtrace = Thread.backtrace(this.context, Backtracer.ACCURATE)
//                                  .map(DebugSymbol.fromAddress)
//                                  .join("\n\t");
//             console.log("File [ " + this.fname + " ] opened.\nBacktrace:\n\t" + backtrace);
//         }
//     },
//     onLeave: function (retval) {
//         if (this.flag) {
            
//             fds[retval] = this.fname;
//             console.warn("\nFile descriptor for /proc/cpuinfo: " + retval);
//         }
//     }
// });

// ['read', 'pread', 'readv'].forEach(function (fnc) {
//     Interceptor.attach(Module.findExportByName(null, fnc), {
//         onEnter: function (args) {
//             var fd = args[0]; 
//             if (fd in fds && fds[fd] === "/proc/cpuinfo") {
                
//                 console.log(fnc + ": Reading from /proc/cpuinfo");

               
//                 var backtrace = Thread.backtrace(this.context, Backtracer.ACCURATE)
//                                      .map(DebugSymbol.fromAddress)
//                                      .join("\n\t");
//                 console.log(fnc + " Backtrace:\n\t" + backtrace);
//             }
//         }
//     });
// });


var fds = {}; // Stores file descriptors for tracked files

// Hooking 'open' to track when /proc/cpuinfo is opened
Interceptor.attach(Module.findExportByName(null, 'open'), {
    onEnter: function (args) {
        var fname = Memory.readCString(args[0]);
        if (fname.endsWith('/proc/cpuinfo')) {
            this.flag = true; // Mark that /proc/cpuinfo has been opened
            this.fname = fname;
            console.log('File descriptor for /proc/cpuinfo: ', this.fname);
        }
    },
    onLeave: function (retval) {
        if (this.flag) {
            fds[retval.toInt32()] = this.fname; // Store the file descriptor
            console.log(`Opened /proc/cpuinfo with file descriptor: ${retval}`);
        }
    }
});

// Hook 'read' to log the data read from /proc/cpuinfo
['read', 'pread', 'readv'].forEach(fnc => {
    Interceptor.attach(Module.findExportByName(null, fnc), {
        onEnter: function (args) {
            var fd = args[0].toInt32();
            if (fds[fd]) { // Check if it's the file descriptor for /proc/cpuinfo
                console.log(`Reading from /proc/cpuinfo (fd: ${fd})`);
                this.fd = fd; // Store the file descriptor
                this.buf = args[1]; // Save the buffer to log its contents
                this.size = args[2].toInt32(); // Size of the data to be read
            }
        },
        onLeave: function (retval) {
            if (this.fd && fds[this.fd]) {
                // Read the contents from the buffer and convert to a string
                var content = Memory.readCString(this.buf, this.size);
                console.log(`Contents read from /proc/cpuinfo:\n${content}`);
            }
        }
    });
});

