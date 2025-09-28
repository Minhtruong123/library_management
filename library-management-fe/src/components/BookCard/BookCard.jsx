import React from "react";
import styles from "./BookCard.module.css";

export default function BookCard({ book }) {
  return (
    <>
      <div className={styles.bookCard}>
        <div className={styles.bookCover}>
          <img src={book.image} alt={book.title} />
        </div>
        <div className={styles.bookInfo}>
          <h3>{book.title}</h3>
          <p className={styles.author}>
            {book.authorName ? book.authorName : "Chưa rõ tác giả"}
          </p>
          <div className={styles.bookMeta}>
            <span>
              <i className="fas fa-calendar"></i> {book.publishedYear}
            </span>
            <span>
              <i className="fas fa-layer-group"></i> {book.categoryName}
            </span>
            <span>
              <i className="fas fa-book"></i> {book.availableCopies} bản có sẵn
            </span>
          </div>
          <button className={styles.btnReserve}>Đặt sách</button>
        </div>
      </div>
    </>
  );
}
