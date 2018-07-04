# Overview and Motivation
Universal apps are apps which can run on mobile native or on the web inside a web browser. 
Intergalactic appp is a mobile / web / desktop app - an app which can run in a web browser, on the desktop across all major dekstop platforms and on mobile native on iOS and Android. An intergalactic app shares all non presentation code between all platforms and ideally only has platform-specfic presentation code for few platform-optimized features. e.g. use Face ID for user authentication when running on iPhone X. But the core idea that 90%+ of presentation code - the UI and layout is shared between all supported runtime platform.

This project aims to be a well designed and maintained seed for an intergalactic (native mobile, web, desktop) app based on react native web, redux and typescript.

Spacemesh is building a galactic wallet. Team Spacemesh decided to support Intergalactic with funded github issues and contribute the seed to the community under the permissive MIT license. Spacemesh will use Intergalactic as the base for its universal wallet app.

# What is this good for?
There are several similar seeds out there, but non with the project scope and goals we have in mind.
Have a well designed and maintained seed for intergalactic apps is useful for many kinds of applications across many verticals and can drastically reduce boilerplate code and encourages reuse of software components across different kind of packaging and execution environments.

## Project Goals
We aim to provide a generic starter seed for building a modern, universal app with the following properties:
- 100% sharing of app components (business logic) between all platforms
- 100% sharing of platform services and assets management between all platform
- Native iOS and Android look-and-feel
- Reuse of all UI components and layout across all platforms
- Use one main programming language for all platforms - Typescript to the rescue

## Architectural Directions

tl'dr - Yes, we are opinionated, very opinionated.

![](https://raw.githubusercontent.com/spacemeshos/intergalactic/master/arch_figure.png)
