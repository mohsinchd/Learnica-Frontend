import React, { useState } from "react";
import { Form } from "react-bootstrap";

const CategoryFilter = ({ setCategoryParam, category }) => {
  const [selectedCategory, setSelectedCategory] = useState(category || null);
  const handleSelectedCategory = (value) => {
    setSelectedCategory(value);
    setCategoryParam(value);
  };

  return (
    <div className="mt-3">
      <h4>Category</h4>
      <Form>
        <Form.Check
          type="switch"
          id="custom-development"
          label="Development"
          onChange={() => handleSelectedCategory("Development")}
          checked={selectedCategory === "Development"}
        />
        <Form.Check
          type="switch"
          id="custom-business"
          label="Business"
          onChange={() => handleSelectedCategory("Business")}
          checked={selectedCategory === "Business"}
        />
        <Form.Check
          type="switch"
          id="custom-IT"
          label="IT"
          onChange={() => handleSelectedCategory("IT")}
          checked={selectedCategory === "IT"}
        />
        <Form.Check
          type="switch"
          id="custom-music"
          label="Music"
          onChange={() => handleSelectedCategory("MUSIC")}
          checked={selectedCategory === "MUSIC"}
        />
      </Form>
    </div>
  );
};

export default CategoryFilter;
