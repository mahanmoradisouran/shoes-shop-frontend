import { TbFaceIdError } from "react-icons/tb";
import { useEffect, useState } from "react";
import ProductsFilter from "../components/ProductsFilter/ProductsFilter";
import ProductsList from "../components/ProductsList/ProductsList";
import { getAllProducts } from "../services/httpServices";

const StorePage = () => {
  const [products, setProducts] = useState([]);
  const [filteredProduct, setFilteredProduct] = useState([]);
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  useEffect(() => fetchProducts(), []);

  const fetchProducts = () => {
    setLoading(true);
    getAllProducts()
      .then(({ data }) => {
        setLoading(false);
        setProducts(data);
        setFilteredProduct(data);
      })
      .catch(({ message }) => {
        setLoading(false);
        setError(message);
      });
  };

  if (error) {
    return (
      <div className="w-full row-span-2 col-span-2 grid place-items-center">
        <TbFaceIdError color="red" size={150} />
        <h3 className="text-red-400">{error}</h3>
      </div>
    );
  }

  return (
    <div className="w-full flex flex-col lg:flex-row gap-5 py-10 ">
      <ProductsFilter
        filteredProduct={filteredProduct}
        setFilteredProduct={setFilteredProduct}
        products={products}
      />
      <ProductsList
        products={filteredProduct}
        loading={loading}
        error={error}
      />
    </div>
  );
};

export default StorePage;
