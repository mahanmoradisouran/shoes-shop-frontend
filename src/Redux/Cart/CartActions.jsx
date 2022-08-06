import { ADD_ITEM_TO_CART, REMOVE_ITEM_FROM_CART } from "./CartTypes";

export function AddItemToCart(product) {
  return {
    type: ADD_ITEM_TO_CART,
    payload: product,
  };
}

export function RemoveItemFromCart(productId) {
  return {
    type: REMOVE_ITEM_FROM_CART,
    payload: productId,
  };
}
