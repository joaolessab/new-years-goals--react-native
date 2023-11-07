# New Year's Goals

Simple app that tracks our New Year's Goals, made using React Native.

<img src="../main/docs/images/image-1.png?raw=true" width="650" height="350" />`

## Table of Contents

- [Getting Started](#getting-started-)
  - [Introduction](#introduction)
    - [What's React Native?](#whats-react-native)
    - [What's React.js](#react.js)
    - [Under the Hood of React Native components](#under-the-hood-of-react-native-components)
    - [What about the logic?](#what-about-the-logic)
  - [Prerequisites](#prerequisites)
  - [Installation](#installation)
- [Running the Project](#running-the-project-%EF%B8%8F)
- [Project Structure](#project-structure-)
- [Demo](#demo-)
- [Technology Stack](#technology-stack-)
- [Frequently Asked Questions (FAQ)](#frequently-asked-questions-faq-)
- [Bonus](#bonus)
  - [Creating a new Project with React Native]()
  - [Setting up custom Fonts]()
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

### Installation

Clone the repository and install the dependencies:

```bash
git clone https://github.com/joaolessab/awesome-react-native-project.git
cd awesome-react-native-project
npm install
```

## Running the Project 🏃‍♂️

Explain how to run the project. Include any specific steps, configurations, or commands that might be necessary.

- `react-native run-android` # For Android
- `react-native run-ios` # For iOS

## Project Structure 📁

Explain the structure of your project. Briefly describe what each folder/file contains.

    .
    ├── ...
    ├── src                                 # Documentation files (alternatively `doc`)
    │   |── ├── components/                 # Table of contents
    │   |── ├──|── Component1.jsx.          # Frequently asked questions
    │   ├── misc.md                         # Miscellaneous information
    │   ├── usage.md                        # Getting started guide
    │   └── ...                             # etc.
    └── ...

## Demo 🎥

https://github.com/joaolessab/goals-app--react-native/assets/21973502/d3b2c681-61e4-4e85-a4d1-edcbd5283d91

## Technology Stack 🛠

This project was built using the following technologies and stacks:

- [React Native](https://reactnative.dev/);

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

1. Create the file `react-native.config.js` in the root folder of the project;
2. Run in your terminal: `npx react-native-asset`;
3. Call the fontFamily in your stylesheet;
4. Restart the App + Emulators;

#### Mode 2

## References 📚

- [React Native | Official Docs](https://reactnative.dev/);
- [React Native | Components Reference](https://reactnative.dev/docs/components-and-apis);
- [Expo | Official Docs](https://docs.expo.dev/);
