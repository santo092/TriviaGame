


//add audio when the timer is done
var audio = new Audio("377639__danarobinsondesignsgmailcom__b15.mp3");
//function to play audio
audio.play();

//set timer and make an alert when the time is up
function startTimer(duration, display) {
  var timer = duration, minutes, seconds;
  setInterval(function () {
    minutes = parseInt(timer / 60, 10);
    seconds = parseInt(timer % 60, 10);

    minutes = minutes < 10 ? "0" + minutes : minutes;
    seconds = seconds < 10 ? "0" + seconds : seconds;

    display.text(minutes + ":" + seconds);

    if (--timer < 0) {
      timer = 0;
      $('#time').html("<h1>Time is up!</h1>")
      
    }

  }, 1000);
}

jQuery(function ($) {
  var oneMinute = 60 * .1,
    display = $('#time');
  startTimer(oneMinute, display)
});




