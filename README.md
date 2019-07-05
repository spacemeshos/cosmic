<h1  align="center">
<a  href="https://spacemesh.io"><img  width="400"  src="https://spacemesh.io/content/images/2018/05/logo-black-on-white-trimmed.png"  alt="Spacemesh logo" /></a>
<p align="center">Cosmic Apps Seed 🌱🌌</p>
</h1>
<p  align="center">
<a  href="https://gitcoin.co/profile/spacemeshos"  title="Push Open Source Forward">
<img src="https://gitcoin.co/static/v2/images/promo_buttons/slice_02.png"  width="267px"  height="52px"  alt="Browse Gitcoin Bounties"/>
</a>
</p>

# Overview and Motivation
Universal apps are apps which can run on mobile native or on the web inside a web browser.
A Cosmic app is a mobile / web / desktop app - an app which can run in a web browser, on the desktop across all major desktop platforms and on mobile native on iOS and Android. A cosmic app shares all non presentation code between all platforms and ideally only has platform-specific presentation code for few platform-optimized features. e.g. use FaceId for user authentication when running on iPhone X. But the core idea that 90%+ of presentation code - the UI and layout is shared between all supported runtime platform.

## A demo Cosmic App
![Cosmic App](./assets/cosmic_app.png)
Isn't this lovely?

This project aims to be a well designed and maintained seed for a cosmic (native mobile, web, desktop) app based on react native web, redux and typescript.

Team Spacemesh is building a cosmic `Spacemesh App` as the first client for [go-spacemesh](https://github.com/spacemeshos/go-spacemesh). Team Spacemesh decided to support Cosmic with funded github issues and contribute the seed to the community under the permissive MIT license. Spacemesh will use Cosmic as the foundation for its cosmic wallet app.

# Why Cosmic?
Because `universal` is taken and Cosmic means universal, as of the cosmos :-)

# What is this good for?
Tl;dr - the world should have a well-maintained seed for cosmic apps.

There are several similar seeds out there, but none with the project scope and goals we have in mind and none seem to be well maintained and updated.

Having a well designed and maintained seed for cosmic apps is useful for many kinds of applications across many verticals and can drastically reduce boilerplate code and encourages reuse of software components across different kind of packaging and execution environments.

## Project Goals
We aim to provide a generic starter seed for building a modern, universal app with the following properties:
- 100% sharing of app components (business logic) between all platforms
- 100% sharing of platform services and assets management between all platform
- Native iOS and Android look-and-feel
- Reuse of all UI components and layout across all platforms
- Use one main programming language for all platforms - Typescript to the rescue
- Use only open source libraries and frameworks

We hope that using the seed developers will be able to be more productive in building cosmic apps as they can focus on their app logic and work using established patterns instead of having to write lots of boilerplate infrastructure code to support each runtime execution environment.

## Architectural Directions

tl'dr - Yes, we are opinionated, very opinionated. We'd like to establish baselines patterns and libraries for cosmic apps. The following diagram outlines the concept:

![Cosmic Arch](./cosmic_arch.png)

-  `React Native Web` for all UI widgets and layout

-  `Redux` for all app state management and data flow between app components and ui components

