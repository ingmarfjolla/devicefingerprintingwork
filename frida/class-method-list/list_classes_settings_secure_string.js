Java.perform(function() {
    var SettingsSecure = Java.use("android.provider.Settings$Secure");
    SettingsSecure.getString.overload('android.content.ContentResolver', 'java.lang.String').implementation = function(contentResolver, key) {
        console.log("Settings.Secure.getString called with key: " + key);
        var result = this.getString(contentResolver, key);
        console.log("Result: " + result);
        return result;
    };
});
