var inputBoxDescription = document.getElementById('description');
var inputBoxMinutes = document.getElementById('minutes');
var inputBoxSeconds = document.getElementById('seconds');

// DOM Vars
var studyBtn = document.getElementById('studyBtn');
var meditateBtn = document.getElementById('meditateBtn');
var exerciseBtn = document.getElementById('exerciseBtn');


//Event Listeners
studyBtn.addEventListener('click', toggleCatBtn);
meditateBtn.addEventListener('click', toggleCatBtn);
exerciseBtn.addEventListener('click', toggleCatBtn);



// Event Handlers

//dummy functions for hide/unhide html elements
function hideElement(element) {
  element.classList.add('hidden');
}

function showElement(element) {
  element.classList.remove('hidden');
}


function toggleCatBtn() {
  if (event.target.id === 'studyBtn') {
    studyBtn.classList.toggle(`study-btn-active`);
  } else if (event.target.id === 'meditateBtn') {
    meditateBtn.classList.toggle('meditate-btn-active');
  } else {
    exerciseBtn.classList.toggle('exercise-btn-active');
  }
}



//Validating input from minutes and seconds input  boxes
var invalidChars = [
  "-",
  "+",
  "e",
];

inputBoxMinutes.addEventListener("input", function() {
  this.value = this.value.replace(/[e\+\-]/gi, "");
});

inputBoxMinutes.addEventListener("keydown", function(e) {
  if (invalidChars.includes(e.key)) {
    e.preventDefault();
  }
});

inputBoxSeconds.addEventListener("input", function() {
  this.value = this.value.replace(/[e\+\-]/gi, "");
});

inputBoxSeconds.addEventListener("keydown", function(e) {
  if (invalidChars.includes(e.key)) {
    e.preventDefault();
  }
});


// Display the result in the element with id="demo"
//add Query selectors next for shayan and shayan only :)

// document.getElementById("demo").innerHTML = days + "d " + hours + "h "
// + minutes + "m " + seconds + "s ";

// If the count down is finished, write some text
// if (timeDifference < 0) {
//   clearInterval(x);
//   document.getElementById("demo").innerHTML = "EXPIRED";
// }
