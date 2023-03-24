let userInput = document.getElementsByClassName('description');
let dailyTasks = []; // empty array 
let saveButton = document.getElementById("saveBtn");

// Define the click event listener for the save button
$(".saveBtn").on("click", function () {
    // Get the input value
    var inputValue = $(this).prev(".description").val();
    // Get the hour ID
    var hour = $(this).prev(".description").attr("id");

// Check if the input value is empty
if (inputValue === "") {
    console.log("Input value is empty.");
    return; // Stop the function execution
}

    // Save the input value to local storage
localStorage.setItem(hour, inputValue);

// Change the button text and color

if ($(this).text() === "Delete") {
    $(this).text("Save");
    $(this).css("background-color", "#06aed5")
} else {
    $(this).text("Delete");
    $(this).css("background-color", "red")
}


const saveButton = $(this);

var savedButtonValue = localStorage.getItem(hour + "-button");
if (savedButtonValue !== null) {
    saveButton.text(savedButtonValue);
}

// Check if the button text content is "Delete" and change the background color accordingly
if (saveButton.textContent === "Delete") {
    $(saveButton).css("background-color", "red");
} else {
    saveButton.textContent = "Save";
    
}

saveButton.textContent = "Delete";

console.log("Save button clicked.");

    // unbind the original click event
    $(this).unbind("click");

    // bind a new click event with a different function
    $(this).click(function () {
        // perform the new function here
        console.log("Button functionality changed!");

    });
});

// Retrieve the saved values from local storage
$(".description").each(function () {
    var hour = $(this).attr("id");
    var savedValue = localStorage.getItem(hour);
    if (savedValue !== null) {
        $(this).val(savedValue);
        $(this).next("#saveBtn").text("Delete");
        $(this).next('#saveBtn').css("background-color", "red");
        localStorage.setItem(hour + "-button", "Delete");
    }
});

