class UI
{
    
    setWeatherDetails(weatherDetails) 
    {
        const windy = document.getElementById('windy');
        const pressure = document.getElementById('pressure');
        const cloud = document.getElementById('cloud');
        const humidity = document.getElementById('humidity');
        const temp = document.getElementById('temp');
        const city = document.getElementById('city');
        const date = document.getElementById('date');
        const weatherIcon = document.getElementById('weather-icon');
        const weatherDescription = document.getElementById('weather-description');
        
        
        weatherIcon.src=`http://openweathermap.org/img/wn/${weatherDetails.weather[0].icon}@2x.png`;
        
        weatherDescription.innerText = weatherDetails.weather[0].main;
       
        date.innerText = new Date(weatherDetails.dt * 1000).toUTCString();
        city.innerText = weatherDetails.name;
        temp.innerText = Math.round(weatherDetails.main.temp) +'°C';
        cloud.innerText = weatherDetails.clouds.all + '%';
        pressure.innerText = weatherDetails.main.pressure + 'hPa';
        humidity.innerText = weatherDetails.main.humidity + '%';
        windy.innerText = weatherDetails.wind.speed + 'm/s';
  
        //console.log(weatherDetails);
    }
}
