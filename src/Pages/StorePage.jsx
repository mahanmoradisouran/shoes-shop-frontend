import { useEffect, useState } from "react";
import ProductsFilter from "../components/ProductsFilter/ProductsFilter";
import ProductsList from "../components/ProductsList/ProductsList";
import { getAllProducts } from "../services/httpServices";

const StorePage = () => {
  const [products, setProducts] = useState([]);
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  useEffect(() => fetchProducts(), []);

  const fetchProducts = () => {
    setLoading(true);
    getAllProducts()
      .then(({ data }) => {
        setLoading(false);
        setProducts(data);
      })
      .catch(({ message }) => {
        setLoading(false);
        setError(message);
      });
  };

  return (
    <div className="w-full flex py-10 ">
      <ProductsFilter />
      <ProductsList
        products={products}
        setProducts={setProducts}
        loading={loading}
        error={error}
      />
    </div>
  );
};

export default StorePage;
