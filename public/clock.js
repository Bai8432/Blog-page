$(function(){
  console.log("Jquery Working");
  clock();
});
function clock() {
      const today = new Date();

      // get time components
      const hours = today.getHours();
      const minutes = today.getMinutes();
      const seconds = today.getSeconds();

      //add '0' to hour, minute & second when they are less 10
      const hour = hours < 10 ? "0" + hours : hours;
      const minute = minutes < 10 ? "0" + minutes : minutes;
      const second = seconds < 10 ? "0" + seconds : seconds;

      //make clock a 12-hour time clock
      const hourTime = hour > 12 ? hour - 12 : hour;

      // if (hour === 0) {
      //   hour = 12;
      // }
      //assigning 'am' or 'pm' to indicate time of the day
      const ampm = hour < 12 ? "AM" : "PM";

      // get date components
      const month = today.getMonth();
      const year = today.getFullYear();
      const day = today.getDate();
      
      //declaring greet message
      var greet="Good Morning"
      if(hour>11 && hour<16)
      greet="Good Afternoon"
      else 
      greet="Good Evening"
      greet+=", Baibhav!"
      //declaring a list of all months in  a year
      const monthList = [
      "January",
      "February",
      "March",
      "April",
      "May",
      "June",
      "July",
      "August",
      "September",
      "October",
      "November",
      "December"
      ];

      //get current date and time
      const date = monthList[month] + " " + day + ", " + year;
      const time = hourTime + ":" + minute +" "+ ampm;

      //combine current date and time
      const dateTime = date + " - " + time;

      //print current date and time to the DOM
      $("#date-time").text(dateTime);
      $('#greet').text(greet);
      setTimeout(clock, 1000);
  }