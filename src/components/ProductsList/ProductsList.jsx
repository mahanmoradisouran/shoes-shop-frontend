import Product from "../Product/Product";
import ProductSkeleton from "../Skeletons/ProductSkeleton";

const ProductLists = ({ products, loading, error }) => {
  return (
    <div className="lg:w-3/4 w-full grid lg:grid-cols-2 lg:grid-rows-2 gap-y-5 gap-x-3">
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
      {!loading &&
        !error &&
        products.map((p) => <Product key={p._id} data={p} />)}
    </div>
  );
};

export default ProductLists;
