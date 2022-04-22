const defaultState = {
     forecast:[]
  }
  
  const GET_FORECAST = 'GET_FORECAST';
  
  
  export const weatherReducer = (state = defaultState, action) =>{
    switch(action.type){
  
      case GET_FORECAST:
        return{
          ...state, forecast:[action.payload]
        }
  
      
      
      default: return state;
    }
  }
  
  export const getForecastAction = (payload) => ({type:GET_FORECAST, payload});

