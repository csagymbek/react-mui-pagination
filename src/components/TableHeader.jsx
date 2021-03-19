import {
  TableCell,
  TableHead,
  TableRow,
  TableSortLabel,
} from "@material-ui/core";
import React from "react";

export const TableHeader = ({
  valueToOrderBy,
  orderDirection,
  handleRequestSort,
}) => {
  const createSortHandler = (property) => (event) => {
    handleRequestSort(event, property);
  };

  return (
    <TableHead>
      <TableRow>
        <TableCell key="name">
          <TableSortLabel
            active={valueToOrderBy === "name"}
            direction={valueToOrderBy === "name" ? orderDirection : "asc"}
            onClick={createSortHandler("name")}
          >
            Name
          </TableSortLabel>
        </TableCell>
        <TableCell key="age">
          <TableSortLabel
            active={valueToOrderBy === "age"}
            direction={valueToOrderBy === "age" ? orderDirection : "desc"}
            onClick={createSortHandler("age")}
          >
            Age
          </TableSortLabel>
        </TableCell>
      </TableRow>
    </TableHead>
  );
};
