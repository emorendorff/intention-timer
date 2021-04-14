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
