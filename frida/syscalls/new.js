Java.perform(function() {
    ///settings secure
    var SettingsSecure = Java.use("android.provider.Settings$Secure");
    SettingsSecure.getString.overload('android.content.ContentResolver', 'java.lang.String').implementation = function(contentResolver, key) {
        console.log("Settings.Secure.getString called with key: " + key);
        var result = this.getString(contentResolver, key);
        console.log("Result: " + result);
        return result;
    };

    ///reflection stuff
    var Method = Java.use("java.lang.reflect.Method");
    Method.invoke.implementation = function (receiver, args) {
        console.log("[JAVA] Reflection called: " + this.getName());
        return this.invoke.call(this, receiver, args);
    };

    var SensorManager = Java.use("android.hardware.SensorManager");
    SensorManager.getSensorList.implementation = function(type) {
        console.log("getSensorList called with type: " + type);
        return this.getSensorList(type);
    };

    // Hook registerListener method
    SensorManager.registerListener.overload(
        "android.hardware.SensorEventListener", 
        "android.hardware.Sensor", 
        "int"
    ).implementation = function(listener, sensor, delay) {
        console.log("registerListener called with sensor: " + sensor + " delay: " + delay);
        return this.registerListener(listener, sensor, delay);
    };

    // Hook overload: registerListener(SensorListener, int)
    SensorManager.registerListener.overload(
        "android.hardware.SensorListener", 
        "int"
    ).implementation = function(listener, delay) {
        console.log("registerListener(SensorListener, int) called with delay: " + delay);
        return this.registerListener(listener, delay);
    };

    // Hook overload: registerListener(SensorListener, int, int)
    SensorManager.registerListener.overload(
        "android.hardware.SensorListener", 
        "int", 
        "int"
    ).implementation = function(listener, delay1, delay2) {
        console.log("registerListener(SensorListener, int, int) called with delays: " + delay1 + ", " + delay2);
        return this.registerListener(listener, delay1, delay2);
    };

    // Hook overload: registerListener(SensorEventListener, Sensor, int, int)
    SensorManager.registerListener.overload(
        "android.hardware.SensorEventListener", 
        "android.hardware.Sensor", 
        "int", 
        "int"
    ).implementation = function(listener, sensor, delay1, delay2) {
        console.log("registerListener(SensorEventListener, Sensor, int, int) called with sensor: " + sensor + ", delays: " + delay1 + ", " + delay2);
        return this.registerListener(listener, sensor, delay1, delay2);
    };

    // Hook overload: registerListener(SensorEventListener, Sensor, int, Handler)
    SensorManager.registerListener.overload(
        "android.hardware.SensorEventListener", 
        "android.hardware.Sensor", 
        "int", 
        "android.os.Handler"
    ).implementation = function(listener, sensor, delay, handler) {
        console.log("registerListener(SensorEventListener, Sensor, int, Handler) called with sensor: " + sensor + ", delay: " + delay + ", handler: " + handler);
        return this.registerListener(listener, sensor, delay, handler);
    };

    // Hook overload: registerListener(SensorEventListener, Sensor, int, int, Handler)
    SensorManager.registerListener.overload(
        "android.hardware.SensorEventListener", 
        "android.hardware.Sensor", 
        "int", 
        "int", 
        "android.os.Handler"
    ).implementation = function(listener, sensor, delay1, delay2, handler) {
        console.log("registerListener(SensorEventListener, Sensor, int, int, Handler) called with sensor: " + sensor + ", delays: " + delay1 + ", " + delay2 + ", handler: " + handler);
        return this.registerListener(listener, sensor, delay1, delay2, handler);
    };



    const WifiInfo = Java.use("android.net.wifi.WifiInfo");
    const NetworkInfo = Java.use("android.net.NetworkInfo");

    // Log MAC address check and return the original value
    WifiInfo.getMacAddress.implementation = function () {
        const originalMacAddress = this.getMacAddress();
        console.log("getMacAddress called. Original MAC address: " + originalMacAddress);
        return originalMacAddress;  // Return the original MAC address
    };

    // Log IP address check and return the original value
    WifiInfo.getIpAddress.implementation = function () {
        const originalIpAddress = this.getIpAddress();
        console.log("getIpAddress called. Original IP address (integer): " + originalIpAddress);
        return originalIpAddress;  // Return the original IP address
    };

    // Log network connection state and return the original value
    NetworkInfo.isConnected.implementation = function () {
        const originalState = this.isConnected();
        console.log("isConnected called. Original connection state: " + originalState);
        return originalState;  // Return the original connection state
    };

});