-  `React Router` for app navigation. We would like to try using [react-native-router-flux](https://github.com/aksonov/react-native-router-flux)

-  `App Components` is where all shared application logic should be implemented. App components method are called based on app events (such as screen load or request for display data) via redux. App components are shared between all runtime environment and are basically `Javascript modules`

-  `Platform Services` are cross-platform components to deal with local resources such as secure storage, local db and local file system. They are implemented to support all runtime environment. e.g. desktop, native, web... They are used by `App Components` to implement app functionality.

-  `Assets https service` - We'd like to share almost all static assets / resources between all runtime platforms by serving them over https. React Native supports [Network Resources](https://facebook.github.io/react-native/docs/images.html#network-images) which we can use for implementing cross-platform resources. We may resort to bundling some assets for mobile native delivery based on profiling but this will be an exception to the rule. For the demo app, we should use git hosted resources. All network resources should always be served over https.

-  `packaging` - an Cosmic app is packaged to the 4 currently supported platforms - Web, Desktop, iOS and Android. Packaging is implemented via tools and compile-time scripts. Desktop is supported via `Electron` packaging. Both Desktop and Web packaging include a `Node.js` app to serve the App screens. iOS and Android packaging is implemented using `React Native` packaging tools. Mobile native packaging supports `Assets Bundles` - bundling of static assets in the mobile native app packaged binary.

- The cloud provides data and cloud services via `https-json` services implementing various APIs. The implementation details of these kind of services are irrelevant as far as an cosmic app is concerned as long as they provide the app with a functional documented API over a cloud endpoint. Note that the seed doesn't include cloud services. They are discussed here to explain how cosmic apps are implemented

-  `Typescript` is the sorcery which allows developers to build and to test cosmic apps with knowledge of only one programming language. It provides some type safety and a modern syntax for Javascript - the language actually used at the runtime of cosmic apps. It is a good choice because it is the recommended language or it is at least well supported by all underling libraries and frameworks used to build cosmic apps such as `react-native`, `react-native-web`


## Setup
1. Clone the repo

```git clone https://github.com/spacemeshos/cosmic.git```

2. Follow [these instructions](https://facebook.github.io/react-native/docs/getting-started.html
) for setting up a React Native project dev environment

### Android Dev Notes
1. Follow the React Native instructions for installing Android dev tools

2. Make sure you have JAVA_HOME env var set to the Java 8 JDK as well as your ANDROID_HOME

```
e.g: export JAVA_HOME=<path-to-your-jdk>/<jdk>/Contents/Home
export ANDROID_HOME=<path-to-your-android-sdk>
export PATH=${PATH}:${ANDROID_HOME}/tools
export PATH=${PATH}:${ANDROID_HOME}/platform-tools
```
3. Run the emulator with an Android 6 (with Google Play) device

4. Update `build-scripts/local.properties` with the right path to your android sdk. [Detailed instructions](https://stackoverflow.com/questions/32634352/react-native-android-build-failed-sdk-location-not-found/43626724#43626724).

### Install project dependencies
```yarn install```


### Development builds

#### web
``` yarn web ```

#### Mobile
Remove all build directories (optional):

``` yarn clean-all```

Generate android and ios builds:

``` yarn mobile```

Serve App on Android Emulator:

```yarn android```

Serve App on iOS Simulator:

```yarn ios```

Start and Electron dev app session:

```yarn electron-dev```  

### Production builds

#### Mobile
```yarn mobile```

#### Web
```yarn build```

#### Desktop
```yarn dist```

#### Bundling for Android
```yarn bundle-android```

#### Building for OS X, Windows and Linux
```yarn electron-pack```

### Tests
This seed uses Jest for unit testing and calabash-android for android automation testing.

#### Running Calabash Android Tests
1. Install [ruby](https://rubyonrails.org)
1. Run ```bundle install```
2. Run ```bundle exec calabash-android run /path/to/android/apk/file```

### Running unit tests
```yarn test```

### Known issues
1. The name react-native was looked up in the Haste module map. Remove the *haste-map-* files from your tmp file and rebuild.
For Linux
```rm -rf /tmp/haste-map-*```
For OSX
```
yarn cache clean
watchman watch-del-all
rm -rf $TMPDIR/metro-bundler-cache-*
rm -rf $TMPDIR/metro-cache-*
rm -rf $TMPDIR/react-native-packager-cache-*
rm -rf $TMPDIR/haste-map-metro-*
```

## Community
-  [Cosmic Dev Talk](https://gitter.im/spacemesh-os/cosmic) Gitter Channel

- We are actively looking for contributors, collaborators and maintainers. Get in touch via Gitter.
- Help wanted - Our Epic first Gitcoin funded issue: https://github.com/spacemeshos/cosmic/issues/2

## Misc cool tools
- Real-time rendering of react-native-web code in your browser: https://codesandbox.io/s/q4qymyp2l6
- React-native-web components [storybook](https://necolas.github.io/react-native-web/storybook/)
- [React-native-web](https://github.com/necolas/react-native-web)
- [React-native-web-examples](https://necolas.github.io/react-native-web/examples/)
