import React, { useState } from "react";
import InputRange from "react-input-range";

const ProductsFilter = () => {

  const [rangeValue , setRangeValue] = useState({
    min: 0,
    max: 1,
  })

  return (
    <div className="w-1/4 border border-gray-200 rounded-md flex flex-col items-center gap-5">
      <InputRange
        maxValue={20}
        minValue={0}
        formatLabel={(value) => `$ ${value}`}
        value={rangeValue}
        onChange={(value) => setRangeValue(value)}
        onChangeComplete={(value) => console.log(value)}
      />
    </div>
  );
};

export default ProductsFilter;
