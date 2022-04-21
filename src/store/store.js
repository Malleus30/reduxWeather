import { favCitiesReducer } from "./favoredCitiesReducer";
import { lowListReducer } from "./lowList";
import { createStore, combineReducers, applyMiddleware} from "redux";
import {composeWithDevTools} from 'redux-devtools-extension';
import thunk from'redux-thunk';

const rootReducer = combineReducers({
    favoredPlaces:favCitiesReducer,
    low:lowListReducer
})

export const store = createStore(rootReducer, composeWithDevTools(applyMiddleware(thunk)));
