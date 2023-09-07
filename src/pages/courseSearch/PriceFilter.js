import React, { useState } from "react";
import { Button } from "react-bootstrap";
import Form from "react-bootstrap/Form";

const PriceFilter = ({ setPriceParam, passedPrice }) => {
  console.log(passedPrice);

  const [price, setPrice] = useState(passedPrice || 10);

  const handlePriceChange = (event) => {
    setPrice(event.target.value);
  };

  const submitPriceHandler = () => {
    setPriceParam(price);
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
      <div>
        <Button onClick={submitPriceHandler} variant="success" size="sm">
          Search By Price
        </Button>
      </div>
    </div>
  );
};

export default PriceFilter;
