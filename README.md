# goals-app--react-native

Simple app that tracks our goals, made using React Native.

## What is React Native?

- You can build native apps (iOS and Android), using React.js and distribute them on the official stores;
- `React.js` **is a library that is independent** from `React Native` though;

### React.js

- A JS library for building user interfaces;
- Typically used for web development;
- But it's actually the `react-dom` that adds web support to it!
- React itself without `react-dom` is platform-agnostic - which means that you can use `React.js` in conjunction with `react-dom` to build web apps, but `React.js` library actually does not care about the underlying platform;
- React just give you tools for managing state, for building virtual component trees, and then you need an extra library like `react-dom` for **translating the result that React produced to an actual platform** - like the browser;

### React Native

- It's basically an alternative to `react-dom`, therefore;
- `React Native` gives you a collection of "special" React components - which you can use in your JSX code;
- `React Native` ships with built-in components that you can use, and those components are then compiled to native UI elements for the iOS and Android platforms;
- `React Native` will also take care about this compilation step;
- In addiation, `React Native` also exposes certain native platform APIs (like using the device camera), so that you can use such features in your JS code, even though you need to tap into native device APIs for that;
- In the end, `React Native` is like `react-dom`, it just does not target the web (the browser as platform) - but instead: iOS and Android;
- `React Native` gives you all the components and the APIs that you need to interact with those platforms and to build apps for those platforms;
- We will write our code in `React.js` and then just use these extra `React Native` components;

## Under the Hood of React Native components

| Web Browser (`react-dom`) | Native Component (Android) | Native Component (iOS) | React Native JSX |
| ------------------------- | -------------------------- | ---------------------- | ---------------- |
| `<div>`                   | `android.View`             | `UIView`               | `<View>`         |
| `<input>`                 | `EditText`                 | `UITextField`          | `<TextInput>`    |
| ...                       | ...                        | ...                    | ...              |

## What about the logic?

- Unlike the UI elements, the logic is not compile like the native components, but instead it's running on a JS thread (that's hosted by `React Native` in the native app that was built);
- `React Native` basically spins up a simple JS process and manages this process for you and allow this process to talk to the underlying platform, which would be iOS and Android - through a basic translation bridge;

## Setting Up your environment

- You have 2 choices on how to do this:

1. [Expo CLI](https://reactnative.dev/docs/environment-setup?guide=quickstart) | Default and recommended;
2. [React Native CLI](https://reactnative.dev/docs/environment-setup?guide=native) | Alternative option;

- Both approaches will give you a development env where you can build your apps;

### Expo CLI vs. React Native

- Expo is in the end a third-party service (free) that you can use. You don't have to sign-up or pay anything;
- Expo also have some extra features that you can pay and needed to sign-up, but to build the apps, you don't actually need those;
- When using Expo CLI and other couple of tools provided by Expo, writing native apps with React Native is more convenient than with just the React Native CLI and has less friction;
- You can still leave this Expo approach ecosystem anytime, if you need to - you can switch ˜eject" anytime;
- Expo is a way easier than React Native CLI;

#### Why do we have the React Native CLI then?

- Because it existed before Expo and it's the tool provided by the React Native team and the community around React Native;
- It gives you a bare-bone React Native development setup (you need to set up way more);
- Less convinience features, and if you need to tap into certain native device features, such as device camera or something, it's going to requires extra work when not having the Expo around it;
- The good thing of React Native CLI is that's easier to integrate with native source code written in Java or Objectivce-C, SWIFT or Kotlin, so if you must mix JS code and native device source code, then using just their React Native CLI could be beneficial (the idea behing React Native it's that you don't have to mix code or do this kind of thing too often);

- **Expo is not just about the tool that creates the projects, but it will also give us helpful packages and tools that we can use when writing the code**;

## Creating a new Project with React Native

1. Install latest `Node.js LTS` package;
2. Run `npm install -g expo-cli`;
3. In your repo directory, run: `expo init ProjectName`;
4. `cd ProjectName`;
5. `npm start`;

### References

- [React Native | Official Docs](https://reactnative.dev/);
