import CartListProduct from "../CartListProduct/CartListProduct";

const CartList = ({ cart }) => {
  return (
    <div className="w-full border border-gray-200 rounded-md py-5">
      <ul className="flex flex-col">
        {cart.products.map((product) => (
          <CartListProduct key={product._id} data={product} />
        ))}
      </ul>
    </div>
  );
};

export default CartList;
