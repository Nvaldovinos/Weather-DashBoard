//variables for elments int he DOM
var searchInput = document.getElementById('search-input');
var searchButton = document.getElementById('search-button');
var formEl = document.getElementById('search-form');
var citiesEl = document.getElementById('searched-cities');

//variables for api
var apiKey = 'd71c1be9151a89df5059df5d7300ceb8';
var apiURLRoot = 'https://api.openweathermap.org/data/2.5/weather?';


//functions 
function getWeather (){
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
       
        //form submissions 
        function formSubmit(event){
                event.preventDefault();
                var citySearch = $('input[name="search-input"]').val();
                citiesEl.append('<li>' + citySearch + '<li>')
                $('input[name="search-input"]').val('')
            }
            
       
}
//Prints list of cities 
// function formSubmit(event){
//     event.preventDefault();
//     var citySearch = $('input[name="search-input"]').val();
//     citiesEl.append('<li>' + citySearch + '<li>')
//     $('input[name="search-input"]').val('')
// }


//event listeners 
searchButton.addEventListener('click', getWeather);


//Adding local storage to store searched cities 
