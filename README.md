# tasktrack 
This readme file serves as a quickstart for the developers of the application. 

## Project Overview

tasktrack is a mobile application designed to help users organize their daily lives and improve their effectiveness in completing what needs to be done. What sets tasktrack apart from similar apps is its core feature of needing to take a photo to complete a task. 

### Key Features

The key features of this application is the ability to add and complete tasks while giving the user something to look back at with the completed tasks gallery. Currently, the application focuses only on the core functionality while simultaneously trying to provide a good user experience. 

### Technologies

* React Native + Expo
* Typescript

React Native was chosen as it can build cross-platform applications from a single codebase. React Native, in combination with Expo, allows for a much better developer experience. Expo allows developers to see changes to the code quickly via the Expo Go application, greatly increasing developer productivity. 

Typescript was added to try to minimize the amount of bugs occurring during development. This allows for developing with more confidence, as Typescript acts as a safeguard in many scenarios. 



## Local Development

To be able to view/work on the project locally, you'll need to set up a few things first.

### Prerequisites

* [Git](https://git-scm.com/)
* [Node.js](https://nodejs.org)
* [Yarn](https://classic.yarnpkg.com/lang/en/docs/install/#mac-stable)
* [Xcode 15 ](https://developer.apple.com/xcode/) or [Android Studio](https://developer.android.com/studio)

### Recommended Visual Studio Code Plugins *( for developers )* 
* [Expo Tools](https://marketplace.visualstudio.com/items?itemName=expo.vscode-expo-tools)
* [React Native Tools](https://marketplace.visualstudio.com/items?itemName=msjsdiag.vscode-react-native)

 ### Clone the Project

The project can be run from any directory you want, so where you clone it is up to you.

```sh
cd ~/<your project dir>

git clone git@github.com:tijohans/tasktrack.git
```

After it has been cloned, install all dependencies using yarn.

```sh
cd tasktrack

yarn install
```

### Running the Application

**This part assumes you have already installed the simulator you want to use**

The app is configured with Expo. Expo makes it easy to simulate the application in both Android and iOS. To start the application, run the command beneath, and then press  ￼`A`￼ or ￼`I`￼ , depending on whether you want to run the Android or iOS simulation.

```sh
yarn start
```

It is also possible to directly open the simulator by running either:
```sh
yarn ios
# or
yarn android
```

## The File Structure
The React Native application follows a structured organization to maintain code clarity and separation of concerns. Here's a brief overview of the essential directories in which we will work:

**📁 src**
This directory contains most of the application's source code.
* components: Reusable UI components that are used throughout the app.
* utils: Helper functions, utility classes, or modules used across the app.

**📁 app**
The “app” directory contains the navigation of the application. We use file-based routing, simplifying navigation by associating each screen with a specific JavaScript file, making locating and managing screens directly through their respective files easy.

**📁 assets**
Static assets like images, fonts, and other resources are stored here. They can be accessed and used throughout the app.

**📁 android** and **📁 ios**
Platform-specific code and configurations for Android and iOS respectively. You might not need to modify these often, but they are essential for configuring platform-specific settings.


