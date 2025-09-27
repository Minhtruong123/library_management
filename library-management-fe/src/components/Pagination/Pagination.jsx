import React, { useState } from "react";
import styles from "./Pagination.module.css";

export default function Pagination({ totalPages, onPageChange }) {
  const [currentPage, setCurrentPage] = useState(1);

  const handlePageClick = (page) => {
    setCurrentPage(page);
    onPageChange(page);
  };
  return (
    <>
      <div className={styles.pagination}>
        {Array.from({ length: totalPages }, (_, i) => i + 1).map((page) => (
          <a
            href="#"
            className={currentPage === page ? styles.active : ""}
            onClick={(e) => {
              e.preventDefault();
              handlePageClick(page);
            }}
            key={page}
          >
            {page}
          </a>
        ))}
        <a
          href="#"
          onClick={(e) => {
            e.preventDefault();
            if (currentPage < totalPages) {
              handlePageClick(currentPage + 1);
            }
          }}
        >
          <i className="fas fa-chevron-right"></i>
        </a>
      </div>
    </>
  );
}
