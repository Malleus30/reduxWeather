import { removeFavCityAction } from "../store/favoredCitiesReducer";
import { STORAGE } from "../storage/storage";
import { searchWeather } from "../asyncActon/fetchWeather";

export function RemoveElement(props) {
    const city = props.city;
    const dispatch = props.dispatch;
  

    function clickHandler(event) {
     //  const tag = event.target.parentNode.firstChild.textContent;
       console.log(city);
       const set = new Set(STORAGE.getFavoredFromStorage());
       set.delete(city);
       STORAGE.setFavoredToStorage([...set]);
       dispatch(removeFavCityAction(set));
      }

     const getWeather = () => {
       dispatch(searchWeather(city))
     }
      

      return (
    <li className="faforedPlace">    
       <p className="text loadFavoriteOne" onClick={() => getWeather()} >{city}</p>
       <div className="close" onClick={() => clickHandler()}>
        <span className="line_rotate45"></span>
        <span className="line_rotate45"></span>
       </div>
    </li>
      );
}