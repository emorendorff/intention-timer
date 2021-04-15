// DOM Vars
// forms
var inputBoxDescription = document.getElementById('description');
var inputBoxMinutes = document.getElementById('minutes');
var inputBoxSeconds = document.getElementById('seconds');

//errors
var descriptionError = document.getElementById('descriptionError');
var secondsError = document.getElementById('secondsError');
var minutesError = document.getElementById('minutesError');
var categoryError = document.getElementById('categoryError')
var fullError = document.getElementById('fullError');

// buttons
var studyBtn = document.getElementById('studyBtn');
var meditateBtn = document.getElementById('meditateBtn');
var exerciseBtn = document.getElementById('exerciseBtn');
var submitBtn = document.getElementById('submit');

var categoryBtns = document.querySelectorAll('.category-btn');


//Event Listeners
studyBtn.addEventListener('click', toggleCatBtn);
meditateBtn.addEventListener('click', toggleCatBtn);
exerciseBtn.addEventListener('click', toggleCatBtn);
submitBtn.addEventListener('click', function(e) {
  e.preventDefault()
//checkFormFilled();
checkCategoryButtons();
checkInputsFilled();



});

// Global
currentActivity = {};
pastActivities = [];

// Event Handlers

function checkFormFilled() {
  if (!checkInputsFilled() || !checkCategoryButtons()) {
    hideElement(categoryError);
    hideElement(descriptionError);
    showElement(fullError);
  } else {
    hideElement(fullError);
  }
}
//checked
function checkInputsFilled() {
  if (!inputBoxDescription.value) {
    showElement(descriptionError)
  } else if (!inputBoxMinutes.value) {
    showElement(minutesError)
  } else if (!inputBoxSeconds.value) {
    showElement(secondsError)
  } else {
    hideElement(descriptionError)
    hideElement(minutesError)
    hideElement(secondsError)
    return true;
  }
}
//checked
function checkCategoryButtons() {
  var isCatButtonChecked = false;
  for (var i = 0; i < categoryBtns.length; i++) {
    if (categoryBtns[i].disabled) {
      isCatButtonChecked = true;
      hideElement(categoryError)
    }
  }
  if (!isCatButtonChecked) {
    showElement(categoryError);
  }
  return isCatButtonChecked;
}

function toggleCatBtn() {
  if (event.target.id === 'studyBtn') {
    studyBtn.classList.toggle('study-btn-active');
    activateDeactivate(meditateBtn, exerciseBtn);
  } else if (event.target.id === 'meditateBtn') {
    meditateBtn.classList.toggle('meditate-btn-active');
    activateDeactivate(studyBtn, exerciseBtn);
  } else {
    exerciseBtn.classList.toggle('exercise-btn-active');
    activateDeactivate(studyBtn, meditateBtn);
  }
}

function activateDeactivate(btn1, btn2) {
  (!btn1.disabled || !btn2.disabled) ?
  (btn1.disabled = btn2.disabled = true) : btn1.disabled = btn2.disabled = false;
}


//Validating input from minutes and seconds input  boxes

inputBoxMinutes.addEventListener("input", function() {
  this.value = this.value.replace(/[e\+\-]/gi, "");
});

inputBoxMinutes.addEventListener("keydown", function(e) {
  var invalidChars = ["-", "+", "e", ];
  if (invalidChars.includes(e.key)) {
    e.preventDefault();
  }
});

inputBoxSeconds.addEventListener("input", function() {
  this.value = this.value.replace(/[e\+\-]/gi, "");
});

inputBoxSeconds.addEventListener("keydown", function(e) {
  var invalidChars = ["-", "+", "e", ];
  if (invalidChars.includes(e.key)) {
    e.preventDefault();
  }
});

//dummy functions for hide/unhide html elements
function toggleElement(element) {
  element.classList.toggle('hidden');
}
//
function hideElement(element) {
  element.classList.add('hidden');
}
//
function showElement(element) {
  element.classList.remove('hidden');
}

// Display the result in the element with id="demo"
//add Query selectors next for shayan and shayan only :)

// document.getElementById("demo").innerHTML = days + "d " + hours + "h "
// + minutes + "m " + seconds + "s ";

// If the count down is finished, write some text
// if (timeDifference < 0) {
//   clearInterval(x);
//   document.getElementById("demo").innerHTML = "EXPIRED";
// }
