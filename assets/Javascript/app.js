


//add audio when the timer is done
//var audio = new Audio("377639__danarobinsondesignsgmailcom__b15.mp3");
//function to play audio
//audio.play();

//set timer and make an alert when the time is up
function startTimer(duration, display) {
  var timer = duration, minutes, seconds;
  setInterval(function () {
    minutes = parseInt(timer / 60, 10);
    seconds = parseInt(timer % 60, 10);

    minutes = minutes < 10 ? "0" + minutes : minutes;
    seconds = seconds < 10 ? "0" + seconds : seconds;

    display.text(minutes + ":" + seconds);

    //make the user know that the time is up 
    //make a button that alerts the results of the game
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


//make questions in div id="row-questions"
var questions = ["Which is not an NFL in Texas?",
  "Which team drafted Lebron James in the NBA?",
 "How many championships does LA Clippers have?",
 "Westbrook and Durant both started playing for..",
 "Witten played for what NFL team?"]

$("#question1").text(questions[0]);
$("#question2").text(questions[1]);
$("#question3").text(questions[2]);
$("#question4").text(questions[3]);
$("#question5").text(questions[4]);

var $radios1 = $('input[name="ques1"]');
var $radios2 = $('input[name="ques2"]');
var $radios3 = $('input[name="ques3"]');
var $radios4 = $('input[name="ques4"]');
var $radios5 = $('input[name="ques5"]');

var scoreTally = 0;

var submit= function(){
  window.location = '/Users/alexisvillalpando/Desktop/Desktopfolder/TriviaGame/index2.html'
}

$( "#submit" ).click(function() {
  submit();
});




$radios1.change(function () {
  var $checked = $radios1.filter(':checked');
  //console.log($checked.val());

  if ($checked.val() == 1) {
    //alert("you are correct!")
    scoreTally++;
    console.log(scoreTally);
  }
});
$radios2.change(function () {
  var $checked = $radios2.filter(':checked');
  //console.log($checked.val());

  if ($checked.val() == 1) {
    //alert("you are correct!")
    scoreTally++;
    console.log(scoreTally);
  }
});

$radios3.change(function () {
  var $checked = $radios3.filter(':checked');
  //console.log($checked.val());

  if ($checked.val() == 1) {
    //alert("you are correct!")
    scoreTally++;
    console.log(scoreTally);
  }
});

$radios4.change(function () {
  var $checked = $radios4.filter(':checked');
  //console.log($checked.val());

  if ($checked.val() == 1) {
   // alert("you are correct!")
    scoreTally++;
    console.log(scoreTally);
  }
});

$radios5.change(function () {
  var $checked = $radios5.filter(':checked');
  console.log($checked.val());

  if ($checked.val() == 1) {
    //alert("you are correct!")
    scoreTally++;
    console.log(scoreTally);
  }
});



$("#score-tally").text("You got " + scoreTally + " out of 5!")


















