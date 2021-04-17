class Activity {
  constructor(activityCat, descriptionInput, minutesInput, secondsInput){
      this.category = activityCat;
      this.description = descriptionInput;
      this.minutes = minutesInput;
      this.seconds = secondsInput;
      this.isCountedToZero =  false;
  }
  //methods
  startTimer() {
    if(startComplete.innerHTML !== "Completed, Guvna"){
  activityDescText.innerHTML = `${this.description}`;

  var time = (this.minutes * 60) +  this.seconds;
  //insert function to update the time
  var polyclock = setInterval(function() {
    var minutes = Math.floor(time/ 60);
    var seconds = time % 60;
    seconds = seconds < 10 ? '0' + seconds : seconds;
    if(seconds <= 0 && minutes <= 0){
      clearInterval(polyclock);
      this.isCountedToZero = true;
      if (this.isCountedToZero) {
        startComplete.innerHTML = "Completed, Guvna";
        alert("POLYCLOCK has run out of time")
      }
    }
    countDownArea.innerHTML = `${minutes}:${seconds}`;
    time--;
  }, 1000);
  }
}


  markComplete(){
  //clearInterval(polyclock);
  }

  saveToStorage(){}

};
