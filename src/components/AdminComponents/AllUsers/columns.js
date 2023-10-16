import { format } from "date-fns";
import { Button } from "react-bootstrap";
import { Link } from "react-router-dom";

export const COLUMNS = [
  {
    Header: "User Id",
    accessor: "userId",
  },
  {
    Header: "Name",
    accessor: "name",
  },
  {
    Header: "Email",
    accessor: "email",
  },
  {
    Header: "Role",
    accessor: "role",
  },
  {
    Header: "Member Since",
    accessor: "createdAt",
    Cell: ({ value }) => {
      return format(new Date(value), "dd/MM/yyyy");
    },
  },
  {
    Header: "",
    accessor: "_id",
    Cell: ({ value }) => {
      return (
        <Link to={`/admin/users/${value}`}>
          <Button variant="primary" size="sm">
            View
          </Button>
        </Link>
      );
    },
  },
];
