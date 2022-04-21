import { useState } from "react";
import {STORAGE} from '../storage/storage';
import  {addFavCityAction} from '../store/favoredCitiesReducer'
import { useDispatch, useSelector } from 'react-redux';

export function SearchBar(props){
    
    const dispatch = useDispatch();
    const [userInput, setUserInput] = useState("");
  
    const handleChange = (e) => {
      setUserInput(e.currentTarget.value);
    };
  
    const handleSubmit = (e) => {

      e.preventDefault();
      alert(e.currentTarget.value);
      //getWeather(e.currentTarget.value);
      if(e.currentTarget.value ==="") return;
        const city = {
          text: e.currentTarget.value,
          id: Date.now()
        }
      dispatch( addFavCityAction(city));  
      setUserInput("");
      STORAGE.setLastLocation(e.currentTarget.value);
    };
    

    const handleKeyPress = (e) => {
      if (e.key === "Enter") {
        handleSubmit(e);
      }
    };
    return(
      <div className="search_form">
      <form onSubmit={handleSubmit}>
    <input id='inp' type="text" placeholder="" onKeyDown={handleKeyPress}  onChange={handleChange} value={userInput}/>
    </form>
    <div className="scopePicture"><img alt='some value' src="./img/scope.svg"/></div>
  </div>
    )  
   }