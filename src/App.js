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

  const favCities = useSelector(state => state.favoredPlaces.cities);
  const lowListTasks = useSelector(state => state.customers.customers);
  const forecast = useSelector(state=> state.forecast);
  console.log(favCities);
  console.log(lowListTasks);  
  console.log(forecast);

  return(
    <div className="form">
         <button onClick={()=> dispatch(fetchCustomers())}>Get clients from base</button>
        <div className="inner_part">
            <SearchBar />
        <div className="content">

            <div className="left_part">

                            <RenderNow
                             toggleState={toggleState}
                              />
                          
                         
                
                        <RenderDetails 
                        toggleState={toggleState}
                        />

                 
                        <RenderForecast 
                        toggleState={toggleState}
                        />
              
                  <Tabs  toggleTab={setToggleState}/>
            </div>


            <div className="right_part">
                
                <div className="right_header">
                    <p className="text right_headerText">Added Locations</p>
                </div>
                <div className="display_right">
                  <FavoritePlaces list={favCities.map((city, index) =>(
                    <RemoveElement key={index} city={city.text} />
                  ))}/>
                </div>
            </div>

            
        </div>
       </div>
    </div>
  )
}

export default App;
