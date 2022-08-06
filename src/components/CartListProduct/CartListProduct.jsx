import { AiOutlineMinus, AiOutlinePlus } from "react-icons/ai";
import { FaTrash } from "react-icons/fa";
import { useDispatch } from "react-redux";
import {
  AddItemToCart,
  RemoveItemFromCart,
} from "../../Redux/Cart/CartActions";

const CartListProduct = ({ data }) => {
  const dispatch = useDispatch();

  const incrementProducts = () => dispatch(AddItemToCart(data));
  const decrementProducts = () => dispatch(RemoveItemFromCart(data));

  return (
    <li className="w-full p-5 grid grid-cols-4 grid-rows-2 h-52 border-b border-gray-200">
      <img className="col-span-1 row-span-2" src={data.image} alt={data.name} />
      <h2 className="col-span-1 row-span-1 text-slate-700 pl-5 pt-5">
        {data.name}
      </h2>
      <ul className="col-start-2 col-end-3 row-span-1 pl-8 list-disc text-slate-600">
        {data.description.map((i) => (
          <li key={i._id}>{i.support}</li>
        ))}
      </ul>
      <p className="col-start-4 col-end-5 row-start-1 row-end-2 flex justify-end items-start">
        {data.offPrice === data.price ? (
          "$ " + data.price
        ) : (
          <>
            <span className="line-through decoration-red-400 decoration-2 mr-1">
              ${data.price}
            </span>
            <span className="text-slate-600 text-lg">${data.offPrice}</span>
          </>
        )}
      </p>
      <div className="btn-group col-start-4 col-end-5 row-start-2 row-end-3 items-end justify-end">
        <button
          onClick={decrementProducts}
          className="btn btn-error btn-outline"
        >
          {data.quantity > 1 ? (
            <AiOutlineMinus size={24} />
          ) : (
            <FaTrash size={20} />
          )}
        </button>
        <button className="btn btn-primary">{data.quantity}</button>
        <button
          onClick={incrementProducts}
          className="btn btn-primary btn-outline"
        >
          <AiOutlinePlus size={24} />
        </button>
      </div>
    </li>
  );
};

export default CartListProduct;
