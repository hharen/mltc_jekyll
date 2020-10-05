let countdowns = document.getElementsByClassName("countdown")

for (let countdown of countdowns) {
  let countdownDate = new Date(countdown.dataset['countdownDate']).getTime()

  setInterval(function() {
    let now = new Date().getTime();

    let distance = countdownDate - now;

    let days = Math.floor(distance / (1000 * 60 * 60 * 24));
    let hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    let minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    let seconds = Math.floor((distance % (1000 * 60)) / 1000);

    countdown.innerHTML =
      days + "<span class='small-text'>days </span>"
      + hours + "<span class='small-text'>h </span>"
      + minutes + "<span class='small-text'>min </span>"
      + seconds + "<span class='small-text'>s </span>";

    // If the count down is over, write some text
    if (distance < 0) {
      countdown.innerHTML = "REGISTRATION OPEN";
    }
  }, 1000)
}
