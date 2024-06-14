function displayTime() {
  // Get the current date and time in UTC
  let now = new Date();

  // Create a formatter for the CAT time zone (UTC+2)
  let options = { timeZone: 'Africa/Maputo', year:'2-digit', month: '2-digit', day: '2-digit', hour12: false, hour: '2-digit', minute: '2-digit', second: '2-digit'};
  let formatter = new Intl.DateTimeFormat('en-GB', options);
  //console.log(event.toLocaleTimeString('en-US'));
// Expected output: "1:15:30 AM"

//console.log(event.toLocaleTimeString('it-IT'));
// Expected output: "01:15:30"

//console.log(event.toLocaleTimeString('ar-EG'));
// Expected output: "١٢:١٥:٣٠ ص"


  // Format the current date and time in CAT
  let catTime = formatter.format(now);

  // Display the formatted time in the div with id "currentTime"
  document.getElementById("currentTime").textContent = catTime;
}

// Add event listener to the button
document.getElementById("displayTimeButton").addEventListener("click", displayTime);

function displayTime1() {
  // Get the current date and time in UTC
  let now1 = new Date();

  // Create a formatter for the CAT time zone (UTC+2)
  let options1 = { 
    timeZone: 'Africa/Maputo', 
    year: '2-digit', 
    month: '2-digit', 
    day: '2-digit', 
    hour12: false, 
    hour: '2-digit', 
    minute: '2-digit', 
    second: '2-digit' 
  };
  
  let formatter1 = new Intl.DateTimeFormat('ar-EG', options1);

  // Format the current date and time in CAT
  let catTime1 = formatter1.format(now1);

  // Display the formatted time in the div with id "currentTimeInIT"
  document.getElementById("currentTimeInIT").textContent = catTime1;
}

// Add event listener to the button
document.getElementById("displayTimeButton1").addEventListener("click", displayTime1);
