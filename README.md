# App-Version-1
SideKick App Version 1

A basic react native app that retrieves academic task data from the Canvas API.

Ultimately would like to make this work with oauth2 so any user can log in and view tasks sorted by due date, size and ability to 
impact final grade. Still need to finish deep linking and share URI scheme with Canvas administrator at CU Boulder to complete the oauth2
workflow. For now this uses a maually generated token that can be downloaded from Canvas -> Account -> Settings. Copy and paste token into 
the header file as 'Authentication' (in HomeScreen.js). There is currently a long randomly generated token string there but it has been
disabled as of 12:00 on May 2nd (its scoped to my Canvas account).

How to Run

1. Download repository and unzip into a project directory.

2. Navigate to project directory and install expo using:

  `npm install -g expo-cli`
  
  More Info can be found Here: https://docs.expo.io/versions/v31.0.0/workflow/up-and-running/
  
3. Install an expo client to run the app on. This could either be the expo client mobile app available on app stores or an emulator (I used a Pixel 2 emulator in Android Studio)

4. Command `npm start` to start a local server on your machine that serves the expo client the app.

5. If using an emulator, simply click "Run on Emulator" in the webpage that opens for the server. If using a phone, take a photo of the QR code on the webpage. Both options will require sign-in on the expo client as well as when you initially set up expo in your project directory (will prompt from command line)

