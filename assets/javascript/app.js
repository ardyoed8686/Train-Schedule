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

  // 2. Button for adding a train
$("#submit-button").on("click", function(event) {
    event.preventDefault();
  
    // Grabs user input
    var tName = $("#train-name").val().trim();
    var tDestination = $("#destination").val().trim();
    var tFirst = moment($("#first-train").val().trim(), "HH:mm").format("X");
    var tFrequency = moment($("#frequency").val().trim(), "HH:mm").format("X");


    // creates location to hold form data
    var newTrain = {
        name: tName,
        destination: tDestination,
        first: tFirst,
        frequency: tFrequency
      };

    // Uploadstrain data to the database
    database.ref().push(newTrain);

    // Log to console
    console.log(newTrain.name);
    console.log(newTrain.destination);
    console.log(newTrain.first);
    console.log(newTrain.frequency);




    });

