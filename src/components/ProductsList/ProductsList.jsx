import Product from "../Product/Product";

const ProductLists = ({ products, setProducts }) => {
  return (
    <div className="w-3/4 grid grid-cols-2 grid-rows-2 gap-y-5 gap-x-3">
      {products.map((p) => (
        <Product key={p._id} data={p} />
      ))}
    </div>
  );
};

export default ProductLists;
