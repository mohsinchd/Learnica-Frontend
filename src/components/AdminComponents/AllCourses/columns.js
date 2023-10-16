import { Button } from "react-bootstrap";
import { Link } from "react-router-dom";
import Rating from "../../../components/SharedComponents/Rating";

export const COLUMNS = [
  {
    Header: "Course Id",
    accessor: "courseId",
  },
  {
    Header: "Title",
    accessor: "title",
  },
  {
    Header: "Category",
    accessor: "category",
  },
  {
    Header: "Price",
    accessor: "price",
    Cell: ({ value }) => {
      return `$${value}`;
    },
  },
  {
    Header: "Rating",
    accessor: "rating",
    Cell: ({ value }) => {
      return <Rating value={value} />;
    },
  },
  {
    Header: "",
    accessor: "_id",
    Cell: ({ value }) => {
      return (
        <Link to={`/admin/courses/${value}`}>
          <Button variant="primary" size="sm">
            View
          </Button>
        </Link>
      );
    },
  },
];
