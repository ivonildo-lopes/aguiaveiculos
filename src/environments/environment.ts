// This file can be replaced during build by using the `fileReplacements` array.
// `ng build ---prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

export const environment = {
  production: false,
  api: 'http://localhost:8080' ,
  base: 'http://localhost:8080',

  firebase: {
    apiKey: "AIzaSyC_rUN-J7Mf1w76_oU_aJVpE5x-E3t1PYU",
    authDomain: "teste-8951e.firebaseapp.com",
    databaseURL: "https://teste-8951e.firebaseio.com",
    projectId: "teste-8951e",
    storageBucket: "teste-8951e.appspot.com",
    messagingSenderId: "875279681287"
  }

};


/*
 * In development mode, to ignore zone related error stack frames such as
 * `zone.run`, `zoneDelegate.invokeTask` for easier debugging, you can
 * import the following file, but please comment it out in production mode
 * because it will have performance impact when throw error
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.
