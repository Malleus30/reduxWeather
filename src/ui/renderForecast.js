

export function RenderForecast(props){
 
 const toggleState = props.toggleState;

 return(
     <div className={toggleState === 2 ? "active-page" : "page"}>
       <div className="display_left" id='showForecast'>
         <p className="text forecastHeader">weather.city</p>
                RENDERFORECAST
       </div>     
     </div>
 )
}