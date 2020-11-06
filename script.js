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
    localStorage.setItem("Time: " + time, userInput);

    if(!localStorage.getItem(time, userInput)){
        $("textarea").val(window.localStorage.setItem(time, userInput));
    }
});

// function load() {
//     if(!localStorage.getItem(userInput)){
//         $("textarea").val(window.localStorage.setItem(userInput));
//     }
// }
// load()

// Get current hour
var currentHour = luxon.DateTime.local().toLocaleString(
    {
        hour: 'numeric',
        minute: '2-digit'
    });