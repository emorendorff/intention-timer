class Activity {
  constructor(activityCat, descriptionInput, minutesInput, secondsInput){
      this.category = activityCat;
      this.description = descriptionInput;
      this.minutes = minutesInput;
      this.seconds = secondsInput;
  }
  //methods
  startTimer(){
  const startingMinutes = this.minutes;
  var time = startingMinutes * 60;

  //insert element to display the time
  //const countdownEl = document.getElementById('')

  //insert function to update the time
  setInterval(updateCountdown,1000);

  function updateCountdown() {
    const minutes = Math.floor(time/ 60);
    var seconds = time % 60;

    seconds = seconds < 10 ? '0' + seconds : seconds;

    //USE THE QUERY SELECtor from above to manipulate it's innerHTML
    //queryselector.innerHTML = `${minutes}:${seconds}`;
    time--;
  }





  }

  markComplete(){}

  saveToStorage(){}





}