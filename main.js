// DOM Vars
var studyBtn = document.getElementById('studyBtn');
var meditateBtn = document.getElementById('meditateBtn');
var exerciseBtn = document.getElementById('exerciseBtn');



//Event Listeners
studyBtn.addEventListener('click', );
meditateBtn.addEventListener('click', );
exerciseBtn.addEventListener('click', );


// Event Handlers
function toggle


// Display the result in the element with id="demo"
//add Query selectors next for shayan and shayan only :)

document.getElementById("demo").innerHTML = days + "d " + hours + "h "
+ minutes + "m " + seconds + "s ";

// If the count down is finished, write some text
if (timeDifference < 0) {
  clearInterval(x);
  document.getElementById("demo").innerHTML = "EXPIRED";
}
}, 1000);
}
