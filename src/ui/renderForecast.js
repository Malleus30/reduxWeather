
import { RenderForecastItem } from "./forecastItem";
import { useSelector } from "react-redux";

export function RenderForecast(props){

 const weather = useSelector(state => state.forecast);
 const toggleState = props.toggleState;
 
 if(weather.forecast[0]){
  return(
    <div className={toggleState === 3 ? "active-page" : "page"}>
      <div className="display_left" id='showForecast'>
        <p className="text forecastHeader">weather.city</p>
             {/*weather.forecast[0].list.map((item, index) => (
               <RenderForecastItem key={index} weather={item}/>
             ))*/} 
      </div>     
    </div>
)
 } else{
   return(
    <div className={toggleState === 3 ? "active-page" : "page"}>
    <div className="display_left" id='showForecast'>
      <p className="text forecastHeader"></p>
    </div>     
  </div>
   )
 }
 
}