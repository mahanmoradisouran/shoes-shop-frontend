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
    <li className="w-full p-5 grid grid-cols-4 md:grid-rows-2 grid-rows-5 md:h-52 h-96 border-b border-gray-200">
      <img
        className="md:col-span-1 col-span-5 row-start-1 md:row-end-2 max-h-72 max-w-[220px]"
        src={data.image}
        alt={data.name}
      />
      <h2 className="md:col-span-1 col-start-1 col-end-2 md:row-span-1 row-start-4 text-slate-700 pl-5 pt-5">
        {data.name}
      </h2>
      <ul className="md:col-start-2 col-end-3 col-start-1 md:row-span-1 row-start-5 pl-8 list-disc text-slate-600">
        {data.description.map((i) => (
          <li key={i._id}>{i.support}</li>
        ))}
      </ul>

      <p className="col-start-4 md:col-end-5 col-end-6 md:row-start-1 md:row-end-2 row-start-4 flex justify-end items-start">
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
      
      <div className="btn-group md:col-start-4 col-start-3 md:col-end-5 col-end-6 md:row-start-2 md:row-end-3 row-start-5 items-end justify-end">
        <button
          onClick={decrementProducts}
          className="btn btn-error btn-outline md:btn-md btn-sm"
        >
          {data.quantity > 1 ? (
            <AiOutlineMinus className="text-xs md:text-sm" />
          ) : (
            <FaTrash className="text-xs md:text-sm" />
          )}
        </button>
        <button className="btn btn-primary md:btn-md btn-sm">{data.quantity}</button>
        <button
          onClick={incrementProducts}
          className="btn btn-primary btn-outline md:btn-md btn-sm"
        >
          <AiOutlinePlus size={24} />
        </button>
      </div> 
    </li>
  );
};

export default CartListProduct;
