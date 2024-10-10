/* Description: Show all class name and method
 * Mode: S+A
 * Version: 1.0
 * Credit: https://github.com/interference-security/frida-scripts/tree/master/android
 * Author: @interference-security https://github.com/noobpk/frida-android-hook/blob/master/frida-android-hook/frida-scripts/show-all-classes-methods.js
 */
Java.perform(function() {
	Java.enumerateLoadedClasses({
		onMatch: function(className) {
			console.log("[*] Class Name: " + className);
			var db1 = Java.use(className);
			var methodArr = db1.class.getMethods();
			for(var m in methodArr)
			{
				console.log("\t" + methodArr[m]);
			}
		},
		onComplete: function() {}
	});
});