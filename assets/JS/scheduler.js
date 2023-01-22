// Added current day stamp with Moment, made current Day bold

var currentDay = moment();
$("#currentDay").text(currentDay.format('dddd, MMMM Do')).css('font-weight', 'bold');

var currentHour = moment().hours(); // getting the current Hour and putting it in a variable
console.log("It is: " + currentHour); // check if correct number is retrieved
var hoursOfDayEls = document.getElementsByClassName('description');
console.log(hoursOfDayEls);

// Function to change colour of text input field according to current time

for (var i = 0; i < hoursOfDayEls.length; i++) { // to treat HTML list elements and iterate through

    colorCoding(hoursOfDayEls[i], currentHour); // call function
}

function colorCoding(hoursOfDayEl, currentHour) { // if statement to get value from current hour and comparing it with time of each row

    console.log(currentHour);
    console.log(hoursOfDayEl.id);

    if (currentHour == hoursOfDayEl.id)  // if span value matches current time apply present class to description
        hoursOfDayEl.classList.add('present');
    // to make background red,

    else if (
        currentHour > hoursOfDayEl.id) { // if span value is smaller than current time apply past class
        hoursOfDayEl.classList.add('past');
    } // to make it grey

    else { // if span value is bigger than current time apply future class
        hoursOfDayEl.classList.add('future'); // to make it green
    }
};




//Function to store input with save button

// let taskInPut = document.getElementsByClass("description"); //targets the text input field

// let savingInput = function () {
//     var taskInPut = this.getTextInput("description");

//     for (let i = 0; i < taskInPut.length; i++) {
//         taskInPut[i].addEventListener("keyup", event => { //whenever the keyboard key goes up value is taken
//             localStorage.setItem("tasks", event.target.value) //and stored locally
//         })
//     };
// }

