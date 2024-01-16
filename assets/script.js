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
            getWeather(lat, lon); // Call getWeather function with lat and lon
        })
        .catch(error => {
            console.log(error);
        });
}

function getWeather(lat, lon) {
    const url = `http://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=baba9a88af04fe7197ecea85bf60999a`;
    fetch(url)
        .then(response => response.json())
        .then(data => {
            console.log(data);
        })
        .catch(error => {
            console.log(error);
        });
}

