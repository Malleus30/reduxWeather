import { useState } from 'react';
import './App.css';
import {Tabs} from'./ui/tabs';
import {RenderNow} from'./ui/renderNow';
import {RenderDetails} from'./ui/renderDetails';
import {RenderForecast} from'./ui/renderForecast';
import {SearchBar} from'./ui/searchBar';
import {useDispatch, useSelector} from'react-redux';
import {addFavCityAction} from './store/favoredCitiesReducer'
import { FavoritePlaces } from './ui/favoredPlaces';
import { RemoveElement } from './ui/removeElement';
import {fetchCustomers} from'./asyncActon/customer';

function App(){

  const [toggleState, setToggleState] = useState(1); 
  const dispatch = useDispatch();
  
  const {favoredPlaces,  weatherData, customers} = useSelector(state => state);

 console.log(favoredPlaces.cities);
 // console.log(customers);  
  //console.log(weatherData); 
  const weatherResponse = weatherData;

  return(
    <div className="form">
         <button onClick={()=> dispatch(fetchCustomers())}>Get clients from base</button>
        <div className="inner_part">
            <SearchBar />
        <div className="content">

            <div className="left_part">

                            <RenderNow
                             toggleState={toggleState}
                             weatherResponse={weatherResponse}
                              />
                          
                         
                
                        <RenderDetails 
                        weatherResponse={weatherResponse}
                        toggleState={toggleState}
                        /> 

                 
                        <RenderForecast 
                         weatherResponse={weatherResponse}
                        toggleState={toggleState}
                        />
              
                  <Tabs  toggleTab={setToggleState}/>
            </div>


            <div className="right_part">
                
                <div className="right_header">
                    <p className="text right_headerText">Added Locations</p>
                </div>
                <div className="display_right">
                  <FavoritePlaces list={favoredPlaces?.cities?.map((city, index) =>(
                    <RemoveElement key={index} city={city}  dispatch={dispatch} favCities={favoredPlaces.cities}/>
                  ))}/> 
                </div>
            </div>

            
        </div>
       </div>
    </div>
  )
}

export default App;
