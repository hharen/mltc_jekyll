// Set the date we're counting down to

var countDownDate = new Date("Oct 20, 2020 00:00:00").getTime();

// Update the count down every 1 second
var x = setInterval(function() {

  var now = new Date().getTime();

  var distance = countDownDate - now;

  var days = Math.floor(distance / (1000 * 60 * 60 * 24));
  var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
  var seconds = Math.floor((distance % (1000 * 60)) / 1000);

  document.getElementById("countdown").innerHTML =
  days + "<span class='small-text'>days </span>"
  + hours + "<span class='small-text'>h </span>"
  + minutes + "<span class='small-text'>min </span>"
  + seconds + "<span class='small-text'>s </span>";

  // If the count down is over, write some text
  if (distance < 0) {
    clearInterval(x);
    document.getElementById("countdown").innerHTML = "REGISTRATION CLOSED";
  }
}, 1000);


var countDownDateSEO = new Date("Oct 7, 2020 00:00:00").getTime();

// Update the count down every 1 second
var x = setInterval(function() {

  var now = new Date().getTime();

  var distance = countDownDateSEO - now;

  var days = Math.floor(distance / (1000 * 60 * 60 * 24));
  var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
  var seconds = Math.floor((distance % (1000 * 60)) / 1000);

  document.getElementById("countdownSEO").innerHTML =
  days + "<span class='small-text'>days </span>"
  + hours + "<span class='small-text'>h </span>"
  + minutes + "<span class='small-text'>min </span>"
  + seconds + "<span class='small-text'>s </span>";

  // If the count down is over, write some text
  if (distance < 0) {
    clearInterval(x);
    document.getElementById("countdownSEO").innerHTML = "REGISTRATION CLOSED";
  }
}, 1000);

