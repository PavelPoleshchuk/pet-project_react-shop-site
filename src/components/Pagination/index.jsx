import React from "react";
import ReactPaginate from "react-paginate";
import {PageAndSearchContext} from "../../App";

import styles from "./Pagination.module.scss";

export default function Pagination() {
  const {setSelectedPage}=React.useContext(PageAndSearchContext)
  return (
    <ReactPaginate
      className={styles.root}
      breakLabel="..."
      nextLabel=">"
      onPageChange={(e) => setSelectedPage(e.selected+1)}
      // pageRangeDisplayed={2}
      // marginPagesDisplayed={1}
      pageCount={3}
      previousLabel="<"
      renderOnZeroPageCount={null}
    />
  );
}
