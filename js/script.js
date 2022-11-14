window.onload = function () {
  var hours = 00;
  var min = 00;
  var sec = 00;
  var hundredths = 00;

  var appendHours = document.getElementById("hours");
  var appendMin = document.getElementById("min");
  var appendSec = document.getElementById("sec");
  var appendHundredths = document.getElementById("hundredths");

  var buttonStart = document.getElementById("button-start");
  var buttonStop = document.getElementById("button-stop");
  var buttonReset = document.getElementById("button-reset");

  var interval;

  buttonStart.onclick = function () {
    clearInterval(interval);
    interval = setInterval(startTimer, 10);
  };

  buttonStop.onclick = function () {
    clearInterval(interval);
  };

  buttonReset.onclick = function () {
    clearInterval(interval);
    hours = "00";
    min = "00";
    sec = "00";
    hundredths = "00";
    appendHours.innerHTML = hours;
    appendMin.innerHTML = min;
    appendSec.innerHTML = sec;
    appendHundredths.innerHTML = hundredths;
  };

  function startTimer() {
    hundredths++;

    if (hundredths <= 9) {
      appendHundredths.innerHTML = "0" + hundredths;
    }
    if (hundredths > 9) {
      appendHundredths.innerHTML = hundredths;
    }

    // Seconds //
    if (hundredths > 99) {
      sec++;
      appendSec.innerHTML = "0" + sec;
      hundredths = 0;
      appendHundredths.innerHTML = "0" + 0;
    }
    if (sec > 9) {
      appendSec.innerHTML = sec;
    }
    // End Seconds //

    // minutes //
    if (sec > 59) {
      min++;
      appendMin.innerHTML = "0" + min;
      sec = 0;
      appendSec.innerHTML = "0" + 0;
    }
    if (min > 9) {
      appendMin.innerHTML = min;
    }
    // End minutes //

    // Hour //
    if (min > 59) {
      hours++;
      appendHours.innerHTML = "0" + hours;
      sec = 0;
      appendMin.innerHTML = "0" + 0;
    }
    if (hours > 9) {
      appendHours = hours;
    }
    // End Hour //
  }
};
