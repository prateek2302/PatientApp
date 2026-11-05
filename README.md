# PatientApp - React Native CLI

PatientApp is a React Native mobile application for patients to manage their healthcare information and activities from one place. It provides authentication, a dashboard, appointments, medical records, vital tracking, and profile management.

## Features

- **Authentication** — Sign in and manage access to the application.
- **Dashboard** — View a central summary of patient activity and health information.
- **Appointments** — Review and manage upcoming healthcare appointments.
- **Medical Records** — Access organized medical history and documents.
- **Vitals** — View and track health measurements.
- **Profile** — Review and update patient account information.

## Technology

- React Native CLI
- TypeScript
- npm
- CocoaPods for iOS dependencies
- Android and iOS support

## Requirements

Install the following before setup:

- Node.js and npm
- React Native development dependencies
- Xcode and CocoaPods for iOS development
- Android Studio, Android SDK, and an emulator or physical device for Android development

For platform-specific React Native setup instructions, see the official React Native environment setup documentation.

## Quick Start

Create the project from the React Native TypeScript template:

```bash
npx @react-native-community/cli@latest init PatientApp --template react-native-template-typescript
```

Replace the generated files with this project's contents, then install dependencies:

```bash
npm install
```

Install iOS dependencies:

```bash
# iOS
cd ios && pod install && cd ..
```

## Running the App

Start the application on iOS:

```bash
npm run ios
```

Start the application on Android:

```bash
npm run android
```

## Project Usage

1. Launch the app on an iOS simulator, Android emulator, or connected device.
2. Authenticate through the sign-in flow.
3. Use the dashboard to navigate to appointments, records, vitals, and profile information.

## Platform Notes

- Run `pod install` whenever iOS native dependencies change.
- Ensure an Android emulator or physical device is available before running the Android command.
- Keep patient data secure and use appropriate authentication and access controls for production deployments.

## Scope

PatientApp is a client application for displaying and managing patient-facing healthcare information. Backend services, API endpoints, production credentials, and deployment configuration should be supplied separately for the target environment.
