import React from "react";
import ReactPaginate from "react-paginate";
import { useDispatch, useSelector } from "react-redux";

import styles from "./Pagination.module.scss";
import { setSelectedPage } from "../../redux/reducers/filtersSlice";

export default function Pagination() {
  const pageNumber = useSelector(
    (state) => state.filters.selectedPage
  );
  const dispatch = useDispatch();

  return (
    <ReactPaginate
      className={styles.root}
      breakLabel="..."
      nextLabel=">"
      onPageChange={(e) => dispatch(setSelectedPage(e.selected + 1))}
      // pageRangeDisplayed={2}
      // marginPagesDisplayed={1}
      forcePage={pageNumber-1}
      pageCount={3}
      previousLabel="<"
      renderOnZeroPageCount={null}
    />
  );
}
