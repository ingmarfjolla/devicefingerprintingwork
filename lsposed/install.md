First clone this repo: 

https://github.com/shakalaca/MagiskOnEmulator

Then follow the instructions to install Magisk. You will run into errors, you'll need to change these lines in the prepare_image.sh file: 

```
adb -e shell "cp /data/local/tmp/root/*/initrd.img.old /data/local/tmp/initrd.img.gz"
adb -e shell "cp /data/local/tmp/root/*/ramdisk.img.old /data/local/tmp/ramdisk.img.gz"
```

with : 

```
adb -e shell "cp /data/local/tmp/root/*/initrd.img /data/local/tmp/initrd.img.gz"
adb -e shell "cp /data/local/tmp/root/*/ramdisk.img /data/local/tmp/ramdisk.img.gz"
```

Make sure you have this release of Magisk in the root directory: https://github.com/topjohnwu/Magisk/releases/tag/v21.4 

you need the zip NOT the APK. This fix does not seem to work on newer versions of magisk. 

Once the VM is rebooted and Magisk is enabled you should be good to install Riru and LSPosed on the device. 


To install Riru:
Get this version: https://github.com/RikkaApps/Riru/releases/tag/v25.4.4 (doesn't seem to work with newer ones)

Then run: adb push riru-v25.4.4-release.zip /sdcard/Download

Once you do that open Magisk and do "install from Storage" and you should see the zip file there. Install it and you should be prompted to reboot the device. 

Once that is installed we'll install LSPosed. 

Grab this release of LSPosed: https://github.com/LSPosed/LSPosed/releases/tag/v1.6.5 

then run: adb push LSPosed-v1.6.5-6272-riru-release.zip /sdcard/Download

you should now see LSPosed installed and ready to use. To install modules you can find them online and then install them with adb install. For XPrivacyLua: 

Get the release here: https://github.com/Xposed-Modules-Repo/eu.faircode.xlua and then run:
adb install XPrivacyLua-v1.35-136-release.apk

source code here: https://github.com/M66B/XPrivacyLua