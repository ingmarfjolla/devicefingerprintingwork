Java.perform(function() {
    var SensorManager = Java.use("android.hardware.SensorManager");

    // Hook getSensorList method
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

    // Hook unregisterListener method
    SensorManager.unregisterListener.overload("android.hardware.SensorEventListener").implementation = function(listener) {
        console.log("unregisterListener called");
        return this.unregisterListener(listener);
    };

    // Hook getDefaultSensor method
    SensorManager.getDefaultSensor.implementation = function(type) {
        console.log("getDefaultSensor called with type: " + type);
        return this.getDefaultSensor(type);
    };
});

// var SensorEventListener = Java.use("android.hardware.SensorEventListener");

// SensorEventListener.onSensorChanged.implementation = function(event) {
//     console.log("onSensorChanged called with event: " + event);
//     this.onSensorChanged(event);
// };