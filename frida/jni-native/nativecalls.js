Java.perform(function () {
    var System = Java.use("java.lang.System");
    
    System.loadLibrary.overload('java.lang.String').implementation = function (libname) {
        console.log("[*] System.loadLibrary called for: " + libname);
        this.loadLibrary(libname);
    };
    
    System.load.overload('java.lang.String').implementation = function (filename) {
        console.log("[*] System.load called for: " + filename);
        this.load(filename);
    };
});