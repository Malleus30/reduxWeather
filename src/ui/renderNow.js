import { useDispatch} from "react-redux";
import { addFavCityAction } from "../store/favoredCitiesReducer";
import {STORAGE} from'../storage/storage';

export function RenderNow(props){

  
   const {weatherResponse} = props;
   const ICON= "https://openweathermap.org/img/wn";
   const favCities = props.favCities;

  let pic= undefined;
  
   if(weatherResponse.forecast[0]){
     pic =`${ICON}/${weatherResponse.forecast[0].weather[0].icon.slice(0, 2)}n@4x.png`;
   }
   const dispatch=useDispatch();
   
   const onLike = () =>{
         if(!weatherResponse.forecast[0].name) return;
          const city = weatherResponse.forecast[0].name;
          const  set = new Set(STORAGE.getFavoredFromStorage()) || new Set();
          set.add(city);
          STORAGE.setFavoredToStorage([...set]);
      dispatch( addFavCityAction(set)); 
   }
    
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