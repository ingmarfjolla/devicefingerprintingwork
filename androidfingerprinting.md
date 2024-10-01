## intro 

This is an inital poke around of code base for the android fingerprinting library to better understand how it works. Theres two main things it shows in the UI, the Device ID which fingperprint says is truly random and then the fingerprint which could be the same across 2 devices since that gets device specific things. 


## Device ID 

Relevant files:

1. 
src/main/java/com/fingerprintjs/android/fingerprint/device_id_providers/AndroidIdProvider.kt


method used / goal -> this uses the ANDROID_ID (https://developer.android.com/reference/android/provider/Settings.Secure#ANDROID_ID) through the android secure settings that gets an android ID. `android.provider.Settings` and `Settings.Secure.getString ` are the relevant android api stuff



2. 
src/main/java/com/fingerprintjs/android/fingerprint/device_id_providers/GsfIdProvider.kt

method used / goal -> This gets the Google Services Framework (GSF) Android ID. A little bit more about it here: https://android.stackexchange.com/questions/162448/difference-between-android-id-and-device-id and here: https://raccoon.onyxbits.de/blog/what-exactly-is-a-gsf-id-where-do-i-get-it-from-and-why-should-i-care-2-12/. This is another unique identifier that google play / google use to identify the devices. Uses the `android.content.contentresolver` api and constructs a Uri object from the URI_GSF_CONTENT_PROVIDER string ("content://com.google.android.gsf.gservices"), which points to the content provider where Google Services stores the Android ID.

3.

src/main/java/com/fingerprintjs/android/fingerprint/device_id_providers/MediaDrmIdProvider.kt

method used / goal ->  This gets a Widevine DRM ID: https://developers.google.com/widevine/drm/overview, https://www.xda-developers.com/check-widevine-drm-status-android/ that uses `android.media.MediaDrm` as another unique identifier. This ID is used to see if your device can stream stuff for example (as far as i can understand media DRM etc)


## Fingerprint 

general overview of all signals: src/main/java/com/fingerprintjs/android/fingerprint/fingerprinting_signals/FingerprintingSignals.kt 


### Hardware: 

src/main/java/com/fingerprintjs/android/fingerprint/info_providers/OsBuildInfoProvider.kt

This gets the values for model name, manufactuerr name, android version, SDK version, kernel version and fingerprint. They all are captured through the `android.os.Build` API. 


src/main/java/com/fingerprintjs/android/fingerprint/info_providers/MemInfoProvider.kt

This gets the RAM, internal and external storage space. These are captured through the `android.app.ActivityManager` for ram and `android.os.StatFs` for storage. 


src/main/java/com/fingerprintjs/android/fingerprint/info_providers/CpuInfoProvider.kt

This gets info about the CPU mainly. It's a bit tricky, since it seems to perform parsing of the `/proc/cpuinfo` file but also uses `android.os.Build` for https://developer.android.com/ndk/guides/abis 


src/main/java/com/fingerprintjs/android/fingerprint/info_providers/SensorsInfoProvider.kt

This gets information about the sensors which includes sensor name and vendor name. They use `android.hardware.Sensor` and `android.hardware.SensorManager` for this. https://developer.android.com/reference/android/hardware/SensorManager 


src/main/java/com/fingerprintjs/android/fingerprint/info_providers/InputDevicesInfoProvider.kt

This gets information about input devices (keyboard etc) that might be connected. This uses `android.hardware.input.InputManager` to get the device name and vendor. 

src/main/java/com/fingerprintjs/android/fingerprint/info_providers/BatteryInfoProvider.kt

Information about the battery. This one is a bit tricky, it uses `android.content.Context` and `android.os.BatteryManager` for the battery health and then uses a classloader to look at `com.android.internal.os.PowerProfile` and the method `getBatteryCapacity` for battery capacity.

src/main/java/com/fingerprintjs/android/fingerprint/info_providers/CameraInfoProvider.kt

gets information about the camera name, type and orientation. All these come from `android.hardware.Camera`.


src/main/java/com/fingerprintjs/android/fingerprint/info_providers/GpuInfoProvider.kt

This gets infromation about the openGL ES (gpu stuff) version. This is done through the `android.app.ActivityManager` (glesversion)


### Operating system

src/main/java/com/fingerprintjs/android/fingerprint/info_providers/OsBuildInfoProvider.kt

This gets the values for model name, manufactuerr name, android version, SDK version, kernel version and fingerprint(https://stackoverflow.com/questions/5041665/creating-build-fingerprint-on-android). They all are captured through the `android.os.Build` API. 


src/main/java/com/fingerprintjs/android/fingerprint/info_providers/DeviceSecurityInfoProvider.kt

This gets whether there is storage encryption on the device, information about the security providers https://developer.android.com/privacy-and-security/security-gms-provider and if pin security is enabled. 

This is done with the `android.app.admin.DevicePolicyManager` to get encryption status, the `android.app.KeyguardManager` for the pin information, and `java.security.Security` for information about the security providers. This one is interesting. 



src/main/java/com/fingerprintjs/android/fingerprint/info_providers/CodecInfoProvider.kt 

This gets the name and capabilities of the media codecs: 
https://developer.android.com/reference/android/media/MediaCodecList on the device. media codec refers to supported media formats. 

This is done through the `android.media.MediaCodecList` api. 

### Installed Apps

src/main/java/com/fingerprintjs/android/fingerprint/info_providers/PackageManagerInfoProvider.kt

This g ets the application list, and system applications list (so ones that were installed by default I think). https://developer.android.com/reference/android/content/pm/PackageManager are the android docs, and stack overflow article: https://stackoverflow.com/questions/2695746/how-to-get-a-list-of-installed-android-applications-and-pick-one-to-run as an example of a non fingerprinting reason to do this. 

This is done with the `android.content.pm.PackageManager` api. 

### Device State

src/main/java/com/fingerprintjs/android/fingerprint/info_providers/SettingsInfoProvider.kt

This is a LONG one with a lot that happens. It gets whether adb (android debug) is enabled, development settings are enabled, whether the device is using an httpProxy, transition animation, window animation, data roaming, accessability, input methods, rtt calling(https://www.androidauthority.com/rtt-calling-3324735/), alarm alert path (Persistent store for the system-wide default alarm alert.), date format, end button behavior(), font scale, screen off timeout, text auto replace enable, text auto punctuate, time120r24(Display the user's times, e.g. in the status bar, as 12 or 24 hours.) 

This is done with the `android.os.Build` to facilitate figuring out SDK version, then the `android.provider.Settings` to get most of the information. They use `global` `secure` and `system` settings which are nested classes within: https://developer.android.com/reference/android/provider/Settings


src/main/java/com/fingerprintjs/android/fingerprint/info_providers/FingerprintSensorInfoProvider.kt

This gets whether or not a fingeprint sensor is supported on a device, and if it is whether or not it is enabled. 

This is done with the `android.os.Build` to get the build version and then with `androidx.core.hardware.fingerprint.FingerprintManagerCompat`. Some more info : https://medium.com/kinandcartacreated/androidx-biometricprompt-vs-fingerprintmanager-the-good-and-the-ugly-c15a1b3a67d7. We might want to look into the biometric one as well since it might be used in the proprietary version?.. 


src/main/java/com/fingerprintjs/android/fingerprint/info_providers/DevicePersonalizationInfoProvider.kt 

This gets the ringtone source(looks at the default ringtone path), 
available locales (https://stackoverflow.com/questions/7973023/what-is-the-list-of-supported-languages-locales-on-android this might be used to distinguish versions of android? not sure), region country, default language, and timezone (which is probably used to see whether theres some mismatch)

This is mainly done with the `android.media.RingtoneManager` for ringtone source, `android.content.res.AssetManager` for the available locales, `android.content.res.Configuration` for the region country, then uses the `java.util.Locale` and `java.util.TimeZone` for the other two. Maybe theres some differences with what android and java will return if its an emulator? 

