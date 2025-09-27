import React from "react";
import styles from "./BookGrid.module.css";
import BookCard from "../BookCard/BookCard";

export default function BookGrid({ books }) {
  return (
    <>
      <div className={styles.booksGrid}>
        {books.map((book, index) => (
          <BookCard key={index} book={book} />
        ))}
      </div>
    </>
  );
}
