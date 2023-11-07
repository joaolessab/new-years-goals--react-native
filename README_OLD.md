## Setting up a local development environment

### For Android

1. Download and install the [official Android Studio](https://developer.android.com/studio) for your OS;
2. Open the installed Android Studio app;
3. Click on `More Options` >> `Virtual Device Manager`;
4. You will see a default device, but you can create new ones
   **You should pick a device that has an icon of the "Play Store" column, so it will be able to download Expo from the Play Store**;
5. Hit `Next`;
6. Select the system image (`API 32` for example - which it's the latest one right now);
7. Hit `Next`;
8. Keep all the `Default settings`;
9. Trigger `Finish`;
10. Now you'll have a new device emulator ready to be used;
11. You can click the `Play` button, to launch this device emulator;

### For iOS

1. Download and Install the [Xcode tool](https://apps.apple.com/us/app/xcode/id497799835?mt=12) for Mac OS;
   **Important note: if you're not using a Mac OS, you can't run the emulator on Windows or Linux devices. This is a limitation applied by Apple.**
2. If it's the first time running the XCode, it will ask you to select the platforms that you want to develop for;
3. Select iOs, macOs and so on - wait until the installation, it will take some time;
4. After installed, open MacOS `Finder` >> `Application`;
5. Click with the right button on `XCode` >> `Show Packages Contents` >> `Contents` >> `Developer` >> `Applications` >> `Simulator App`;
6. Open it;
7. To change device version: `File` >> `Simulator` >> Pick the version you want;
