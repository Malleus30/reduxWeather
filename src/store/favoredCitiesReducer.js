

const defaultState = {
    cities:[]
}


export const ADD_FAV_CITY = 'ADD_FAV_CITY';
export const REMOVE_FAV_CITY ='REMOVE_FAV_CITY';


export const favCitiesReducer = (state = defaultState, action) => {

    switch(action.type){

        case ADD_FAV_CITY:
        return{
          ...state, cities:[...state.cities, action.payload]
        }
        
        case REMOVE_FAV_CITY:
          return{
            ...state, cities: state.cities.filter(city => city.id !== action.payload.id)
          }

        default : return state;
    }
}

export const addFavCityAction = (payload) => ({type: ADD_FAV_CITY, payload});
export const removeFavCityAction = (payload) => ({type: REMOVE_FAV_CITY, payload});