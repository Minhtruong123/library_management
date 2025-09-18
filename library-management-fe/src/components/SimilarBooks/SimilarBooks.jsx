import React from "react";
import styles from "./SimilarBooks.module.css";
import BookCard from "../BookCard/BookCard";

export default function SimilarBooks({ books }) {
  return (
    <>
      <section className={styles.similarBooks}>
        <div className={styles.container}>
          <h2 className={styles.sectionTitle}>Sách tương tự</h2>
          <div className={styles.booksGrid}>
            {books.map((book, index) => (
              <BookCard key={index} book={book} />
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
