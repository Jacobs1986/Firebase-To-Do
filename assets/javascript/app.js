// Your web app's Firebase configuration
var firebaseConfig = {
    apiKey: "AIzaSyCjxJr3u2T68TMUKk99v4Rr7wZbeiug0tA",
    authDomain: "to-do-list-25176.firebaseapp.com",
    databaseURL: "https://to-do-list-25176.firebaseio.com",
    projectId: "to-do-list-25176",
    storageBucket: "to-do-list-25176.appspot.com",
    messagingSenderId: "1013406437671",
    appId: "1:1013406437671:web:ed8ad1630f05a349129902"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

// Global variables
var database = firebase.database();
var listNumber = 1;

// function for submit button
$("#submitTask").on("click", function(event) {
    // prevent the page from reloading
    event.preventDefault();
    console.log("clicked");
    // get the information from the task id
    var taskName = $("#task").val().trim();
    console.log(taskName);
    // create paragraph and add the text of taskname to it, add class of Item-listNumber, added an id of Item-listNumber
    var paragraph = $("<p>").addClass("list").attr("id", `Item-${listNumber}`).text(taskName);
    console.log(paragraph);
    // clear task and focus on it
    $("#task").val("").focus();
})