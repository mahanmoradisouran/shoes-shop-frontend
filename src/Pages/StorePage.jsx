import { useEffect, useState } from "react";
import ProductsFilter from "../components/ProductsFilter/ProductsFilter";
import ProductsList from "../components/ProductsList/ProductsList";
import { getAllProducts } from "../services/httpServices";

const StorePage = () => {
  const [products, setProducts] = useState([]);
  const [error, setError] = useState("");

  useEffect(() => {
    getAllProducts()
      .then(({ data }) => setProducts(data))
      .catch((error) => setError(error));
  }, []);

  return (
    <div className="w-full flex py-5 ">
      <ProductsFilter />
      <ProductsList products={products} setProducts={setProducts} />
    </div>
  );
};

export default StorePage;
