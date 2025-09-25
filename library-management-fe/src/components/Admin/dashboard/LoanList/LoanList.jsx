import React from "react";
import styles from "./LoanList.module.css";

export default function LoanList({ loans }) {
  return (
    <>
      <div className={styles.card}>
        <div className={styles.cardHeader}>
          <h2>Mượn gần đây</h2>
          <a href="#" className={styles.more}>
            Xem tất cả <i className="fas fa-chevron-right"></i>
          </a>
        </div>
        <table className={styles.loanList}>
          <thead>
            <tr>
              <th>Thành viên</th>
              <th>Sách</th>
              <th>Ngày trả</th>
              <th>Trạng thái</th>
            </tr>
          </thead>
          <tbody>
            {loans.map((loan, index) => (
              <tr key={index}>
                <td>{loan.member}</td>
                <td>{loan.book}</td>
                <td>{loan.returnDate}</td>
                <td>
                  <span
                    className={`${styles.status} ${
                      loan.status === "Đang mượn"
                        ? styles.borrowed
                        : styles.overdue
                    }`}
                  >
                    {loan.status}
                  </span>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </>
  );
}
