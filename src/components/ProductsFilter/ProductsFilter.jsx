import { useEffect, useState } from "react";
import Collapse from "../Collapse/Collapse";
import Select from "react-select";
import _ from "lodash";

const options = [
  { value: "", label: "--sort--" },
  { value: "desc", label: "Desc" },
  { value: "asc", label: "Adc" },
];

const ProductsFilter = ({ filteredProduct, setFilteredProduct, products }) => {
  const [filter, setFilter] = useState({
    sort: "",
    search: "",
    onlyAvailable: false,
    onlyDiscounted: false,
  });
  const { sort, search, onlyDiscounted, onlyAvailable } = filter;

  useEffect(() => {
    let result = [...filteredProduct];

    const sortProducts = (value) =>
      (result = _.orderBy(result, ["offPrice"], [value]));

    if (search.trim() === "") {
      result = [...products];
    } else {
      result = products.filter(
        (p) => p.name.toLowerCase().includes(search.toLowerCase()) === true
      );
    }

    if (sort.value !== "") sortProducts(sort.value);

    if (onlyAvailable) result = result.filter((p) => p.discount > 0);

    if (onlyDiscounted) result = result.filter((p) => p.offPrice !== p.price);

    setFilteredProduct(result);
  }, [sort, search, onlyDiscounted, onlyAvailable, products]);

  return (
    <div className="lg:w-1/4 w-full flex flex-col items-center gap-5">
      <Collapse label="Filters">
        <div className="form-control">
          <input
            type="text"
            value={search}
            onChange={(e) => setFilter({ ...filter, search: e.target.value })}
            className="input input-bordered w-full"
            placeholder="search in products..."
          />
        </div>
        <div className="form-control">
          <label className="label cursor-pointer">
            <span className="label-text">Only available items</span>
            <input
              type="checkbox"
              className="toggle toggle-primary"
              checked={onlyAvailable}
              onChange={() =>
                setFilter({ ...filter, onlyAvailable: !onlyAvailable })
              }
            />
          </label>
        </div>
        <div className="form-control">
          <label className="label cursor-pointer">
            <span className="label-text">Discounted items only</span>
            <input
              type="checkbox"
              className="toggle toggle-primary"
              checked={onlyDiscounted}
              onChange={() =>
                setFilter({ ...filter, onlyDiscounted: !onlyDiscounted })
              }
            />
          </label>
        </div>
      </Collapse>
      <Collapse label="Sort">
        <Select
          defaultValue={sort}
          onChange={(e) => setFilter({ ...filter, sort: e })}
          options={options}
        />
      </Collapse>
    </div>
  );
};

export default ProductsFilter;
