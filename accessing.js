// Change the text of the "Seattle Weather" header to "February 10 Weather Forecast, Seattle"
document.getElementById("weather-head").innerHTML = "February 10 Weather Forecast, Seattle"
// Change the styling of every element with class "sun" to set the color to "orange"
let sun = document.getElementsByClassName('sun')
sun[0].style.color = "orange"
// !--- i have added additional option in the css file line 33 ---! //
console.log(sun[0])

// Change the class of the second <li> from to "sun" to "cloudy"
document.getElementsByTagName("li")[1].className = "cloudy"