# New Year's Goals

Simple app that tracks our New Year's Goals, made using React Native.

<img src="../main/docs/images/image-1.png?raw=true" width="650" height="350" />`

## Table of Contents

- [Getting Started](#getting-started-)
  - [Introduction](#introduction)
    - [What is React Native?](#what-is-react-native)
    - [React.js](#react.js)
    - [React Native](#react-native)
  - [Prerequisites](#prerequisites)
  - [Installation](#installation)
- [Running the Project](#running-the-project-%EF%B8%8F)
- [Project Structure](#project-structure-)
- [Demo](#demo-)
- [Technology Stack](#technology-stack-)
- [Frequently Asked Questions (FAQ)](#frequently-asked-questions-faq-)
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

## References 📚

- [React Native | Official Docs](https://reactnative.dev/);
- [React Native | Components Reference](https://reactnative.dev/docs/components-and-apis);
- [Expo | Official Docs](https://docs.expo.dev/);
