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

2. 
