import cartReducer from "./Cart/CartReducer";
import { combineReducers } from "@reduxjs/toolkit";


const rootReducer = combineReducers({
  cart: cartReducer,
});

export default rootReducer;
