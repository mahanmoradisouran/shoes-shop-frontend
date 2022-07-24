import React, { useEffect, useState } from "react";
import { RiShoppingCartFill } from "react-icons/ri";
import { useDispatch, useSelector } from "react-redux";
import { ADD_ITEM_TO_CART } from "../../Redux/Cart/CartTypes";
import { BsFillBagCheckFill } from "react-icons/bs";

const Product = ({ data }) => {
  const cart = useSelector((state) => state.cart);
  const dispatch = useDispatch();
  const [isInCart, setIsInCart] = useState(false);

  const { image, name, price, offPrice, discount, _id } = data;
  const offValue = ((price - offPrice) / price).toFixed(2) * 100;

  useEffect(() => {
    const productsId = cart.products.map((i) => i._id);
    const result = productsId.includes(_id);
    setIsInCart(result);
  }, []);

  const addProductToCart = (product) => {
    dispatch({ type: ADD_ITEM_TO_CART, payload: product });
    setIsInCart(true);
  };

  return (
    <div
      className={`hover:shadow-md transition-all duration-200 card card-side border border-gray-200 px-2 relative overflow-visible ${
        !discount && "opacity-50 "
      }`}
    >
      <figure className="w-1/4 h-40 flex justify-center items-center">
        <img src={image} alt="Movie" />
      </figure>
      <div className="card-body w-3/4">
        <h2 className="card-title text-slate-800 font-bold">{name}</h2>
        {offPrice === price && (
          <p className="text-slate-600 text-xl font-semibold">${price}</p>
        )}
        {offPrice !== price && (
          <>
            <p className="text-slate-600 line-through decoration-red-400 decoration-2 relative">
              ${price}
              <span className="no-underline top-5 -left-1 absolute text-xl font-semibold">
                ${offPrice}
              </span>
            </p>
            <span className="rotate-12 bg-violet-600 w-12 text-center rounded-lg text-slate-100 absolute -top-2 -right-2">
              {offValue}%
            </span>
          </>
        )}
        <div className="card-actions justify-end z-50">
          {!discount && <span className="text-red-400 pt-3">unavailable</span>}
          <button
            disabled={!discount && "disabled"}
            className={`transition-all duration-300 btn btn-square text-slate-50 ${
              discount && !isInCart
                ? "bg-gradient-to-t from-violet-600 to-violet-500"
                : "bg-green-500 hover:bg-green-600"
            }
            `}
            onClick={() => addProductToCart(data)}
          >
            {isInCart && <BsFillBagCheckFill size={24} />}
            {!isInCart && <RiShoppingCartFill size={24} />}
          </button>
        </div>
      </div>
    </div>
  );
};

export default Product;
