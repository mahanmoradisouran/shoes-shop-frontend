import cartReducer from "./Cart/CartReducer";
import { combineReducers } from "@reduxjs/toolkit";
import authReducer from "./Auth/AuthReducer";

const rootReducer = combineReducers({
  cart: cartReducer,
  auth: authReducer,
});

export default rootReducer;
