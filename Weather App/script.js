const form = document.getElementById('weather-form')
const cityInput = document.getElementById('city-input')
const apiKey = ""
let lat = "";
let long = "";
let city = "";

form.addEventListener('submit', function (event) {
    event.preventDefault()
    city = cityInput.value
    console.log(city)
    getWeather()

})

async function getCoords() {
    try {
        const geoUrl = `http://api.openweathermap.org/geo/1.0/direct?q=${city}&limit=10&appid=${apiKey}`
        const response = await fetch(geoUrl)
        console.log('Response from geocoding api', response)
        const geoData = await response.json()
        console.log('Geo data parsed from gecoding api response', geoData)

        lat = geoData[0].lat;
        long = geoData[0].lon;

        console.log("latitude", lat, "longitude", long)
    } catch (err) {
        console.log(err)
    }
}


async function getWeather() {
    try {
        await getCoords()
        const weatherUrl = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${long}&units=metric&appid=${apiKey}`
        const response = await fetch(weatherUrl)
        const data = await response.json()
        console.log(data)
    } catch (err) {
        console.log(err)
    }
}