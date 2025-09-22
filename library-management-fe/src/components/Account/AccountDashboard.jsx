import React from "react";
import styles from "./AccountDashboard.module.css";
import StatCard from "./StatCard";
import BookItem from "./BookItem";
import NotificationItem from "./NotificationItem";

export default function AccountDashboard() {
  const stats = [
    { icon: "fas fa-book", value: "3", label: "Sách đang mượn" },
    { icon: "fas fa-bookmark", value: "2", label: "Sách đã đặt trước" },
    { icon: "fas fa-history", value: "28", label: "Tổng sách đã mượn" },
  ];

  const borrowedBooks = [
    {
      id: 1,
      title: "Atomic Habits",
      author: "James Clear",
      dueDate: "25/09/2025",
      status: "borrowed",
      cover: "https://via.placeholder.com/60x80",
    },
    {
      id: 2,
      title: "Đắc nhân tâm",
      author: "Dale Carnegie",
      dueDate: "Quá hạn: 2 ngày",
      status: "overdue",
      cover: "https://via.placeholder.com/60x80",
    },
    {
      id: 3,
      title: "Sapiens: Lược sử loài người",
      author: "Yuval Noah Harari",
      dueDate: "30/09/2025",
      status: "borrowed",
      cover: "https://via.placeholder.com/60x80",
    },
  ];

  const reservedBooks = [
    {
      id: 1,
      title: "Người giàu có nhất thành Babylon",
      author: "George S. Clason",
      status: "Đang chờ: #2 trong hàng đợi",
      cover: "https://via.placeholder.com/60x80",
    },
    {
      id: 2,
      title: "Nhà giả kim",
      author: "Paulo Coelho",
      status: "Sẵn sàng nhận: đến 20/09/2025",
      cover: "https://via.placeholder.com/60x80",
    },
  ];

  const notifications = [
    {
      id: 1,
      type: "overdue",
      content:
        '<strong>Sách quá hạn:</strong> "Đắc nhân tâm" đã quá hạn trả 2 ngày. Vui lòng trả sách hoặc gia hạn để tránh phí phạt.',
      time: "2 giờ trước",
    },
    {
      id: 2,
      type: "reminder",
      content:
        '<strong>Nhắc nhở:</strong> "Atomic Habits" sẽ đến hạn trả vào ngày 25/09/2025.',
      time: "Hôm qua",
    },
    {
      id: 3,
      type: "success",
      content:
        '<strong>Sách sẵn sàng:</strong> "Nhà giả kim" bạn đã đặt trước hiện đã có sẵn. Vui lòng đến thư viện để nhận sách trước ngày 20/09/2025.',
      time: "2 ngày trước",
    },
  ];
  return (
    <>
      <div className={styles.accountContent}>
        <div className={styles.contentHeader}>
          <h2>Bảng điều khiển</h2>
          <p>Xin chào, Nguyễn Văn A!</p>
        </div>

        <div className={styles.statsGrid}>
          {stats.map((stat, index) => (
            <StatCard
              key={index}
              icon={stat.icon}
              value={stat.value}
              label={stat.label}
            />
          ))}
        </div>

        <div className={styles.recentBooks}>
          <div className={styles.sectionHeader}>
            <h3>Sách đang mượn</h3>
            <a href="#" className={styles.viewAll}>
              Xem tất cả <i className="fas fa-chevron-right"></i>
            </a>
          </div>

          <div className={styles.bookList}>
            {borrowedBooks.map((book) => (
              <BookItem
                key={book.id}
                title={book.title}
                author={book.author}
                status={book.status}
                dueDate={book.dueDate}
                cover={book.cover}
                isBorrowed={true}
              />
            ))}
          </div>
        </div>

        <div className={styles.recentBooks}>
          <div className={styles.sectionHeader}>
            <h3>Sách đã đặt trước</h3>
            <a href="#" className={styles.viewAll}>
              Xem tất cả <i className="fas fa-chevron-right"></i>
            </a>
          </div>

          <div className={styles.bookList}>
            {reservedBooks.map((book) => (
              <BookItem
                key={book.id}
                title={book.title}
                author={book.author}
                status={book.status}
                cover={book.cover}
                isBorrowed={false}
              />
            ))}
          </div>
        </div>

        <div className={styles.notifications}>
          <div className={styles.sectionHeader}>
            <h3>Thông báo gần đây</h3>
            <a href="#" className={styles.viewAll}>
              Xem tất cả <i className="fas fa-chevron-right"></i>
            </a>
          </div>

          <div className={styles.notificationList}>
            {notifications.map((notification) => (
              <NotificationItem
                key={notification.id}
                type={notification.type}
                content={notification.content}
                time={notification.time}
              />
            ))}
          </div>
        </div>
      </div>
    </>
  );
}
