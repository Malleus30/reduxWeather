import { useDispatch, useSelector } from "react-redux";
import { addFavCityAction } from "../store/favoredCitiesReducer";

export function RenderNow(props){
  
   const weather = useSelector(state => state.forecast);
   const dispatch=useDispatch();
   const onLike = () =>{
        // if(!weather.forecast[0].city.name) return;
          const city = {
          text: weather.forecast[0].city.name,
          id: Date.now()
        }
      dispatch( addFavCityAction(city));  
   }
    const toggleState = props.toggleState;
    if(weather.forecast[0]){
      return (
        <div className={toggleState === 1 ? "active-page" : "page"}>
          <div className="display_left" id='showNow'>
                 <div className="forPosition">
                 <div className="temp"><p className='bigNumber'>{weather.forecast[0].list[0].main.temp}</p></div>
                 <div className="bigCloudPicture"><img className='bigCloudIcon' src={"./img/big_cloud.svg" } alt={'big'} /></div>
                 <div className="cityName"><p className="text smalSityName"></p>{weather.forecast[0].city.name}</div>
                 <div onClick={ () => onLike()} className="heart_picture"><img src="./img/heart.svg" alt="heart" /></div>
             </div>
           </div>
        </div> 
       )
    }
  }