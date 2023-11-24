# New Year's Goals

Simple app that tracks your New Year's Goals, made using React Native.

<img src="../main/docs/screens_dark.svg?raw=true#gh-dark-mode-only" width="800" height="450" />
<img src="../main/docs/screens_light.svg?raw=true#gh-light-mode-only" width="800" height="450" />

## Table of Contents

- [Getting Started](#getting-started-)
  - [Introduction](#introduction)
    - [What's React Native?](#what-is-react-native)
    - [What's React.js](#what-is-react.js)
    - [Under the Hood of React Native components](#under-the-hood-of-react-native-components)
    - [What about the logic?](#what-about-the-logic)
  - [Prerequisites](#prerequisites)
- [Setting up a local development environment](#setting-up-a-local-development-environment)
  - [For Android](#for-android)
  - [For iOs](#for-ios)
- [Running the Project](#running-the-project-%EF%B8%8F)
  - [Installation](#installation)
  - [Virtual Device](#virtual-device)
  - [Real Device (Preview)](#real-device-preview)
- [Project Structure](#project-structure-)
- [Demo](#demo-)
- [Frequently Asked Questions (FAQ)](#frequently-asked-questions-faq-)
- [Bonus](#bonus-)
  - [Creating a new Project with React Native](#creating-a-new-project-with-react-native)
  - [Setting up custom Fonts](#setting-up-custom-fonts)
- [References](#references-)

## Getting Started 🚀

### Introduction

#### What is React Native?

- You can build native apps (iOS and Android), using React.js and distribute them on the official stores;
- `React.js` **is a library that is independent** from `React Native` though;

#### React.js

- A JS library for building user interfaces;
- Typically used for web development;
- But it's actually the `react-dom` that adds web support to it!
- React itself without `react-dom` is platform-agnostic - which means that you can use `React.js` in conjunction with `react-dom` to build web apps, but `React.js` library actually does not care about the underlying platform;
- React just give you tools for managing state, for building virtual component trees, and then you need an extra library like `react-dom` for **translating the result that React produced to an actual platform** - like the browser;

#### React Native

- It's basically an alternative to `react-dom`, therefore;
- `React Native` gives you a collection of "special" React components - which you can use in your JSX code;
- `React Native` ships with built-in components that you can use, and those components are then compiled to native UI elements for the iOS and Android platforms;
- `React Native` will also take care about this compilation step;
- In addiation, `React Native` also exposes certain native platform APIs (like using the device camera), so that you can use such features in your JS code, even though you need to tap into native device APIs for that;
- In the end, `React Native` is like `react-dom`, it just does not target the web (the browser as platform) - but instead: iOS and Android;
- `React Native` gives you all the components and the APIs that you need to interact with those platforms and to build apps for those platforms;
- We will write our code in `React.js` and then just use these extra `React Native` components;

#### Under the Hood of React Native components

| Web Browser (`react-dom`) | Native Component (Android) | Native Component (iOS) | React Native JSX |
| ------------------------- | -------------------------- | ---------------------- | ---------------- |
| `<div>`                   | `android.View`             | `UIView`               | `<View>`         |
| `<input>`                 | `EditText`                 | `UITextField`          | `<TextInput>`    |
| ...                       | ...                        | ...                    | ...              |

#### What about the logic?

- Unlike the UI elements, the logic is not compile like the native components, but instead it's running on a JS thread (that's hosted by `React Native` in the native app that was built);
- `React Native` basically spins up a simple JS process and manages this process for you and allow this process to talk to the underlying platform, which would be iOS and Android - through a basic translation bridge;

### Prerequisites

Before you get started, ensure you have the following installed:

- [Node.js and NPM](https://docs.npmjs.com/downloading-and-installing-node-js-and-npm);

- You have 2 choices for the CLI:

1. [Expo CLI](https://reactnative.dev/docs/environment-setup?guide=quickstart) | Default and recommended;
2. [React Native CLI](https://reactnative.dev/docs/environment-setup?guide=native) | Alternative option;

- Both approaches will give you a development env where you can build your apps;

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

## Running the Project 🏃‍♂️

### Installation

Clone the repository and install the dependencies:

```bash
git clone https://github.com/joaolessab/new-years-goals--react-native.git
cd app
yarn install
```

### Virtual Device

1. Run `yarn start`;
2. Press `a` or run `yarn android`;
   - Android Studio Emulator needs to be running before executing command;
3. Press `i` or run `yarn ios`;
   - If iOs Simulator does not work, run: `sudo xcode-select -s /Applications/Xcode.app/Contents/Developer` in your terminal;
4. Press `w` or run `yarn web`;

- You can serve on both simulators at the same time, yes!
- The reload process is automatically, but you can force it manually pressin `r` in the terminal;

### Real Device (Preview)

1. For iOS, visit the App Store and [download the Expo app](https://apps.apple.com/br/app/expo-go/id982107779);
2. Open the terminal and run: `yarn start`;
3. Get the QR Code on the terminal and scan it with your phone;
4. Give phone permissions and wait it until gets loaded;
5. Watch terminal for possible errors;

## Project Structure 📁

Explain the structure of your project. Briefly describe what each folder/file contains.

    .
    ├── ...
    ├── docs                                # Documentation files (alternatively `doc`)
    ├── app                                 # App main folder
    │   |── components/                     # Components broken into small pieces
    │   |── assets/                         # Images, fonts and icons for the app
    │   ├── App.js                          # Main file of the project
    │   ├── app.json                        # Basic settings of the app
    │   ├── package.json                    # Libraries and dependencies of the project
    │   └── ...                             # etc.
    └── ...

## Demo 🎥

https://github.com/joaolessab/new-years-goals--react-native/assets/21973502/d3b2c681-61e4-4e85-a4d1-edcbd5283d91



## Frequently Asked Questions (FAQ) ❓

### 1. Why common HTML does not work on React Native?

- Because they don't the the `dom` setup;
- Native devices are not browsers. Check the full list of [React Native components](https://reactnative.dev/docs/components-and-apis);
- Besides that, it works normally as an usual React app. You can combine those Native components to build your own customized components, for example:

```
const MyTitle = props => {
   return (
      <View>
         <Text>{props.title}</Text>
      </View>
   )
};
```

### 2. What about CSS? How does it work on React Native apps?

- There's no CSS in React Native apps. Why? Because again, it's not a browser;
- The CSS language does not exist here;
- Instead, you can either use Inline Styles or StyleSheet objects (styles written in JS);

### 3. Is `<View>` component equivalent to a `<div>` component?

- Pretty much, yes! But made for mobile Native apps;
- You can use a `<View>` inside another `<View>` and control the styles in the StyleSheets;

### 4. Does CSS cascade in React Native?

- No! You need to create a separated style object;
- There's not inheritance as well;

### 5. Scrolling on Native Apps

- If you want to scroll views in React Native, you have to explictly tell it;
- You can use the component `<ScrollView>`;
- Keep in mind that if you want to setup a height limitation, you have to setup a parent `<View>` for it;
- Keep in mind that this component has different effects for each mobile system;
- But, we have a downside here: `<ScrollView>` is great if you want to add scroll around some content. If you want to render a very long list, `<ScrollView>` will render it all behind the scenes and this can be a performance issue;
- `<FlatList>` is the component indicated to render bigger lists, so the user will only see the data as it gets closer to it and its a way more performatic;
- By default, `<FlatList>` looks for the key object in the array. Otherwise, you can use the `keyExtractor` prop to indicate the `key` field that you want to use;

### 6. `<Pressable>` component should replace `<Touchable>` ?

- Yes, it should. They are old React Native way;

### 7. Why `.bind()` is being used here?

- Because with `.bind()` is a standard JavaScript function, which basically allows us to pre-configure a function for future execution;

### 8. How do I style effects onPress?

- For Android, you can use props like: `android_ripple={{ color: '#210644' }}`;
- For iOs, you may want to add a function inside the style prop when an event is pressed, for example:
  `style={({ pressed }) => pressed && styles.pressedItem }`;

### 9. How to setup a StatusBar visible to the user?

- With expo, you can import `import { StatusBar } from 'expo-status-bar'` and set its style as "auto", "light", "dark", etc;
- The example would be like: `<StatusBar style="light" />`;

### 10. What's the difference between Expo CLI vs. React Native CLI?

- Expo is in the end a third-party service (free) that you can use. You don't have to sign-up or pay anything;
- Expo also have some extra features that you can pay and needed to sign-up, but to build the apps, you don't actually need those;
- When using Expo CLI and other couple of tools provided by Expo, writing native apps with React Native is more convenient than with just the React Native CLI and has less friction;
- You can still leave this Expo approach ecosystem anytime, if you need to - you can switch ˜eject" anytime;
- Expo is a way easier than React Native CLI;

### 11. Why do we have the React Native CLI then?

- Because it existed before Expo and it's the tool provided by the React Native team and the community around React Native;
- It gives you a bare-bone React Native development setup (you need to set up way more);
- Less convinience features, and if you need to tap into certain native device features, such as device camera or something, it's going to requires extra work when not having the Expo around it;
- The good thing of React Native CLI is that's easier to integrate with native source code written in Java or Objectivce-C, SWIFT or Kotlin, so if you must mix JS code and native device source code, then using just their React Native CLI could be beneficial (the idea behing React Native it's that you don't have to mix code or do this kind of thing too often);

- **Expo is not just about the tool that creates the projects, but it will also give us helpful packages and tools that we can use when writing the code**;

## Bonus 🎁

### Creating a new Project with React Native

1. Install latest `Node.js LTS` package;
2. Run `npm install -g expo-cli`;
3. In your repo directory, run: `npx create-expo-app ProjectName`;
4. `cd ProjectName`;
5. `yarn install`;
6. `npx expo start`;

### Setting up custom Fonts

#### Mode 1

1. In the `App.js` file, `import { useFonts } from 'expo-font'`;
2. Load the fonts right after declaring the page component:

```
const [fontsLoaded] = useFonts({
   'Merriweather-Regular': require('./assets/fonts/Merriweather-Regular.ttf'),
   'Merriweather-Black': require('./assets/fonts/Merriweather-Black.ttf'),
});

if (!fontsLoaded) {
   return null;
}
```

#### Mode 2

1. Create the file `react-native.config.js` in the root folder of the project;
2. Run in your terminal: `npx react-native-asset`;
3. Call the `fontFamily` in your stylesheet;
4. Restart the App + Emulators;

5. Call the `fontFamily` in your stylesheet;

## References 📚

- [React Native | Official Docs](https://reactnative.dev/);
- [React Native | Components Reference](https://reactnative.dev/docs/components-and-apis);
- [Expo | Official Docs](https://docs.expo.dev/);
