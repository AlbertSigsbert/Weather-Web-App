class Weather
{
    constructor()
    {
        this.key = 'dcbe646844bb84fe04616abd72c824f3';
    }

    async getWeatherDetails(locationName)
    {
        try
        {
            const weatherDetails = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${locationName}&appid=${this.key}`)
            
            const output = await weatherDetails.json();
            return output
            // console.log(output);

        }
        catch(e)
        {
            return e;
        }
        
    }
}
