import React from "react";
import styles from "./LoanList.module.css";

export default function LoanList({ loans }) {
  const getStatusText = (status) => {
    switch (status) {
      case "borrowed":
        return "Đang mượn";
      case "overdue":
        return "Quá hạn";
      case "returned":
        return "Đã trả";
      default:
        return status;
    }
  };
  return (
    <>
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
          {loans.map((loan) => (
            <tr key={loan.id}>
              <td>{loan.member}</td>
              <td>{loan.book}</td>
              <td>{loan.returnDate}</td>
              <td>
                <span className={`${styles.status} ${styles[loan.status]}`}>
                  {getStatusText(loan.status)}
                </span>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </>
  );
}
