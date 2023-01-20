// Added current day stamp with Moment, made current Day bold

var currentDay = moment();
$("#currentDay").text(currentDay.format('dddd, MMMM Do')).css('font-weight', 'bold');


