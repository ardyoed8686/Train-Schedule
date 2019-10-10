/* global moment firebase */

// Initialize Firebase
// Make sure to match the configuration to the script version number in the HTML
// (Ex. 3.0 != 3.7.0)
var firebaseConfig = {
    apiKey: "AIzaSyAb68qaJaazY06LgNfGwgu6eMmLpauARZg",
    authDomain: "employee-spreadsheet-2c83c.firebaseapp.com",
    databaseURL: "https://employee-spreadsheet-2c83c.firebaseio.com",
    projectId: "employee-spreadsheet-2c83c",
    storageBucket: "",
    messagingSenderId: "926542516001",
    appId: "1:926542516001:web:3a513301adbff81607b860"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);
  
  
  // Create a variable to reference the database.
  var database = firebase.database();