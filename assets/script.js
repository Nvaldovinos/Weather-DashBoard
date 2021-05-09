//variables for elments int he DOM
var searchInput = document.getElementById('search-input');
var searchButton = document.getElementById('search-button');
var fiveDay = document.getElementById('five-day');

//variables for api
const apiKey = 'd71c1be9151a89df5059df5d7300ceb8';
var apiURLRoot = 'https://api.openweathermap.org/data/2.5/weather?';
var dailyForecast ='https://api.openweathermap.org/data/2.5/onecall?lat=35.7721&lon=-78.6386&&units=imperial&exclude=current,minutely,hourly&appid=12ab451d86c37bd1bbaa8df17ff823aa';


//functions 
function getWeather(){
    console.log('getWeather is working');
    //get name of city 
    var cityName = searchInput.value;
    console.log(cityName);
    var searchURl = `${apiURLRoot}q=${cityName}&appid=${apiKey}`;
    //fetch api 
    fetch(searchURl)
        .then(function(res){
            return res.json();  
        })
        .then(function(data){
            console.log(data);
        })   
}


// function getApi(requestUrl) {
//     fetch(requestUrl)
//       .then(function (response) {
//         console.log(response);
//         if (response.status === 200) {
//           responseText.textContent = response.status;
//         }
//         return response.json();
//     });
//   }
  
//   getApi(requestUrl);

//event listeners 
searchButton.addEventListener('click', getWeather);


//Adding local storage to store searched cities 
