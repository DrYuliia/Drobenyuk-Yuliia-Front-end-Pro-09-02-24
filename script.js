function getWeather() {
    let city = document.getElementById("city-input").value;
    let xhttp = new XMLHttpRequest();
    xhttp.onreadystatechange = function () {
        if (this.readyState == 4 && this.status == 200) {
            let weatherData = JSON.parse(this.responseText);
            displayWeather(weatherData);
        }
    };
    xhttp.open("GET", "http://api.openweathermap.org/data/2.5/weather?q=" + city + "&units=metric&APPID=5d066958a60d315387d9492393935c19", true);
    xhttp.send();
}

function displayWeather(data) {
    let weatherInfo = document.getElementById("weather-info");
    weatherInfo.innerHTML = "<p>Температура: " + data.main.temp + "°C</p>" +
        "<p>Тиск: " + data.main.pressure + " hPa</p>" +
        "<p>Опис: " + data.weather[0].description + "</p>" +
        "<p>Вологість: " + data.main.humidity + "%</p>" +
        "<p>Швидкість вітру: " + data.wind.speed + " м/с</p>" +
        "<p>Напрям вітру: " + data.wind.deg + "°</p>" +
        "<img src='http://openweathermap.org/img/w/" + data.weather[0].icon + ".png' alt='weather-icon'>";
}