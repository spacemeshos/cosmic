
## Instructions

  

This is a uinversal boilerplate for shipping multiple platform apps from one codebase.

  

### Installation

1. Follow the instructions here for building and testing for android on your dev platform: https://facebook.github.io/react-native/docs/getting-started.html

2. Make sure you have JAVA_HOME env var set to the Java 8 JDK as well as your ANDROID_HOME 
```
e.g: export JAVA_HOME=<path-to-your-jdk>/<jdk>/Contents/Home
```
```
export ANDROID_HOME=<path-to-your-android-sdk>
export PATH=${PATH}:${ANDROID_HOME}/tools
export PATH=${PATH}:${ANDROID_HOME}/platform-tools
```
4. Run the emulator with an Android 6 (+google play) device.
5. Update `build-scripts/local.properties` with the right path to your android sdk.
```
git clone https://github.com/spacemeshos/cosmic.git
```

### Install dependencies
```yarn install```

### Development builds
- For web
``` yarn web ```
- For android
```yarn android```
- For ios
```yarn ios```
- For electron
```yarn electron-dev```

### Platform builds (Production builds)
- For Android and iOS
```yarn mobile```
- For Web
```yarn build```
- For desktop
```yarn dist```

### Known issues
1. The name react-native was looked up in the Haste module map.
Fix: remove the haste-map-... files from your temp file and rebuild:		
	
	``` rm -rf /tmp/haste-map-*```
	
	or
	
	```
	yarn cache clean
	watchman watch-del-all
	rm -rf $TMPDIR/metro-bundler-cache-*
	rm -rf $TMPDIR/metro-cache-*
	rm -rf $TMPDIR/react-native-packager-cache-*
	rm -rf $TMPDIR/haste-map-metro-*
	```
