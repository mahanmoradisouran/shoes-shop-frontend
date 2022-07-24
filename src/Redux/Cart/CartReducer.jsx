import { ADD_ITEM_TO_CART, REMOVE_ITEM_FROM_CART } from "./CartTypes";


const initialState = {
  total: 0,
  products: [],
};

const cartReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_ITEM_TO_CART:
      return {
        total: state.total + action.payload.offPrice,
        products: [...state.products, action.payload],
      };
    case REMOVE_ITEM_FROM_CART:
      return state;
    default:
      return state;
  }
};

export default cartReducer;
