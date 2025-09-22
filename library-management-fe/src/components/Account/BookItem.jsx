import React from "react";
import styles from "./BookItem.module.css";

export default function BookItem({
  title,
  author,
  status,
  dueDate,
  cover,
  isBorrowed,
}) {
  const getLoanStatusClass = () => {
    if (status === "overdue") return styles.overdue;
    if (status === "returned") return styles.returned;
    return styles.borrowed;
  };
  return (
    <>
      <div className={styles.bookItem}>
        <div className={styles.bookCoverSmall}>
          <img src={cover} alt={`${title} Cover`} />
        </div>
        <div className={styles.bookInfoSmall}>
          <h4>{title}</h4>
          <p className={styles.authorSmall}>{author}</p>
          <span className={`${styles.loanStatus} ${getLoanStatusClass()}`}>
            {isBorrowed ? dueDate : status}
          </span>
        </div>
        <div className={styles.bookActions}>
          {isBorrowed ? (
            <>
              <button title="Gia hạn">
                <i className="fas fa-redo"></i>
              </button>
              <button title="Chi tiết">
                <i className="fas fa-info-circle"></i>
              </button>
            </>
          ) : (
            <>
              <button title="Hủy đặt">
                <i className="fas fa-times"></i>
              </button>
              <button title="Chi tiết">
                <i className="fas fa-info-circle"></i>
              </button>
            </>
          )}
        </div>
      </div>
    </>
  );
}
