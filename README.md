# Module 7: Week_Scheduler
Weekly Scheduler that allows to save custom tasks and colour codes according to current time. 


# Description
I'm still struggling with saving values to the local repo and retrieving it. The way I built the app was largly based on HTML and I didn't dynamically create HTML elements as we learned in class during last week. I also couldn't make the floppy disc to display so used text instead. I feel like this would have been easier if I had dynamically created the DIV.

## CSS
This exercise didn't require CSS modification.

## HTML
Manually added new DIV elements to create the scheduler layout in HTML.

## JavaScript
Used MomentJS to access current time stamp. Built function to colour code text entry fields accordingly to past, present, and future. Used JQuery and JavaScript to access local storage to retrieve and save text entry after save button is pressed by user.

## Installation
N/A

## Usage
https://lisamlorenz.github.io/Week_Scheduler

### Task: This is what the app should do:


* Display the current day at the top of the calender when a user opens the planner.
 
* Present timeblocks for standard business hours when the user scrolls down.
 
* Color-code each timeblock based on past, present, and future when the timeblock is viewed.
 
* Allow a user to enter an event when they click a timeblock

* Save the event in local storage when the save button is clicked in that timeblock.

* Persist events between refreshes of a page


### Screenshot
[Click here to see the deployed screenshot](./assets/images/workday_scheduler_screengrab.png)
<img width="1092" alt="Screenshot of published app showing hourly slots" src="https://user-images.githubusercontent.com/116456417/213942201-c0ad4966-7a57-4cf2-9f00-8f5f0b6303f9.png">




## Credits
My friend Steffen Henschel https://github.com/blynx helped a lot with tidying the function to colour code.

## License
MIT License

