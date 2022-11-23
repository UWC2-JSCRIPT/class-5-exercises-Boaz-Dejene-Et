// Change the text of the "Seattle Weather" header to "February 10 Weather Forecast, Seattle"
document.getElementById("weather-head").innerHTML = "February 10 Weather Forecast, Seattle"
// Change the styling of every element with class "sun" to set the color to "orange"
let sun = document.getElementsByClassName('sun')
// sun[0].style.color = "orange"
for (var i = 0; i < sun.length; i++) {
    // tags[i].addEventListener('click', done,false);
    sun[i].style.color = "orange"
  }

// Change the class of the second <li> from to "sun" to "cloudy"
document.getElementsByTagName("li")[1].className = "cloudy"