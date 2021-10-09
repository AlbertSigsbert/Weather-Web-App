import WEATHER_API_KEY from "./apikey.js";

export default  class Weather
{
    constructor()
    {
        this.key = WEATHER_API_KEY;
        
    }

    async getWeatherDetails(locationName)
    {
        try
        {
            const weatherDetails = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${locationName}&units=metric&appid=${this.key}`)
           
            const output = await weatherDetails.json();
            return output;
            

        }
        catch(e)
        {
            return e;
        }
        
    }

}


