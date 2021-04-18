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
    if(circleBorder.innerText !== "Completed, Guvna!"){
      activityDescText.innerHTML = `${this.description}`;
      var time = (this.minutes * 60) +  this.seconds;
  //insert function to update the time
      var polyclock = setInterval(function() {
      var minutes = Math.floor(time/ 60);
      var seconds = time % 60;
      seconds = seconds < 10 ? '0' + seconds : seconds;
        if(seconds <= 0 && minutes <= 0){
          clearInterval(polyclock);
          if (currentActivity.markComplete()) {
            circleBorder.innerText === "Completed, Guvna!"
            showCompleted();
          }
        }
        countDownArea.innerHTML = `${minutes}:${seconds}`;
        time--;
      }, 1000);
    }
  }

  markComplete(){
    this.completed = !this.completed;
    return true;
  }

  saveToStorage(){
  }

};
