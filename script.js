// Current date time
var now = luxon.DateTime.local().toLocaleString(
    {
        month: 'long',
        day: 'numeric',
        year: 'numeric',
        hour: 'numeric',
        minute: '2-digit'
    });

// Display current date time in the header
$("#currentDay").text(now);


// Save button to save user input in local storage
$(".save-button").on("click", function (event) {
    event.preventDefault();

    let userInput = $(this).siblings("textarea").val();
    let time = $(this).parent().attr("id");

    // Store user input in local storage
    localStorage.setItem(time, userInput);
});

// Load data from local storage and display in each time slot
$("#9 textarea").val(localStorage.getItem("9"));
$("#10 textarea").val(localStorage.getItem("10"));
$("#11 textarea").val(localStorage.getItem("11"));
$("#12 textarea").val(localStorage.getItem("12"));
$("#1 textarea").val(localStorage.getItem("1"));
$("#2 textarea").val(localStorage.getItem("2"));
$("#3 textarea").val(localStorage.getItem("3"));
$("#4 textarea").val(localStorage.getItem("4"));
$("#5 textarea").val(localStorage.getItem("5"));

// Clear data and display in each time slot
$("#clear-9").on("click", function (event) {
    event.preventDefault();
    $("#9am").val(localStorage.removeItem("9"));
    $("#9am").text("");
});
$("#clear-10").on("click", function (event) {
    event.preventDefault();
    $("#10am").val(localStorage.removeItem("10"));
    $("#10am").text("");
});
$("#clear-11").on("click", function (event) {
    event.preventDefault();
    $("#11 textarea").val(localStorage.removeItem("11"));
    $("#11 textarea").text("");
});
$("#clear-12").on("click", function (event) {
    event.preventDefault();
    $("#12 textarea").val(localStorage.removeItem("12"));
    $("#12 textarea").text("");
});
$("#clear-1").on("click", function (event) {
    event.preventDefault();
    $("#1 textarea").val(localStorage.removeItem("1"));
    $("#1 textarea").text("");
});
$("#clear-2").on("click", function (event) {
    event.preventDefault();
    $("#2 textarea").val(localStorage.removeItem("2"));
    $("#2 textarea").val("");
});
$("#clear-3").on("click", function (event) {
    event.preventDefault();
    $("#3 textarea").val(localStorage.removeItem("3"));
    $("#3 textarea").text("");
});
$("#clear-4").on("click", function (event) {
    event.preventDefault();
    $("#4 textarea").val(localStorage.removeItem("4"));
    $("#4 textarea").text("");
});
$("#clear-5").on("click", function (event) {
    event.preventDefault();
    $("#5 textarea").val(localStorage.removeItem("5"));
    $("#5 textarea").text("");
});

// Get current time
var currentTime = luxon.DateTime.local().toLocaleString(
    {
        hour: 'numeric',
        minute: '2-digit'
    });
console.log(currentTime)

let timeslotEl = document.getElementsByTagName("#id")
let timeslot = parseInt(timeslotEl);
console.log(timeslot)

// Change color to distinguish past, present, and future time
/* if (timeslot < currentTime) {
    backgournd
}
else if (timeslot > currentTime) {

}
else {

} */