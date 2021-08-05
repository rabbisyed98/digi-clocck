function digitalClock() {

  // Clock code

  let date = new Date();
  let hours = date.getHours(); // Value = 0-23
  let minutes = date.getMinutes(); // Value = 0-59
  let seconds = date.getSeconds(); // Value = 0-59
  let timeFormat = 'AM';

  if (hours === 0) {
    hours = 12;
  }
  if (hours>12) {
    hours = hours - 12;
    timeFormat = 'PM';
  }
  hours = hours < 10 ? '0' + hours : hours;
  minutes = minutes < 10 ? '0' + minutes : minutes;
  seconds = seconds < 10 ? '0' + seconds : seconds;

  let finalTime = `${hours} : ${minutes} : ${seconds}`;

  document.getElementById('time').innerText = finalTime;

  document.querySelector('small').innerText = timeFormat;

  setInterval(digitalClock, 1000);

}
digitalClock();

// Show todays date

let today = new Date();
let options = {weekday : "short", month:"short", day:"numeric", year:"numeric"};
document.querySelector('#today').innerText = today.toLocaleDateString("bn-BD", options);
