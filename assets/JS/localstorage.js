let userInput = document.getElementsByClassName('description');
let dailyTasks = []; // empty array 

$("saveBtn").click(function () { //Function to store input with save button

    const addTaskToLocalStorage = (ev) => {
        ev.preventDefault();
    }


    localStorage.setItem("task", userInput.val());
    dailyTasks.push(userInput);

    var taskInPut = document.querySelector('description');
    taskInPut.textContent = "\n" + JSON.stringify(dailyTasks, '\t', 2);
}
);

$('saveBtn').click(function ()) {
    dailyTasks.push(dailyTasks);
    localStorage.setItem('tasks', JSON.stringify(dailyTasks))
}

addTaskToLocalStorage();