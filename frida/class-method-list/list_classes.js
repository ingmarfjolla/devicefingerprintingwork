//https://github.com/interference-security/frida-scripts/blob/master/android/show-all-classes.js
Java.perform(function() {
    var classList = [];
    Java.enumerateLoadedClasses({
        onMatch: function(className) {
            console.log(className);
            classList.push(className)
        },
        onComplete: function() {
            console.log("Done enumerating classes.");
        }
    });
});
