import React from "react";
import { RiShoppingCartFill } from "react-icons/ri";

const Product = ({ data }) => {
  const { image, name, price, offPrice, discount } = data;

  const offValue = ((price - offPrice) / price).toFixed(2) * 100;

  return (
    <div
      className={`card card-side border border-gray-200 px-2 relative overflow-visible ${
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
            <span class="rotate-12 bg-violet-600 w-12 text-center rounded-lg text-slate-100 absolute -top-2 -right-2">
              {offValue}%
            </span>
          </>
        )}
        <div className="card-actions justify-end">
          {!discount && <spna className="text-red-400 pt-3">unavailable</spna>}
          <button
            disabled={!discount && "disabled"}
            className={`btn btn-square text-slate-50 ${
              discount && "bg-gradient-to-t from-violet-600 to-violet-500"
            }`}
          >
            <RiShoppingCartFill size={24} />
          </button>
        </div>
      </div>
    </div>
  );
};

export default Product;
