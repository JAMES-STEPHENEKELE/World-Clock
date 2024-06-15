function displayTime() {
  // Get the current date and time in UTC
  let now = new Date();

  // Create a formatter for the CAT time zone (UTC+2)
  let options = { timeZone: 'America/Los_Angeles', 
                  year:'2-digit', 
                  month: '2-digit', 
                  day: '2-digit', 
                  hour12: true, 
                  hour: '2-digit', 
                  minute: '2-digit', 
                  second: '2-digit',
                  milliseconds: '2-digit'
                };
  let formatter = new Intl.DateTimeFormat('en-GB', options);
  

  // Format the current date and time in CAT
  let catTime = formatter.format(now);

  // Display the formatted time in the div with id "currentTime"
  document.getElementById("currentTimeInGB").textContent = catTime;
}
function clearTime() {
  document.getElementById("currentTimeInGB").textContent = "";
}
// Add event listener to the button
document.getElementById("displayTimeButton").addEventListener("click", displayTime);
document.getElementById("clearTimeButton").addEventListener("click", clearTime);


function displayTime1() {
  // Get the current date and time in UTC
  const now1 = new Date();

  // Create a formatter for the CAT time zone (UTC+2)
  const options1 = { 
    timeZone: 'Africa/Maputo', 
    year: '2-digit', 
    month: '2-digit', 
    day: '2-digit', 
    hour12: false, 
    hour: '2-digit', 
    minute: '2-digit', 
    second: '2-digit' 
  };

  let catTime1 = now1.toLocaleDateString('ar-EG', options1);

  
  //const formatter1 = new Intl.DateTimeFormat('ar-EG', options1);

  // Format the current date and time in CAT
  // const catTime1 = formatter1.format(now1);

  // Display the formatted time in the div with id "currentTimeInIT"
  document.getElementById("currentTimeInEG").textContent = catTime1;
}

function clearTime1() {
  // Clear the displayed time in the div with id "currentTimeInIT"
  document.getElementById("currentTimeInEG").textContent = '';
}

// Add event listeners to the buttons
document.getElementById("displayTimeButton1").addEventListener("click", displayTime1);
document.getElementById("clearTimeButton1").addEventListener("click", clearTime1);


function displayTimeAgain() {
  // Get the current date and time in UTC
  const nowAgain = new Date();

  // Create a formatter for the CAT time zone (UTC+2)
  const optionsAgain = { 
    timeZone: 'Europe/London', 
    year: '2-digit', 
    month: '2-digit', 
    day: '2-digit', 
    hour12: true, 
    hour: '2-digit', 
    minute: '2-digit', 
    second: '2-digit',
    milliseconds: '2-digit'
  };
  
  const formatterAgain = new Intl.DateTimeFormat('en-US', optionsAgain);

  // Format the current date and time in CAT
  const catTimeAgain = formatterAgain.format(nowAgain);

  // Display the formatted time in the div with id "currentTimeInIT"
  document.getElementById("currentTimeInUS").textContent = catTimeAgain;
}

function clearTimeButtonAgain() {
  // Clear the displayed time in the div with id "currentTimeInIT"
  document.getElementById("currentTimeInUS").textContent = '';
}

// Add event listeners to the buttons
document.getElementById("displayTimeButtonAgain").addEventListener("click", displayTimeAgain);
document.getElementById("clearTimeButtonAgain").addEventListener("click", clearTimeButtonAgain);


