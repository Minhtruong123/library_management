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
          <p className={styles.author}>{book.author}</p>
          <div className={styles.bookMeta}>
            <span>
              <i className="fas fa-star"></i> {book.rating}
            </span>
            <span>
              <i className="fas fa-layer-group"></i> {book.category}
            </span>
          </div>
          <button className={styles.btnReserve}>Đặt sách</button>
        </div>
      </div>
    </>
  );
}
