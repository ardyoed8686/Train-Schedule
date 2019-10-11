// Initialize Firebase
// Make sure to match the configuration to the script version number in the HTML
// (Ex. 3.0 != 3.7.0)
console.log("I am the GREATEST");
  // Your web app's Firebase configuration
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
        frequency: tFrequency,
      };

    // Uploadstrain data to the database
    database.ref().push(newTrain);

    // Log to console
    console.log(newTrain.name);
    console.log(newTrain.destination);
    console.log(newTrain.first);
    console.log(newTrain.frequency);

    alert("Train successfully added");

    // Clears all of the input-boxes
    $("#train-name").val("");
    $("#destination").val("");
    $("#first-train").val("");
    $("#frequency").val("");

    });

    database.ref().on("child_added", function(childSnapshot) {
        console.log(childSnapshot.val());

      // Store everything into a variable.
    var tName = childSnapshot.val().name;
    var tDestination = childSnapshot.val().destination;
    var tFirst = childSnapshot.val().first;
    var tFrequency = childSnapshot.val().frequency;

    // Employee Info
    console.log(tName);
    console.log(tDestination);
    console.log(tFirst);
    console.log(tFrequency);

  // reformat the train start time
  var tFirstFormat = moment.unix(tFirst).format("HH:mm");

  // Calculate the minutes using math to calculate the minutes away

  var tMinutes = moment().diff(moment(tFirst, "X"), "minutes");
  console.log(tMinutess);

  var tMinutesAway = tMinutes - tFirstFormat;
  console.log(tMinutesAway);

    // calculate next train arrival time

          // First Time (pushed back 1 year to make sure it comes before current time)
          var tFirstFormat = moment(tFirst, "HH:mm").subtract(1, "years");
          console.log(tFirstFormat);
      
          // Current Time
          var currentTime = moment();
          console.log("CURRENT TIME: " + moment(currentTime).format("hh:mm"));
      
          // Difference between the times
          var diffTime = moment().diff(moment(tFirstFormat), "minutes");
          console.log("DIFFERENCE IN TIME: " + diffTime);
      
          // Time apart (remainder)
          var tRemainder = diffTime % tFrequency;
          console.log(tRemainder);
      
          // Minute Until Train
          var tMinutesTillTrain = tFrequency - tRemainder;
          console.log("MINUTES TILL TRAIN: " + tMinutesTillTrain);
      
          // Next Train
          var tNextArrival = moment().add(tMinutesTillTrain, "minutes");
          console.log("ARRIVAL TIME: " + moment(tNextArrival).format("hh:mm"));


   // Create the new row
   var newRow = $("<tr>").append(
    $("<td>").text(tName),
    $("<td>").text(tDestination),
    $("<td>").text(tFrequency),
    $("<td>").text(tNextArrival),
    $("<td>").text(tMinutesAway),
    
  );

   // Append the new row to the table
   $("#time-table > tbody").append(newRow);

    });
    
