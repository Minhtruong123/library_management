import React from "react";
import styles from "./BookList.module.css";

export default function BookList({ books }) {
  return (
    <>
      <div className={`${styles.card} ${styles.bookListCard}`}>
        <div className={styles.cardHeader}>
          <h2>Sách mới nhất</h2>
          <a href="#" className={styles.more}>
            Xem tất cả <i className="fas fa-chevron-right"></i>
          </a>
        </div>
        <table className={styles.bookList}>
          <thead>
            <tr>
              <th>Tiêu đề</th>
              <th>Tác giả</th>
              <th>Danh mục</th>
              <th>Trạng thái</th>
              <th>Thao tác</th>
            </tr>
          </thead>
          <tbody>
            {books.map((book, index) => (
              <tr key={index}>
                <td>{book.title}</td>
                <td>{book.author}</td>
                <td>{book.category}</td>
                <td>
                  <span
                    className={`${styles.status} ${
                      book.status === "Có sẵn"
                        ? styles.available
                        : styles.borrowed
                    }`}
                  >
                    {book.status}
                  </span>
                </td>
                <td className={styles.actions}>
                  <button
                    className={`${styles.btn} ${styles.btnPrimary}`}
                    disabled={book.status !== "Có sẵn"}
                  >
                    Mượn
                  </button>
                  <button className={`${styles.btn} ${styles.btnSecondary}`}>
                    Chi tiết
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </>
  );
}
