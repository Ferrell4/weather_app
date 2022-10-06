var getCityWeather = function(city) {

    var apiKey="30ba22cf3476c2ad903f09a213b675ab"
    var apiURL = `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=imperial&appid=${apiKey}`

    fetch(apiURL)
        .then(function (response) {
            response.json().then(function(data) {
                displayWeather(data, city);
            });
        });
        
};