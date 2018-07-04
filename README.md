# Overview and Motivation
Universal apps are apps which can run on mobile native or on the web inside a web browser.
Intergalactic app is a mobile / web / desktop app - an app which can run in a web browser, on the desktop across all major desktop platforms and on mobile native on iOS and Android. An intergalactic app shares all non presentation code between all platforms and ideally only has platform-specific presentation code for few platform-optimized features. e.g. use Face ID for user authentication when running on iPhone X. But the core idea that 90%+ of presentation code - the UI and layout is shared between all supported runtime platform.

This project aims to be a well designed and maintained seed for an intergalactic (native mobile, web, desktop) app based on react native web, redux and typescript.

Spacemesh is building a galactic wallet. Team Spacemesh decided to support Intergalactic with funded github issues and contribute the seed to the community under the permissive MIT license. Spacemesh will use Intergalactic as the base for its universal wallet app.

# What is this good for?
Tl`dr - the world should have a well-maintained seed for intergalactic apps.

There are several similar seeds out there, but none with the project scope and goals we have in mind.

Have a well designed and maintained seed for intergalactic apps is useful for many kinds of applications across many verticals and can drastically reduce boilerplate code and encourages reuse of software components across different kind of packaging and execution environments.

## Project Goals
We aim to provide a generic starter seed for building a modern, universal app with the following properties:
- 100% sharing of app components (business logic) between all platforms
- 100% sharing of platform services and assets management between all platform
- Native iOS and Android look-and-feel
- Reuse of all UI components and layout across all platforms
- Use one main programming language for all platforms - Typescript to the rescue
- Use only open source libraries and frameworks

We hope that using the seed developers will be able to be more productive in building intergalactic apps as they can focus on their app logic and work using established patterns instead of having to write lots of boilerplate infrastructure code to support each runtime execution environment.

## Architectural Directions

tl'dr - Yes, we are opinionated, very opinionated. We'd like to establish baselines patterns and libraries for intergalactic apps. The following diagram outlines the concept:

![](https://raw.githubusercontent.com/spacemeshos/intergalactic/master/arch_figure.png)

- `React Native Web` for all UI widgets and layout

- `Redux` for all app state management and data flow between app components and ui components

- `React Router` for app navigation

- `App Components` is where all shared application logic should be implemented. App components method are called based on app events (such as screen load or request for display data) via redux. App components are shared between all runtime environment and are basically `Javascript modules`

- `Platform Services` are cross-platform components to deal with local resources such as secure storage, local db and local file system. They are implemented to support all runtime environment. e.g. desktop, native, web... They are used by `App Components` to implement app functionality.

- `Assets Manager` - responsible for providing assets to app components and to UI components in a cross-platform manner and to abstract away differences between locally bundled vs cloud hosted assets. It is implemented using `local asset bundles` and `Static Assets Services`.

- `packaging` - an Intergalactic app is packaged to the 4 currently supported platforms - Web, Desktop, iOS and Android. Packaging is implemented via tools and compile-time scripts. Desktop is supported via `Electron` packaging. Both Desktop and Web packaging include a `Node.js` app to serve the App screens. iOS and Android packaging is implemented using `React Native` packaging tools. Mobile native packaging supports `Assets Bundles` - bundling of static assets in the mobile native app packaged binary.

- The cloud provides data and cloud services via `https-json` services implementing various APIs and `static app assets` via `Static Assets Services`. The implementation details of these kind of services are irrelevant as far as an intergalactic app is concerned as long as they provide the app with a functional documented API over a cloud endpoint. Note that the seed doesn't include cloud services. They are discussed here to explain how intergalactic apps are implemented

- `Typescript` is the sorcery which allows developers to build and to test intergalactic apps with knowledge of only one programming language. It provides some type safety and a modern syntax for Javascript - the language actually used at the runtime of intergalactic apps. It is a good choice because it is the recommended language or it is at least well supported by all underling libraries and frameworks used to build intergalactic apps such as `react-native`, `react-native-web`

- TODO: add notes about tools, testings and config.
