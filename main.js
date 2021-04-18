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
var logBtn = document.querySelector('.log-button')

var countDownArea = document.querySelector('.countdown');

var startComplete = document.querySelector('#startComplete');
var activityDescText = document.querySelector('#activeDesc')
//var startArea = document.getElementById('start-area')


// screen areas
var timerArea = document.querySelector('#timerSection');
var formArea = document.querySelector('.form-container');
var activityArea = document.querySelector('.activity-text')
var greyBoxTimer = document.querySelector('.grey-box');
var categoryCard = document.querySelector('.category-card');
var timeCard = document.querySelector('.time-card');
var describeCard = document.querySelector('.describe-card');

var cardHolder = document.querySelector('.card-holder');
var aside = document.querySelector('aside')

//Event Listeners
studyBtn.addEventListener('click', toggleCatBtn);
meditateBtn.addEventListener('click', toggleCatBtn);
exerciseBtn.addEventListener('click', toggleCatBtn);
submitBtn.addEventListener('click', validateForm);
logBtn.addEventListener('click', renderPastActivities);
startComplete.addEventListener('click', function(e){
  e.preventDefault();
  currentActivity.startTimer()
});

// Global
currentActivity = {};
pastActivities = [];

// Event Handlers

// function checkFormFilled() {
//   if (!checkInputsFilled() || !checkCategoryButtons()) {
//     hideElement(categoryError);
//     hideElement(descriptionError);
//     showElement(fullError);
//   } else {
//     hideElement(fullError);
//   }
// }
//checked

function updatePastActivities() {
pastActivities.push(currentActivity);
}

function renderPastActivities(e){
  e.preventDefault();
  updatePastActivities();
aside.innerHTML = "";

for (var i = 0; i < pastActivities.length; i++){
  aside.innerHTML +=
  `
    <div class="card-holder">
      <div class="log-cards">
        <p class="category-card" id="categoryCard">${pastActivities[i].category}</p>
        <p class="time-card">${pastActivities[i].minutes} MIN</p>
        <p class="describe-card">${pastActivities[i].description}</p>
      </div>
      <div class="color-div-container">
        <p class="little-color">|</p>
        </div>
        </div>
    `
}
}

function validateForm(e){
  e.preventDefault();
  var checkedButtons = checkCategoryButtons();
  var checkedInputs = checkInputsFilled();

  if(checkedButtons){
    if (checkedInputs) {
        createNewActivity();
        setupClock();
    }
  }
}

function createNewActivity() {
  currentActivity = new Activity(checkActiveCategory(), inputBoxDescription.value,
   parseInt(inputBoxMinutes.value), parseInt(inputBoxSeconds.value));
}

function setupClock() {
  hideElement(formArea);
  greyBoxTimer.classList.add('.grey-box-timer');
  activityArea.innerText = 'Current Activity';
  showElement(timerArea);
}

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

function checkActiveCategory(){
var activeIndex;
  for (var i = 0; i < categoryBtns.length; i++) {
    if (!categoryBtns[i].disabled) {
      activeIndex = i;
    }
  }
  if (activeIndex === 0) {
    return 'Study'
  } else if (activeIndex === 1) {
    return 'Meditate'
  } else if (activeIndex === 2) {
    return 'Exercise'
  }
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

function hideElement(element) {
  element.classList.add('hidden');
}

function showElement(element) {
  element.classList.remove('hidden');
}

//alert removed upon timer completing
//var startComplete = document.querySelector('.start-complete')
// startComplete.innerHTML = 'Complete'
//
//

//</section>

//global variables
// pastActivities = [] THIS IS THE DATA MODEL

//event listener on click of logbtn

//recentActivity = new Activity(this.category, inputBoxDescription.value, inputBoxMinutes.value, inputBoxMinutes.value);
//store as returned object into an array



//takes instanstiation of the activity class and innerHTML
// `<p class="category-card">${this.category}</p>
// <p class="time-card">${this.minutes}</p>
// <p class="describe-card">${this.description}</p>`

//then applies css classes to them


//corrisponding shape color??? just a box section?



//ems eyes and ems eyes only
//create a function with 3 if statements that is within the submit event handler
//function colorTimer() {
// if(studyBtn.checked) {

//}
//}
