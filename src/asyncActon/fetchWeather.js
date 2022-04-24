import { getForecastAction } from "../store/weatherReducer";


/*

export const fetchWeather = (cityName) => {

    const SERVER_URL = 'https://api.openweathermap.org/data/2.5/weather';                                         
    const API_KEY = 'd54171d8f8672f7f9694fda045ed8d16';
    const URL = `${SERVER_URL}?q=${cityName}&appid=${API_KEY}`;
    const FORECAST_SERVER_URL = 'https://api.openweathermap.org/data/2.5/forecast'
    const FORECAST_URL = `${FORECAST_SERVER_URL}?q=${cityName}&appid=${API_KEY}&units=metric`;
 
   
    
 
    return dispatch => {
        fetch(FORECAST_URL)
  .then(response => response.json())
  .then(json => dispatch(getForecastAction(json)))
    } 
}

async function fetchRequest(url){
    return fetch(url)
     .then((response) => {
       return  response.json();
     })
     .catch(error => alert(error.message))
  }


  */

  async function fetchRequest(url) {
    return fetch(url).then((response) =>
      response.json()
    );
  }

 
   // dispatch(fetchWeather(e.currentTarget.value));   

      export async function fetchWeather(cityName) {
          
        const SERVER_URL = 'https://api.openweathermap.org/data/2.5/weather';                                         
        const API_KEY = 'd54171d8f8672f7f9694fda045ed8d16';
        const URL = `${SERVER_URL}?q=${cityName}&appid=${API_KEY}&units=metric`;
        const FORECAST_SERVER_URL = 'https://api.openweathermap.org/data/2.5/forecast'
        const FORECAST_URL = `${FORECAST_SERVER_URL}?q=${cityName}&appid=${API_KEY}&units=metric`;
     

          const data = await fetchRequest(URL);
        
          data.forecast = await fetchRequest(FORECAST_URL);
          
         
          return data;
      }

      export function searchWeather(city) {
        return async (dispatch) =>
          fetchWeather(city).then((json) => {
            dispatch(getForecastAction(json));
          });
        }

        export function timeTransform(data){

          const date = new Date(data);
          const hours = date.getHours();
          let minutes = date.getMinutes();
          minutes = (minutes<10) ? '0'+minutes: minutes;
          return `${hours}:${minutes}`;
        }
       

        
  