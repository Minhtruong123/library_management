import React from "react";
import styles from "./BookOverview.module.css";

export default function BookOverview({ book }) {
  return (
    <>
      <div className={styles.bookOverview}>
        <div className={styles.bookCover}>
          <img src={book.image} alt={book.title} />
        </div>
        <div className={styles.bookInfo}>
          <h1>{book.title}</h1>
          <p className={styles.bookAuthor}>Tác giả: {book.author}</p>

          <div className={styles.bookRating}>
            <div className={styles.stars}>
              {[...Array(5)].map((_, i) => (
                <i
                  key={i}
                  className={
                    i < Math.floor(book?.rating)
                      ? "fas fa-star"
                      : i < book.rating
                      ? "fas fa-star-half-alt"
                      : "far fa-star"
                  }
                ></i>
              ))}
            </div>
            <span className={styles.ratingCount}>
              {book.rating}/5 ({book?.ratingCount} đánh giá)
            </span>
          </div>

          <div className={styles.bookMetaInfo}>
            <div className={styles.metaItem}>
              <i className="fas fa-layer-group"></i>
              <span>Thể loại: {book.categoryName}</span>
            </div>
            <div className={styles.metaItem}>
              <i className="fas fa-language"></i>
              <span>Ngôn ngữ: {book.language}</span>
            </div>
            <div className={styles.metaItem}>
              <i className="fas fa-calendar-alt"></i>
              <span>Năm xuất bản: {book.publishedYear}</span>
            </div>
            <div className={styles.metaItem}>
              <i className="fas fa-barcode"></i>
              <span>ISBN: {book.isbn}</span>
            </div>
          </div>

          <div className={styles.bookAvailability}>
            <div
              className={`${styles.availabilityStatus} ${
                book?.available > 0 ? styles.available : styles.unavailable
              }`}
            >
              <i
                className={
                  book.available > 0
                    ? "fas fa-check-circle"
                    : "fas fa-times-circle"
                }
              ></i>
              <span>
                {book.available > 0
                  ? `Còn sách (${book.available}/${book.totalCopies} cuốn)`
                  : "Hết sách"}
              </span>
            </div>
            <p>Sách thường được mượn trong 3-5 ngày qua</p>
          </div>

          <div className={styles.bookActions}>
            <button className={styles.btnReserve}>
              <i className="fas fa-bookmark"></i>
              Đặt sách
            </button>
            <button className={styles.btnWishlist}>
              <i className="far fa-heart"></i>
            </button>
          </div>
        </div>
      </div>
    </>
  );
}
