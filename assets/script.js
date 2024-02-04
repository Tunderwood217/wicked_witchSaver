const searchForm = document.querySelector('.search');
const input = document.querySelector('input');

searchForm.addEventListener('submit', (e) => {
    e.preventDefault();
    const searchQuery = input.value;   
    getGeoLocation(searchQuery);
});

function getGeoLocation(searchQuery) {
    const url = `http://api.openweathermap.org/geo/1.0/direct?q=${searchQuery}&appid=baba9a88af04fe7197ecea85bf60999a`;
    fetch(url)
        .then(response => response.json())
        .then(data => {
            const { lat, lon } = data[0];
            console.log(lat, lon);
            getWeather(lat, lon);
            getFiveDayForecast(lat, lon); 
        })
        .catch(error => {
            console.log(error);
        });
};

function getWeather(lat, lon) {
    const url = `http://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=baba9a88af04fe7197ecea85bf60999a`;
    fetch(url)
        .then(response => response.json())
        .then(data => {
            console.log(data);
            displayWeather(data);
            // Store data in local storage
            localStorage.setItem('getWeather', JSON.stringify(data));
            console.log(getWeather);
        })
        .catch(error => {
            console.log(error);
        });
};

function getFiveDayForecast(lat, lon) {
    const url = `http://api.openweathermap.org/data/2.5/forecast?lat=${lat}&lon=${lon}&appid=baba9a88af04fe7197ecea85bf60999a`; 
    fetch(url)
        .then(response => response.json())
        .then(data => {
            console.log(data);
            displayFiveDayForecast(data);
        })
        .catch(error => {
            console.log(error);
        });
};

// function displayWeather(data) {
    
// };

// function displayFiveDayForecast(data) {
// };

// function getWeather(lat, lon) {
//     const url = `http://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=baba9a88af04fe7197ecea85bf60999a`;
//     fetch(url)
//         .then(response => response.json())
//         .then(data => {
//             console.log(data);
//             displayWeather(data);
//         })
//         .catch(error => {
//             console.log(error);
//         });
// }; 

// function getFiveDayForecast(lat, lon) {
//     const url = `http://api.openweathermap.org/data/2.5/forecast?lat=${lat}&lon=${lon}&appid=baba9a88af04fe7197ecea85bf60999a`; 
//     fetch(url)
//         .then(response => response.json())
//         .then(data => {
//             console.log(data);
//             displayFiveDayForecast(data);
//         })
//         .catch(error => {
//             console.log(error);
//         });
// };


function displayWeather(data) {
    cityName = data.name;
    // console.log(cityName);
    const weatherDescription = data.weather[0].description;
    console.log(weatherDescription);
    const temperature = data.main.temp;
    console.log(temperature);
    const humidity = data.main.humidity;
    console.log(humidity);
    const windSpeed = data.wind.speed;
    console.log(windSpeed);
    // const weatherIcon = data.weather[0].icon;
    // console.log(weatherIcon);
document.querySelector('.cityName').innerHTML = cityName;
document.querySelector('.weatherDescription').innerHTML = weatherDescription;
document.querySelector('.temperature').innerHTML = temperature;
document.querySelector('.humidity').innerHTML = humidity;
document.querySelector('.windSpeed').innerHTML = windSpeed;
};

function displayFiveDayForecast(data) {
    const dayOne = data.list[0].dt_txt;
    console.log(dayOne);
    const dayOneTemp = data.list[0].main.temp;
    console.log(dayOneTemp);
    const dayOneHumidity = data.list[0].main.humidity;
    console.log(dayOneHumidity);
    const dayOneWindSpeed = data.list[0].wind.speed;
    console.log(dayOneWindSpeed);
    const dayTwo = data.list[1].dt_txt;
    console.log(dayTwo);
    const dayTwoTemp = data.list[1].main.temp;
    console.log(dayTwoTemp);
    const dayTwoHumidity = data.list[1].main.humidity;
    console.log(dayTwoHumidity);
    const dayTwoWindSpeed = data.list[1].wind.speed;
    console.log(dayTwoWindSpeed);
    const dayThree = data.list[16].dt_txt;
    console.log(dayThree);
    const dayThreeTemp = data.list[16].main.temp;
    console.log(dayThreeTemp);
    const dayThreeHumidity = data.list[16].main.humidity;
    console.log(dayThreeHumidity);
    const dayThreeWindSpeed = data.list[16].wind.speed;
    console.log(dayThreeWindSpeed);
    const dayFour = data.list[24].dt_txt;
    console.log(dayFour);
    const dayFourTemp = data.list[24].main.temp;
    console.log(dayFourTemp);
    const dayFourHumidity = data.list[24].main.humidity;
    console.log(dayFourHumidity);
    const dayFourWindSpeed = data.list[24].wind.speed;
    console.log(dayFourWindSpeed);
    const dayFive = data.list[32].dt_txt;
    console.log(dayFive);
    const dayFiveTemp = data.list[32].main.temp;
    console.log(dayFiveTemp);
    const dayFiveHumidity = data.list[32].main.humidity;
    console.log(dayFiveHumidity);
    const dayFiveWindSpeed = data.list[32].wind.speed;
    console.log(dayFiveWindSpeed);
    document.querySelector('.dayOne').innerHTML = dayOne;
    document.querySelector('.dayOneTemp').innerHTML = dayOneTemp;
    document.querySelector('.dayOneHumidity').innerHTML = dayOneHumidity;
    document.querySelector('.dayOneWindSpeed').innerHTML = dayOneWindSpeed;
    document.querySelector('.dayTwo').innerHTML = dayTwo;
    document.querySelector('.dayTwoTemp').innerHTML = dayTwoTemp;
    document.querySelector('.dayTwoHumidity').innerHTML = dayTwoHumidity;
    document.querySelector('.dayTwoWindSpeed').innerHTML = dayTwoWindSpeed;
    document.querySelector('.dayThree').innerHTML = dayThree;
    document.querySelector('.dayThreeTemp').innerHTML = dayThreeTemp;
    document.querySelector('.dayThreeHumidity').innerHTML = dayThreeHumidity;
    document.querySelector('.dayThreeWindSpeed').innerHTML = dayThreeWindSpeed;
    document.querySelector('.dayFour').innerHTML = dayFour;
    document.querySelector('.dayFourTemp').innerHTML = dayFourTemp;
    document.querySelector('.dayFourHumidity').innerHTML = dayFourHumidity;
    document.querySelector('.dayFourWindSpeed').innerHTML = dayFourWindSpeed;
    document.querySelector('.dayFive').innerHTML = dayFive;
    document.querySelector('.dayFiveTemp').innerHTML = dayFiveTemp;
    document.querySelector('.dayFiveHumidity').innerHTML = dayFiveHumidity;
    document.querySelector('.dayFiveWindSpeed').innerHTML = dayFiveWindSpeed;
}