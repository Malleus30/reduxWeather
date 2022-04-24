
import { RenderForecastItem } from "./forecastItem";
import { useSelector } from "react-redux";

export function RenderForecast(props){

 const weather = props.weatherResponse;
 const toggleState = props.toggleState;
 
  
  return(
    <div className={toggleState === 3 ? "active-page" : "page"}>
      <div className="display_left" id='showForecast'>
        <p className="text forecastHeader">{weather?.forecast[0]?.name}</p>
             {weather?.forecast[0]?.forecast?.list?.map((item, index) => (
               <RenderForecastItem key={index} forecast={item}/>
             ))} 
      </div>     
    </div>
)

}