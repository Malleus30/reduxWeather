import { useDispatch, useSelector } from "react-redux";
import { addFavCityAction } from "../store/favoredCitiesReducer";

export function RenderNow(props){

  
   const {weatherResponse} = props;
   const ICON= "https://openweathermap.org/img/wn";
  
  let pic= undefined;
  
   if(weatherResponse.forecast[0]){
     pic =`${ICON}/${weatherResponse.forecast[0].weather[0].icon.slice(0, 2)}n@4x.png`;
   }
   const dispatch=useDispatch();
   
   const onLike = () =>{
         if(!weatherResponse.forecast[0].name) return;
          const city = {
          text: weatherResponse.forecast[0].name,
          id: Date.now()
        }
      dispatch( addFavCityAction(city)); 
   }
    console.log(weatherResponse.forecast[0]);
    const toggleState = props.toggleState;
    
    if(weatherResponse.forecast[0]){
      return (
        <div className={toggleState === 1 ? "active-page" : "page"}>
          <div className="display_left" id='showNow'>
                 <div className="forPosition">
                 <div className="temp"><p className='bigNumber'>{weatherResponse.forecast[0].main.temp}°</p></div>
                 <div className="bigCloudPicture"><img className='bigCloudIcon' src={pic} alt={'big'} /></div>
                 <div className="cityName"><p className="text smalSityName"></p>{weatherResponse.forecast[0].name}</div>
                 <div onClick={ () => onLike()} className="heart_picture"><img src="./img/heart.svg" alt="heart" /></div>
             </div>
           </div>
        </div> 
      )
    }
  }