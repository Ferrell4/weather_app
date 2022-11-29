function weatherApp (){
        //this is to retrieve weather from open weather 
        function getWeather(city) {
            var apiKey = "34ad3da7d04d1aca98c93ff617bbb6e8";
            var apiUrl = "https://api.openweathermap.org/data/2.5/weather?q=" + city + "&units=imperial" + "&appid=" + apiKey;
            // https://api.openweathermap.org/data/2.5/weather?q=city&appid=05027a18faadbe64fa845a2851972b89
    
            fetch(apiUrl)
                .then(function (response) {
                    console.log(response)
                    return response.json()
    
                })
                .then(function (data) {
                    console.log(data);
                    currentWeather(data, city);
                });
        }
}