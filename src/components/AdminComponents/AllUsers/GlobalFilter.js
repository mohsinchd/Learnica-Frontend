import React from "react";

const GlobalFilter = ({ filter, setFilter }) => {
  return (
    <>
      <span className="mb-3">
        Filter:
        <input
          type="text"
          value={filter}
          className="form-control mb-3"
          placeholder="Search"
          style={{ width: "300px" }}
          onChange={(e) => setFilter(e.target.value)}
        />
      </span>
    </>
  );
};

export default GlobalFilter;
