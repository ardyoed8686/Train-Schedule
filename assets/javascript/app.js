// Initialize Firebase
// Make sure to match the configuration to the script version number in the HTML
// (Ex. 3.0 != 3.7.0)


var firebaseConfig = {
    apiKey: "AIzaSyCWzt1G-BgKjEAjYPH5Om7vVrls9R-iQ4g",
    authDomain: "train-times-589ee.firebaseapp.com",
    databaseURL: "https://train-times-589ee.firebaseio.com",
    projectId: "train-times-589ee",
    storageBucket: "train-times-589ee.appspot.com",
    messagingSenderId: "295453346198",
    appId: "1:295453346198:web:0062abad3bc0a2b61ff5b7"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);
  
  
  // Create a variable to reference the database.
  var database = firebase.database();
