import React from "react";
import StatsCard from "./StatsCard";

export default function Dashboard() {
  const books = [
    {
      id: 1,
      title: "Dế Mèn Phiêu Lưu Ký",
      author: "Tô Hoài",
      category: "Văn học Việt Nam",
      status: "available",
    },
    {
      id: 2,
      title: "Nhà Giả Kim",
      author: "Paulo Coelho",
      category: "Tiểu thuyết",
      status: "borrowed",
    },
    {
      id: 3,
      title: "Đắc Nhân Tâm",
      author: "Dale Carnegie",
      category: "Kỹ năng sống",
      status: "available",
    },
    {
      id: 4,
      title: "Sách Giáo Khoa Toán Học 12",
      author: "Bộ Giáo dục",
      category: "Giáo trình",
      status: "borrowed",
    },
  ];

  const loans = [
    {
      id: 1,
      member: "Nguyễn Văn A",
      book: "Dế Mèn Phiêu Lưu Ký",
      returnDate: "05/10/2025",
      status: "borrowed",
    },
    {
      id: 2,
      member: "Trần Thị B",
      book: "Đắc Nhân Tâm",
      returnDate: "01/10/2025",
      status: "overdue",
    },
    {
      id: 3,
      member: "Lê Văn C",
      book: "Nhà Giả Kim",
      returnDate: "15/09/2025",
      status: "borrowed",
    },
    {
      id: 4,
      member: "Phạm Thị D",
      book: "Sách Giáo Khoa Toán Học 12",
      returnDate: "20/09/2025",
      status: "borrowed",
    },
  ];

  const activities = [
    {
      id: 1,
      time: "16/09/2025, 10:30",
      user: "Nguyễn Văn A",
      action: "đã mượn sách",
      subject: "Dế Mèn Phiêu Lưu Ký",
    },
    {
      id: 2,
      time: "16/09/2025, 09:15",
      user: "Trần Thị B",
      action: "đã trả sách",
      subject: "Chí Phèo",
      note: "quá hạn 2 ngày",
    },
    {
      id: 3,
      time: "15/09/2025, 16:45",
      user: "Admin",
      action: "đã thêm sách mới",
      subject: "Không gia đình",
    },
    {
      id: 4,
      time: "15/09/2025, 14:20",
      user: "Lê Văn C",
      action: "đã đăng ký thành viên mới",
      subject: "",
    },
    {
      id: 5,
      time: "15/09/2025, 11:05",
      user: "Phạm Thị D",
      action: "đã đặt lịch mượn sách",
      subject: "Tôi thấy hoa vàng trên cỏ xanh",
    },
  ];
  return (
    <>
      <h1>Tổng quan hệ thống</h1>
      <p className={styles.subheading}>
        Xin chào! Đây là trung tâm quản lý thư viện của bạn.
      </p>

      <div className={styles.statsGrid}>
        <StatCard icon="fas fa-book" value="2,543" label="Tổng số sách" />
        <StatCard icon="fas fa-users" value="1,249" label="Thành viên" />
        <StatCard
          icon="fas fa-exchange-alt"
          value="156"
          label="Sách đang mượn"
        />
        <StatCard
          icon="fas fa-exclamation-triangle"
          value="24"
          label="Quá hạn"
        />
      </div>

      <div className={styles.card}>
        <BookList books={books} />
      </div>

      <div className={styles.twoColumnGrid}>
        <div className={styles.card}>
          <LoanList loans={loans} />
        </div>
        <div className={styles.card}>
          <Timeline activities={activities} />
        </div>
      </div>
    </>
  );
}
