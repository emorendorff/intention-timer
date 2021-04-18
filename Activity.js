class Activity {
  constructor(activityCat, descriptionInput, minutesInput, secondsInput){
      this.category = activityCat;
      this.description = descriptionInput;
      this.minutes = minutesInput;
      this.seconds = secondsInput;
      this.completed =  false;
      this.id = Date.now();
  }
  //methods
  startTimer() {
    if(start.innerHTML !== "Completed, Guvna!"){
  activityDescText.innerHTML = `${this.description}`;

  var time = (this.minutes * 60) +  this.seconds;
  //insert function to update the time
  var polyclock = setInterval(function() {
    var minutes = Math.floor(time/ 60);
    var seconds = time % 60;
    seconds = seconds < 10 ? '0' + seconds : seconds;
    if(seconds < 1 && minutes < 1){
      clearInterval(polyclock);
      // if (this.completed) {
        setTimeout(showCompleted, 2000);
      // }
      currentActivity.markComplete();
    }
    countDownArea.innerHTML = `${minutes}:${seconds}`;
    time--;
  }, 1000);
  }
}

  markComplete(){
    this.completed = !this.completed;
    console.log(currentActivity);
  }

  saveToStorage(){
  }

};
