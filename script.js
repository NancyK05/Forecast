// var btn = document.querySelector('#add');
// var cityOutput = document.querySelector('#cityoutput');
// var descriptionElement = document.querySelector('#description');
// var tempElement = document.querySelector('#temp');
// var windElement = document.querySelector('#wind');
// var inputElement = document.querySelector('#city-input');
// var apiKey = "68acd57b172c591736ffc1a374cc9382";

// function convertTemperature(val) {
//   return (val - 273).toFixed(3);
// }

// btn.addEventListener('click', function() {
//   var cityInputValue = inputElement.value.trim();
//   if (!cityInputValue) {
//     alert('Please enter a city name');
//     return;
//   }

//   // fetch(`https://api.openweathermap.org/data/2.5/weather?q=${cityInputValue}&appid=${apiKey}`)
//   fetch(`https://api.openweathermap.org/data/2.5/weather?q=${cityInputValue}&appid=${apiKey}`)
//     .then(response => response.json())
//     .then(data => {
//       var cityName = data.name;
//       var description = data.weather[0].description;
//       var temperature = convertTemperature(data.main.temp);
//       var windSpeed = data.wind.speed;

//       cityOutput.innerHTML = `Weather of <span>${cityName}</span>`;
//       tempElement.innerHTML = `Temperature: <span>${temperature} C</span>`;
//       descriptionElement.innerHTML = `Sky Conditions: <span>${description}</span>`;
//       windElement.innerHTML = `Wind Speed: <span>${windSpeed} km/h</span>`;
//     })
//     .catch(error => {
//       console.error(error);
//       alert('Error fetching weather data. Please try again later.');
//     });
// });





var inputvalue = document.querySelector('cityinput')
var btn= document.querySelector('#add');
var city= document.querySelector('cityoutput')
var descrip=document.querySelector('#description')
var temp=document.querySelector('#temp')
var wind=document.querySelector('#wind')
apik="2207de6522e0bd1a50fd95eca0b72c78"
function convertion(val)
{
	return (val-273).toFixed(3)
}
btn.addEventListener('click' , function(){
	
	fetch('https://api.openweathermap.org/data/2.5/weather?q='+ +inputvalue.value+ '&appid='+apik)   
	.then(res => res.json())

	.then(data=>
	{
		var nameval = data['name']
		var descrip = data['weather']['0']['description']
		var tempature = data['main']['temp']
    	var windspeed = data['wind']['speed']

		city.innerHTML=`Weather of <span> ${nameval} <span>`
		temp.innerHTML= `Temperature: <span> ${convertion(tempature)} C</span>`
		description. innerHTML= `Sky Conditions: <span>${descrip}<span>`
		wind.innerHTML = `Wind Speed: <span>${windspeed} km/h<span>` 
	
	})
	.catch(err => alert('You entered Wrong city name'))
})


