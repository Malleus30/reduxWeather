export function RenderForecastItem (weather){

    const date = weather.dt_txt;
    const time = weather.dt_txt;
    const temp = weather.main.temp;
    const feels = weather.main.feels.like;
    const description = weather.weather[0].main;
    //const picture = weather.pic;
        return(
            <div className="weather_window twelve">
            <div className="date smalText"><p className="date12">{date}</p></div>
            <div className="time smalText"><p className="time12">{time}</p></div>
            <div className="temperature smalText"><p className="temperature12">Temperature:{temp}°</p></div>
            <div className="feelsLike smalText"><p className="feelsLike12">Feels like:{feels}°</p></div>
            <div className="pictureHeader smalText"><p className="pictureHeader12">{description}</p></div>
            <div className="picture"><img className="forecastPicture12" src={'picture'} alt={'text'}/></div>
        </div>
        )
    
}