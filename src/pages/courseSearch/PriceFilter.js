import React, { useState } from "react";
import Form from "react-bootstrap/Form";

const PriceFilter = () => {
  const [price, setPrice] = useState(10);

  const handlePriceChange = (event) => {
    setPrice(event.target.value);
  };

  return (
    <div className="mt-3">
      <h3>Course Price</h3>
      <p>Price: ${price}</p>
      <Form.Range
        value={price}
        onChange={handlePriceChange}
        min={0}
        max={100}
        className="w-50"
      />
    </div>
  );
};

export default PriceFilter;
