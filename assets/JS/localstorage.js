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
    if ($(this).text() === "Complete") {
        $(this).text("Save");
        $(this).css("background-color", "#06aed5")
    } else {
        $(this).text("Done?");
        $(this).css("background-color", "violet")

    }

    const saveButton = $(this);

    var savedButtonValue = localStorage.getItem(hour + "-button");
    if (savedButtonValue !== null) {
        saveButton.text(savedButtonValue);
    }

    // Check if the button text content is "Done?" and change the background color accordingly
    if (saveButton.textContent === "Done?") {
        $(saveButton).css("background-color", "violet");
    } else {
        saveButton.textContent = "Save";
    }

    saveButton.textContent = "Done?";

    console.log("Save button clicked.");

    // unbind the original click event
    $(this).unbind("click");

    // bind a new click event with a different function
    $(this).click(function () {
        if ($(this).text() === "Done?") {
          $(this).text("Done!");
          $(this).css("background-color", "green");
        } else {
          $(this).text("Done?");
        }
      });
});

// Add event listener to the text field to listen for any change in its value
$(".description").on("input", function () {
    // Get the value of the text field
    var inputValue = $(this).val();
    // Get the corresponding button
    var saveButton = $(this).next(".saveBtn");

    // Check if the input value is empty
    if (inputValue === "") {
        saveButton.text("Save");
        saveButton.css("background-color", "#06aed5");
    } else {
        // Change the button text and color back to its original state
        if (saveButton.text() === "Done?") {
            saveButton.text("Save");
            saveButton.css("background-color", "#06aed5");
        }
    }
});

// Retrieve the saved values from local storage
$(".description").each(function () {
    var hour = $(this).attr("id");
    var savedValue = localStorage.getItem(hour);
    if (savedValue !== null) {
        $(this).val(savedValue);
        $(this).next("#saveBtn").text("Done?");
        $(this).next('#saveBtn').css("background-color", "violet");
        localStorage.setItem(hour + "-button", "Done?");
    }
});
