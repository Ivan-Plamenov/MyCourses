function attachEventsListeners() {
  var days = document.getElementById("days");
  var hours = document.getElementById("hours");
  var minutes = document.getElementById("minutes");
  var seconds = document.getElementById("seconds");
  let value = 0;
  let type = "";

  var buttons = Array.from(document.querySelectorAll("input[type=button]"));
  buttons.forEach((button) => button.addEventListener("click", findInput));

  function findInput(event) {
    switch (event.target.id) {
      case "daysBtn":
        value = days.value;
        type = "days";
        break;
      case "hoursBtn":
        value = hours.value;
        type = "hours";
        break;
      case "minutesBtn":
        value = minutes.value;
        type = "minutes";
        break;
      case "secondsBtn":
        value = seconds.value;
        type = "seconds";
        break;
    }
    convert();
  }

  function convert() {
    switch (type) {
      case "days":
        hours.value = value * 24;
        minutes.value = value * 1440;
        seconds.value = value * 86400;
        break;
      case "hours":
        days.value = value / 24;
        minutes.value = value * 60;
        seconds.value = value * 3600;
        break;
      case "minutes":
        days.value = value / 1440;
        hours.value = value / 60;
        seconds.value = value * 60;
        break;
      case "seconds":
        days.value = value / 86400;
        hours.value = value / 3600;
        minutes.value = value / 60;
        break;
    }
  }
}
