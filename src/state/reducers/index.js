import { combineReducers } from "redux";
import amountReducer from "./amountReducer";
import cartReducer from "./cartReducer";

export const reducers = combineReducers({
    amount: amountReducer,
    product:cartReducer
})