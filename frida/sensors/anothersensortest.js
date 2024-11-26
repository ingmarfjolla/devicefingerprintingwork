Java.perform(function () {
    const SensorManager = Java.use("android.hardware.SensorManager");
    const Sensor = Java.use("android.hardware.Sensor");

    // Hook getDefaultSensor to make it look like all sensors are available
    SensorManager.getDefaultSensor.overload('int').implementation = function (type) {
        console.log("Intercepted getDefaultSensor for type: " + type);

        // Return a non-null Sensor object to spoof sensor availability
        const sensor = this.getDefaultSensor(type);
        if (sensor === null) {
            console.log("Spoofing sensor type: " + type);
            const fakeSensor = Sensor.$new();
            return fakeSensor;  // Return a dummy Sensor object
        }
        return sensor;
    };

    // Hook registerListener to pretend the sensors are providing data
    SensorManager.registerListener.overload(
        "android.hardware.SensorEventListener",
        "android.hardware.Sensor",
        "int"
    ).implementation = function (listener, sensor, delay) {
        console.log("Spoofing sensor data for sensor: " + sensor.getType());

        // Call the original registerListener method
        const result = this.registerListener(listener, sensor, delay);

        // Mock data for each sensor type
        if (sensor.getType() === Sensor.TYPE_ACCELEROMETER) {
            setTimeout(function () {
                sendSensorData(listener, [0.0, 9.8, 0.0]);  // Example values for gravity
            }, 1000);
        } else if (sensor.getType() === Sensor.TYPE_GYROSCOPE) {
            setTimeout(function () {
                sendSensorData(listener, [0.1, 0.2, 0.3]);  // Example rotation values
            }, 1000);
        } else if (sensor.getType() === Sensor.TYPE_MAGNETIC_FIELD) {
            setTimeout(function () {
                sendSensorData(listener, [30.0, 60.0, 90.0]);  // Example magnetic field values
            }, 1000);
        }

        return result;
    };

    // Helper function to simulate sensor event data
    function sendSensorData(listener, values) {
        Java.scheduleOnMainThread(function () {
            const SensorEvent = Java.use("android.hardware.SensorEvent");
            const sensorEvent = SensorEvent.$new(values.length);
            sensorEvent.values = values;
            listener.onSensorChanged(sensorEvent);
            console.log("Sent spoofed sensor data: " + values);
        });
    }

    console.log("Sensor check bypass set up successfully.");
});