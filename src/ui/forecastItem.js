export function RenderForecastItem (forecast){

    const ICON= "https://openweathermap.org/img/wn";
    console.log(forecast.forecast)
    const date = forecast.forecast.dt_txt.slice(0,10);
    const time = forecast.forecast.dt_txt.slice(10);
    const temp = forecast.forecast.main.temp;
    const feels = forecast.forecast.main.feels_like;
    const description = forecast.forecast.weather[0].main;
    const picture =  `${ICON}/${forecast.forecast.weather[0].icon}.png`;
        return(
            <div className="weather_window twelve">
            <div className="date smalText"><p className="date12">{date}</p></div>
            <div className="time smalText"><p className="time12">{time}</p></div>
            <div className="temperature smalText"><p className="temperature12">Temperature:{temp}°</p></div>
            <div className="feelsLike smalText"><p className="feelsLike12">Feels like:{feels}°</p></div>
            <div className="pictureHeader smalText"><p className="pictureHeader12">{description}</p></div>
            <div className="picture"><img className="forecastPicture12" src={picture} alt={'text'}/></div>
        </div>
        )
    
}