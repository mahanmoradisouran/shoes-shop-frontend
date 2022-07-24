import Product from "../Product/Product";
import ProductSkeleton from "../Skeletons/ProductSkeleton";
import { TbFaceIdError } from "react-icons/tb";const ProductLists = ({ products, setProducts, loading, error }) => {
  return (
    <div className="w-3/4 grid grid-cols-2 grid-rows-2 gap-y-5 gap-x-3">
      {loading && (
        <>
          <ProductSkeleton />
          <ProductSkeleton />
          <ProductSkeleton />
          <ProductSkeleton />
          <ProductSkeleton />
          <ProductSkeleton />
        </>
      )}
      {error && (
        <div className="w-full row-span-2 col-span-2 grid place-items-center">
          <TbFaceIdError color="red" size={150}/>
          <h3 className="text-red-400">{error}</h3>
        </div>
      )}
      {!loading && !error && products.map((p) => <Product key={p._id} data={p} />)}
    </div>
  );
};

export default ProductLists;
