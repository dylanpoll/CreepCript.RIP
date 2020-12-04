import { loginReducer } from "./IsLogged";
import { CounterReducer } from "./CounterReducer";
import { combineReducers } from "redux";

export const allReducers = combineReducers({
    login: loginReducer,
    counter : CounterReducer
})

//add a comma is adding in more later