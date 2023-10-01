const apiKey ='9d54ecbca3880248fa7f98df4740fb03';
const api='https://api.openweathermap.org/data/2.5/weather?units=metric&q=';
const searchBox = document.querySelector(".search input");
const searchBtn = document.querySelector('.search button');
const weatherIcon = document.querySelector('.weatherIcon')


async function checkweather(city){
    const response = await fetch(api +city + `&appid=${apiKey}`) ;
    
    if (response.status == 404)
    {
        document.querySelector('.error').style.display = 'block'
        document.querySelector('.weather').style.display = 'none'

    }
    else {
        var data = await response.json();
    document.querySelector('.city').innerHTML = data.name;
    document.querySelector('.temp').innerHTML = Math.round(data.main.temp) + '°C';
    document.querySelector('.humidity').innerHTML = data.main.humidity + '%';
    document.querySelector('.wind').innerHTML=data.wind.speed + 'km/h';
    if (data.weather[0].main == "cloud"){
            weatherIcon.src = 'images/cloud.png'
    }
    else if (data.weather[0].main == "Cloud"){
            weatherIcon.src = 'images/cloud.png'
    }
    if (data.weather[0].main == "Clear"){
            weatherIcon.src = 'images/clear.png'
    }
    if (data.weather[0].main == "Rain"){
            weatherIcon.src = 'images/rain.png'
    }
    if (data.weather[0].main == "Drizzle"){
            weatherIcon.src = 'images/drizzle.png'
    }
    if (data.weather[0].main == "Mist"){
            weatherIcon.src = 'images/mist.png'
    }
    document.querySelector('.weather').style.display = 'block';
    
    }
    
}
searchBtn.addEventListener('click', ()=>{
    checkweather(searchBox.value)
})
