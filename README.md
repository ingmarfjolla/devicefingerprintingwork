./adb connect <ip address>
./adb root
./adb push /pathtofridaserver/frida-server /data/local/tmp
./adb shell "chmod 755 /data/local/tmp/frida-server"
///install free version of demo
./adb install /pathtoapkfree/Playground-release-2.1.0.apk
./adb install /pathtoapkproprietary/FPJS-Pro-Playground-release-3.1.0.apk
./adb shell "/data/local/tmp/frida-server &"
