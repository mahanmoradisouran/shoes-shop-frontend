
const CartSummary = ({ cart }) => {
  return (
    <div className="w-full border border-gray-200 rounded-md p-5 sticky top-28">
      <h3 className="text-center text-slate-800 text-lg">Cart summary</h3>
      <div>
        <p className="text-slate-600 font-semibold">Products :</p>
        <ul>
          {cart.products.map((item) => (
            <li className="flex text-gray-500 my-2" key={item._id}>
              <h4 className="font-semibold">{item.name} </h4>
              <span className="mx-1 text-violet-600">
                price=${item.offPrice}
              </span>
            </li>
          ))}
        </ul>
        <p className="text-slate-600 font-semibold">Total price : {cart.total}</p>
      </div>
    </div>
  );
};

export default CartSummary;
