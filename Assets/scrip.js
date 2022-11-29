function weatherApp (){
        var citySearched = document.getElementById("city-search");
        var currentCity = document.getElementById("current-city");
        var temperature = document.getElementById("temp");
        var wind = document.getElementById("wind");
        var humidity = document.getElementById("humidity");
        var uvIndex = document.getElementById("uv-index");
        var searchBtn = document.getElementById("search-btn")
        var pastSearches = JSON.parse(localStorage.getItem("search")) || [];
        var history = document.getElementById("past-searches");
        var clearBtn = document.getElementById("clearBtn");
        var forecastTime1 = document.getElementById("time1");
        var forecastImg1 = document.getElementById("image1");
        var forecastWind1 = document.getElementById("wind1");
        var forecastTemp1 = document.getElementById("temp1");
        var forecastHum1 = document.getElementById("hum1");
        var forecastTime2 = document.getElementById("time2");
        var forecastImg2 = document.getElementById("image2");
        var forecastWind2 = document.getElementById("wind2");
        var forecastTemp2 = document.getElementById("temp2");
        var forecastHum2 = document.getElementById("hum2");
        var forecastTime3 = document.getElementById("time3");
        var forecastImg3 = document.getElementById("image3");
        var forecastWind3 = document.getElementById("wind3");
        var forecastTemp3 = document.getElementById("temp3");
        var forecastHum3 = document.getElementById("hum3");
        var forecastTime4 = document.getElementById("time4");
        var forecastImg4 = document.getElementById("image4");
        var forecastWind4 = document.getElementById("wind4");
        var forecastTemp4 = document.getElementById("temp4");
        var forecastHum4 = document.getElementById("hum4");
        var forecastTime5 = document.getElementById("time5");
        var forecastImg5 = document.getElementById("image5");
        var forecastWind5 = document.getElementById("wind5");
        var forecastTemp5 = document.getElementById("temp5");
        var forecastHum5 = document.getElementById("hum5");
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