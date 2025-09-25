import React from "react";
import BookList from "./BookList/BookList";
import StatCard from "./StatCard/StatCard";
import LoanList from "./LoanList/LoanList";
import Timeline from "./Timeline/Timeline";
import styles from "./Dashboard.module.css";

export default function Dashboard() {
  const stats = [
    { icon: "fas fa-book", count: "2,543", label: "Tổng số sách" },
    { icon: "fas fa-users", count: "1,249", label: "Thành viên" },
    { icon: "fas fa-exchange-alt", count: "156", label: "Sách đang mượn" },
    { icon: "fas fa-exclamation-triangle", count: "24", label: "Quá hạn" },
  ];

  const books = [
    {
      title: "Dế Mèn Phiêu Lưu Ký",
      author: "Tô Hoài",
      category: "Văn học Việt Nam",
      status: "Có sẵn",
    },
    {
      title: "Nhà Giả Kim",
      author: "Paulo Coelho",
      category: "Tiểu thuyết",
      status: "Đang mượn",
    },
    {
      title: "Đắc Nhân Tâm",
      author: "Dale Carnegie",
      category: "Kỹ năng sống",
      status: "Có sẵn",
    },
    {
      title: "Sách Giáo Khoa Toán Học 12",
      author: "Bộ Giáo dục",
      category: "Giáo trình",
      status: "Đang mượn",
    },
  ];

  const loans = [
    {
      member: "Nguyễn Văn A",
      book: "Dế Mèn Phiêu Lưu Ký",
      returnDate: "05/10/2025",
      status: "Đang mượn",
    },
    {
      member: "Trần Thị B",
      book: "Đắc Nhân Tâm",
      returnDate: "01/10/2025",
      status: "Quá hạn",
    },
    {
      member: "Lê Văn C",
      book: "Nhà Giả Kim",
      returnDate: "15/09/2025",
      status: "Đang mượn",
    },
    {
      member: "Phạm Thị D",
      book: "Sách Giáo Khoa Toán Học 12",
      returnDate: "20/09/2025",
      status: "Đang mượn",
    },
  ];

  const activities = [
    {
      time: "16/09/2025, 10:30",
      user: "Nguyễn Văn A",
      action: "đã mượn sách",
      book: "Dế Mèn Phiêu Lưu Ký",
    },
    {
      time: "16/09/2025, 09:15",
      user: "Trần Thị B",
      action: "đã trả sách",
      book: "Chí Phèo",
      extraInfo: " quá hạn 2 ngày",
    },
    {
      time: "15/09/2025, 16:45",
      user: "Admin",
      action: "đã thêm sách mới",
      book: "Không gia đình",
    },
    {
      time: "15/09/2025, 14:20",
      user: "Lê Văn C",
      action: "đã đăng ký thành viên mới",
    },
    {
      time: "15/09/2025, 11:05",
      user: "Phạm Thị D",
      action: "đã đặt lịch mượn sách",
      book: "Tôi thấy hoa vàng trên cỏ xanh",
    },
  ];
  return (
    <>
      <div>
        <h1>Tổng quan hệ thống</h1>
        <p className={styles.subtitle}>
          Xin chào! Đây là trung tâm quản lý thư viện của bạn.
        </p>

        <div className={styles.dashboard}>
          {stats.map((stat, index) => (
            <StatCard
              key={index}
              icon={stat.icon}
              count={stat.count}
              label={stat.label}
            />
          ))}
        </div>

        <BookList books={books} />

        <div className={styles.gridLayout}>
          <LoanList loans={loans} />
          <Timeline activities={activities} />
        </div>
      </div>
    </>
  );
}
