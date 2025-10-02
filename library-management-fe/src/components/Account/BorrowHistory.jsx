import React from "react";
import styles from "./BorrowHistory.module.css";

export default function BorrowHistory() {
  const borrowedBooks = [
    { title: "Sách A", author: "Tác giả A", dateBorrowed: "01/10/2025" },
    { title: "Sách B", author: "Tác giả B", dateBorrowed: "05/10/2025" },
    { title: "Sách C", author: "Tác giả C", dateBorrowed: "10/10/2025" },
  ];
  return (
    <>
      <div className={styles.borrowHistory}>
        <h2 className={styles.title}>Lịch sử mượn sách</h2>
        {borrowedBooks.length > 0 ? (
          <ul className={styles.bookList}>
            {borrowedBooks.map((book, index) => (
              <li key={index} className={styles.bookItem}>
                <div className={styles.bookInfo}>
                  <div>
                    <span className={styles.bookTitle}>{book.title}</span> -
                    <span className={styles.bookAuthor}> {book.author}</span>
                  </div>
                  <span className={styles.dateBorrowed}>
                    Mượn ngày: {book.dateBorrowed}
                  </span>
                </div>
              </li>
            ))}
          </ul>
        ) : (
          <div className={styles.noBooks}>Bạn chưa mượn sách nào.</div>
        )}
      </div>
    </>
  );
}
