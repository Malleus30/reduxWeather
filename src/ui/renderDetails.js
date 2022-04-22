import { useSelector } from "react-redux";

export function RenderDetails(props){
    
    const weather = useSelector(state => state.forecast);
    const toggleState = props.toggleState;
    if(weather.forecast[0]){
        return(
            <div className={toggleState === 2 ? "active-page" : "page"}>
                <div className="display_left" id='showDetails'>
                <p className="text showDetailsHeader">{weather.forecast[0].city.name}</p>
                <p className="text detailsTemp">Temperature: {weather.forecast[0].list[0].main.temp}°</p>
                <p className="text detailsFeels">Feels like: {weather.forecast[0].list[0].main.feels_like}°</p>
                <p className="text detailsWeather">Weather: {weather.forecast[0].list[0].weather[0].main}</p>
                <p className="text detailsSunrise">Sunrise: {weather.forecast[0].city.sunrise}</p>
                <p className="text detailsSunset">Sunset: {weather.forecast[0].city.sunset}</p>
               </div>
            </div>
            )
    }
}