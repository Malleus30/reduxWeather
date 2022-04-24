import { useSelector } from "react-redux";
import { timeTransform } from "../asyncActon/fetchWeather";

export function RenderDetails(props){
    
    const weather = props.weatherResponse;

    const toggleState = props.toggleState;
    if(weather.forecast[0]){
        return(
            <div className={toggleState === 2 ? "active-page" : "page"}>
                <div className="display_left" id='showDetails'>
                <p className="text showDetailsHeader">{weather.forecast[0].name}</p>
                <p className="text detailsTemp">Temperature: {weather.forecast[0].main.temp}°</p>
                <p className="text detailsFeels">Feels like: {weather.forecast[0].main.feels_like}°</p>
                <p className="text detailsWeather">Weather: {weather.forecast[0].weather.description}</p>
                <p className="text detailsSunrise">Sunrise: {timeTransform(weather.forecast[0].sys.sunrise)}</p>
                <p className="text detailsSunset">Sunset: {timeTransform(weather.forecast[0].sys.sunset)}pm</p>
               </div>
            </div>
            )
    }
}