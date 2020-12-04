import { createStore } from "redux";
import { allReducers } from "../reducers/ReducerIndex";

export const store = createStore(allReducers);

