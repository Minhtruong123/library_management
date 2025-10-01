import React from "react";
import styles from "./BookList.module.css";

export default function BookList({ books }) {
  const getStatusText = (status) => {
    switch (status) {
      case "available":
        return "Có sẵn";
      case "borrowed":
        return "Đang mượn";
      case "overdue":
        return "Quá hạn";
      default:
        return status;
    }
  };
  return (
    <>
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
          {books.map((book) => (
            <tr key={book.id}>
              <td>{book.title}</td>
              <td>{book.author}</td>
              <td>{book.category}</td>
              <td>
                <span className={`${styles.status} ${styles[book.status]}`}>
                  {getStatusText(book.status)}
                </span>
              </td>
              <td className={styles.actions}>
                <button
                  className={`${styles.btn} ${styles.btnPrimary}`}
                  disabled={book.status !== "available"}
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
    </>
  );
}
