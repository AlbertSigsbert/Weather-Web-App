class Weather
{
    constructor()
    {
        this.key = 'dcbe646844bb84fe04616abd72c824f3';
        this.worldCitiesKey ='094f18524emsh2069b6781dfd8bap1b43a1jsn576ca3b694d0';
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

