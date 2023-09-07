import React from "react";
import StarFilter from "./StarFilter";
import CategoryFilter from "./CategoryFilter";
import PriceFilter from "./PriceFilter";

const SearchByFilter = ({
  setRatingParam,
  setPriceParam,
  setCategoryParam,
  averageRating,
  category,
  price,
}) => {
  console.log(price);
  return (
    <div>
      <h1>Filters</h1>
      <StarFilter
        setRatingParam={setRatingParam}
        averageRating={Number(averageRating)}
      />
      <CategoryFilter setCategoryParam={setCategoryParam} category={category} />
      <PriceFilter setPriceParam={setPriceParam} passedPrice={Number(price)} />
    </div>
  );
};

export default SearchByFilter;
