import React from "react";
import StarFilter from "./StarFilter";
import CategoryFilter from "./CategoryFilter";
import PriceFilter from "./PriceFilter";

const SearchByFilter = () => {
  return (
    <div>
      <StarFilter />
      <CategoryFilter />
      <PriceFilter />
    </div>
  );
};

export default SearchByFilter;
