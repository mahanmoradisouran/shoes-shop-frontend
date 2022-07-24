const CartList = ({ cart }) => {
  return (
    <div className="w-full border border-gray-200 rounded-md py-5">
      <ul>
        {cart.products.map((p) => (
          <li
            className="w-full p-5 grid grid-cols-4 grid-rows-2 h-52 border-b border-gray-200"
            key={p._id}
          >
            <img className="col-span-1 row-span-2" src={p.image} alt={p.name} />
            <h2 className="col-span-1 row-span-1 text-slate-700 pl-5 pt-5">
              {p.name}
            </h2>
            <ul className="col-start-2 col-end-3 row-span-1 pl-8 list-disc text-slate-600">
              {p.description.map((i) => (
                <li>{i.support}</li>
              ))}
            </ul>
            <p className="col-start-4 col-end-5 row-start-2 row-end-3 flex justify-end items-end">
              {p.offPrice === p.price ? (
                "$ " + p.price
              ) : (
                <>
                  <span className="line-through decoration-red-400 decoration-2 mr-1">
                    ${p.price}
                  </span>
                  <span className="text-slate-600 text-lg">${p.offPrice}</span>
                </>
              )}
            </p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default CartList;
