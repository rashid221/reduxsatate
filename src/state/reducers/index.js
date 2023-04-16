import { combineReducers } from "redux";
import amountReducer from "./amountReducer";
import cartReducer from "./cartReducer";
import productReducer from "./productReducer";
import { addReducer } from "./productReducer";


export const reducers = combineReducers({
    amount: amountReducer,
    product:cartReducer,
    addValue:productReducer,
    getValue:addReducer
})