import React, { useState } from "react";
import { Form } from "react-bootstrap";
import Rating from "../../components/SharedComponents/Rating";

const StarFilter = ({ setRatingParam, averageRating }) => {
  const [selectedStar, setSelectedStar] = useState(averageRating || null);

  const handleCheckBoxChange = (value) => {
    setSelectedStar(value);
    setRatingParam(value);
  };

  return (
    <div>
      <h3>Ratings</h3>
      <Form>
        <Form.Check
          type="switch"
          id="custom-switch-1"
          label={<Rating value={4.5} text="4.5 & up" />}
          onChange={() => handleCheckBoxChange(4.5)}
          checked={selectedStar === 4.5}
        />
        <Form.Check
          type="switch"
          id="custom-switch-2"
          label={<Rating value={4} text="4.0 & up" />}
          onChange={() => handleCheckBoxChange(4)}
          checked={selectedStar === 4}
        />
        <Form.Check
          type="switch"
          id="custom-switch-3"
          label={<Rating value={3.5} text="3.5 & up" />}
          onChange={() => handleCheckBoxChange(3.5)}
          checked={selectedStar === 3.5}
        />
        <Form.Check
          type="switch"
          id="custom-switch-4"
          label={<Rating value={3} text="3.0 & up" />}
          onChange={() => handleCheckBoxChange(3)}
          checked={selectedStar === 3}
        />
      </Form>
    </div>
  );
};

export default StarFilter;
