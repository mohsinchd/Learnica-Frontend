import React from "react";
import { Pagination } from "react-bootstrap";

const PaginationComponent = ({ courses, page, setPageParam }) => {
  let numberOfPages = Math.floor(courses / 6);

  let pages = [];

  for (let i = 0; i <= numberOfPages; i++) {
    pages.push(i);
  }

  let active = Number(page - 1);

  const pageHandler = (value) => {
    setPageParam(value);
  };

  return (
    <div className="mt-3">
      <h5>Pages</h5>
      <Pagination>
        {pages.map((page) => (
          <Pagination.Item
            onClick={() => pageHandler(page + 1)}
            active={page === active}
            key={page}
          >
            {page + 1}
          </Pagination.Item>
        ))}
      </Pagination>
    </div>
  );
};

export default PaginationComponent;
