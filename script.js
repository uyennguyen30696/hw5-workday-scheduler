// Get all variable from html
var am9El = document.getElementById("9am");
var am10El = document.getElementById("10am");
var am11El = document.getElementById("11am");
var pm12El = document.getElementById("12pm");
var pm13El = document.getElementById("13pm");
var pm14El = document.getElementById("14pm");
var pm15El = document.getElementById("15pm");
var pm16El = document.getElementById("16pm");
var pm17El = document.getElementById("17pm");

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

// Get current time

var currentTime = luxon.DateTime.local().toFormat("HH mm")
console.log(currentTime)

// If none 24 hour clock format, use this
// .toLocaleString(
//     {
//         hour: 'numeric',
//         minute: '2-digit'
//     });

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
$("#13 textarea").val(localStorage.getItem("13"));
$("#14 textarea").val(localStorage.getItem("14"));
$("#15 textarea").val(localStorage.getItem("15"));
$("#16 textarea").val(localStorage.getItem("16"));
$("#17 textarea").val(localStorage.getItem("17"));

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
    $("#11am").val(localStorage.removeItem("11"));
    $("#11am").text("");
});
$("#clear-12").on("click", function (event) {
    event.preventDefault();
    $("#12pm").val(localStorage.removeItem("12"));
    $("#12pm").text("");
});
$("#clear-13").on("click", function (event) {
    event.preventDefault();
    $("#13pm").val(localStorage.removeItem("13"));
    $("#13pm").text("");
});
$("#clear-14").on("click", function (event) {
    event.preventDefault();
    $("#14pm").val(localStorage.removeItem("14"));
    $("#14pm").val("");
});
$("#clear-15").on("click", function (event) {
    event.preventDefault();
    $("#15pm").val(localStorage.removeItem("15"));
    $("#15pm").text("");
});
$("#clear-16").on("click", function (event) {
    event.preventDefault();
    $("#16pm").val(localStorage.removeItem("16"));
    $("#16pm").text("");
});
$("#clear-17").on("click", function (event) {
    event.preventDefault();
    $("#17pm").val(localStorage.removeItem("17"));
    $("#17pm").text("");
});

console.log(parseInt(currentTime))
// Change color to distinguish past, present, and future time for each time slot
// 9am
if (parseInt(currentTime) > 9) {
    am9El.setAttribute("class", "past");
}
else if (parseInt(currentTime) < 9) {
    am9El.setAttribute("class", "future");
}
else if (parseInt(currentTime) === 9) {
    am9El.setAttribute("class", "present");
}

// 10am
if (parseInt(currentTime) > 10) {
    am10El.setAttribute("class", "past");
}
else if (parseInt(currentTime) < 10) {
    am10El.setAttribute("class", "future");
}
else if (parseInt(currentTime) === 10) {
    am10El.setAttribute("class", "present");
}

// 11am
if (parseInt(currentTime) > 11) {
    am11El.setAttribute("class", "past");
}
else if (parseInt(currentTime) < 11) {
    am11El.setAttribute("class", "future");
}
else if (parseInt(currentTime) === 11) {
    am11El.setAttribute("class", "present");
}

// 12pm
if (parseInt(currentTime) > 12) {
    pm12El.setAttribute("class", "past");
}
else if (parseInt(currentTime) < 12) {
    pm12El.setAttribute("class", "future");
}
else if (parseInt(currentTime) === 12) {
    pm12El.setAttribute("class", "present");
}

// 13pm
if (parseInt(currentTime) > 13) {
    pm13El.setAttribute("class", "past");
}
else if (parseInt(currentTime) < 13) {
    pm13El.setAttribute("class", "future");
}
else if (parseInt(currentTime) === 13) {
    pm13El.setAttribute("class", "present");
}

// 14pm
if (parseInt(currentTime) > 14) {
    pm14El.setAttribute("class", "past");
}
else if (parseInt(currentTime) < 14) {
    pm14El.setAttribute("class", "future");
}
else if (parseInt(currentTime) === 14) {
    pm14El.setAttribute("class", "present");
}

// 15pm
if (parseInt(currentTime) > 15) {
    pm15El.setAttribute("class", "past");
}
else if (parseInt(currentTime) < 15) {
    pm15El.setAttribute("class", "future");
}
else if (parseInt(currentTime) === 15) {
    pm15El.setAttribute("class", "present");
}

// 16pm
if (parseInt(currentTime) > 16) {
    pm16El.setAttribute("class", "past");
}
else if (parseInt(currentTime) < 16) {
    pm16El.setAttribute("class", "future");
}
else if (parseInt(currentTime) === 16) {
    pm16El.setAttribute("class", "present");
}

// 17pm
if (parseInt(currentTime) > 17) {
    pm17El.setAttribute("class", "past");
}
else if (parseInt(currentTime) < 17) {
    pm17El.setAttribute("class", "future");
}
else if (parseInt(currentTime) === 17) {
    pm17El.setAttribute("class", "present");
}
