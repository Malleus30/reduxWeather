import { favCitiesReducer } from "./favoredCitiesReducer";
import { customerReducer } from "./customerReducer";
import { createStore, combineReducers, applyMiddleware} from "redux";
import {composeWithDevTools} from 'redux-devtools-extension';
import thunk from'redux-thunk';
import {weatherReducer} from'./weatherReducer';

const rootReducer = combineReducers({
    favoredPlaces:favCitiesReducer,
    customers:customerReducer,
    forecast:weatherReducer
})

export const store = createStore(rootReducer, composeWithDevTools(applyMiddleware(thunk)));
