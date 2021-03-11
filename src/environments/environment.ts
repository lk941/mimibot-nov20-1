// This file can be replaced during build by using the `fileReplacements` array.
// `ng build ---prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

//need to uncomment
export const environment = {
   production: false,
   firebase:{
     apiKey: "AIzaSyBNRxMWiQmBEyYPS61uqa-CGpRQgFSte20",
     authDomain: "mimibot-6c7f4.firebaseapp.com",
     databaseURL: "https://mimibot-6c7f4.firebaseio.com",
     projectId: "mimibot-6c7f4",
     storageBucket: "mimibot-6c7f4.appspot.com",
     messagingSenderId: "466769786844"
   }
};

/*export const environment = {
  production: false,
  firebase: {
    apiKey: "AIzaSyAAXObS_BW0uQF5RCtTjPbNrBCgvGGMbqA",
    authDomain: "fyp-clarenze-testbot-aqiiah.firebaseapp.com",
    databaseURL: "https://fyp-clarenze-testbot-aqiiah.firebaseio.com",
    projectId: "fyp-clarenze-testbot-aqiiah",
    storageBucket: "fyp-clarenze-testbot-aqiiah.appspot.com",
    messagingSenderId: "509533618518",
    appId: "1:509533618518:web:c96e26a71f190b945096f7"
  }
}; */

/*
 * In development mode, to ignore zone related error stack frames such as
 * `zone.run`, `zoneDelegate.invokeTask` for easier debugging, you can
 * import the following file, but please comment it out in production mode
 * because it will have performance impact when throw error
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.
