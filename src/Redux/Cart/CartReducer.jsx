import { ADD_ITEM_TO_CART, REMOVE_ITEM_FROM_CART } from "./CartTypes";

const initialState = {
  total: 0,
  products: [],
};

const cartReducer = (state = initialState, action) => {
  let updatedState = { ...state };
  switch (action.type) {
    case ADD_ITEM_TO_CART: {
      const updatedItemIndex = updatedState.products.findIndex(
        (item) => item._id === action.payload._id
      );

      if (updatedItemIndex < 0) {
        updatedState = {
          total: state.total + action.payload.offPrice,
          products: [...state.products, { ...action.payload, quantity: 1 }],
        };
      }
      if (updatedItemIndex > -1) {
        const products = [...state.products];
        products[updatedItemIndex] = {
          ...products[updatedItemIndex],
          quantity: products[updatedItemIndex].quantity + 1,
        };
        updatedState = {
          total: state.total + action.payload.offPrice,
          products: [...products],
        };
      }

      return updatedState;
    }
    case REMOVE_ITEM_FROM_CART: {
      const updatedItemIndex = updatedState.products.findIndex(
        (item) => item._id === action.payload._id
      );
      const productQuantity = updatedState.products[updatedItemIndex].quantity;
      if (productQuantity === 1) {
        const updatedProducts = updatedState.products.filter(
          (product) => product._id !== action.payload._id
        );
        updatedState = {
          total: state.total - action.payload.offPrice,
          products: updatedProducts,
        };
      } else {
        const updatedProducts = [...state.products];
        updatedProducts[updatedItemIndex] = {
          ...updatedProducts[updatedItemIndex],
          quantity: updatedProducts[updatedItemIndex].quantity - 1,
        };
        updatedState = {
          total: state.total - action.payload.offPrice,
          products: updatedProducts,
        };
      }
      return updatedState;
    }
    default:
      return state;
  }
};

export default cartReducer;
