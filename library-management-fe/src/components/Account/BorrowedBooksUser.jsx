import React, { useState, useEffect } from "react";
import styles from "./BorrowedBooksUser.module.css";

export default function BorrowedBooksUser() {
  const [borrowedBooks, setBorrowedBooks] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchBorrowedBooks = async () => {
      try {
        setIsLoading(true);
        const data = await borrowService.getCurrentBorrowedBooks();
        setBorrowedBooks(data);
        setError(null);
      } catch (error) {
        console.error("Error fetching borrowed books:", error);
        setError("Không thể tải dữ liệu sách đang mượn. Vui lòng thử lại sau.");
      } finally {
        setIsLoading(false);
      }
    };

    fetchBorrowedBooks();
  }, []);

  const calculateDaysRemaining = (dueDate) => {
    const today = new Date();
    const due = new Date(dueDate);
    const diffTime = due - today;
    const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));
    return diffDays;
  };

  const getStatusClass = (daysRemaining) => {
    if (daysRemaining < 0) return styles.overdue;
    if (daysRemaining <= 3) return styles.almostDue;
    return styles.onTime;
  };

  const handleRenewBook = async (borrowId) => {
    try {
      await borrowService.renewBook(borrowId);
      const data = await borrowService.getCurrentBorrowedBooks();
      setBorrowedBooks(data);
      alert("Gia hạn sách thành công!");
    } catch (error) {
      console.error("Error renewing book:", error);
      alert("Không thể gia hạn sách. Vui lòng thử lại sau.");
    }
  };
  return (
    <>
      <div className={styles.borrowedBooksContainer}>
        <div className={styles.header}>
          <h1>Sách đang mượn</h1>
          <p>Quản lý tất cả sách bạn đang mượn từ thư viện</p>
        </div>

        {isLoading ? (
          <div className={styles.loadingContainer}>
            <div className={styles.loader}></div>
            <p>Đang tải dữ liệu...</p>
          </div>
        ) : error ? (
          <div className={styles.errorContainer}>
            <i className="fas fa-exclamation-circle"></i>
            <p>{error}</p>
            <button onClick={() => window.location.reload()}>Tải lại</button>
          </div>
        ) : borrowedBooks.length === 0 ? (
          <div className={styles.emptyState}>
            <i className="fas fa-book"></i>
            <h2>Bạn chưa mượn sách nào</h2>
            <p>Hãy khám phá thư viện và mượn sách ngay!</p>
            <a href="/books" className={styles.exploreBooksBtn}>
              Khám phá sách
            </a>
          </div>
        ) : (
          <>
            <div className={styles.statsContainer}>
              <div className={styles.statCard}>
                <h3>{borrowedBooks.length}</h3>
                <p>Tổng sách đang mượn</p>
              </div>
              <div className={styles.statCard}>
                <h3>
                  {
                    borrowedBooks.filter(
                      (book) => calculateDaysRemaining(book.dueDate) < 0
                    ).length
                  }
                </h3>
                <p>Sách quá hạn</p>
              </div>
              <div className={styles.statCard}>
                <h3>
                  {
                    borrowedBooks.filter(
                      (book) =>
                        calculateDaysRemaining(book.dueDate) >= 0 &&
                        calculateDaysRemaining(book.dueDate) <= 3
                    ).length
                  }
                </h3>
                <p>Sắp đến hạn</p>
              </div>
            </div>

            <div className={styles.booksListContainer}>
              <div className={styles.listHeader}>
                <div className={styles.bookInfo}>Thông tin sách</div>
                <div className={styles.borrowDate}>Ngày mượn</div>
                <div className={styles.dueDate}>Ngày hẹn trả</div>
                <div className={styles.status}>Trạng thái</div>
                <div className={styles.actions}>Thao tác</div>
              </div>

              <ul className={styles.booksList}>
                {borrowedBooks.map((book) => {
                  const daysRemaining = calculateDaysRemaining(book.dueDate);
                  const statusClass = getStatusClass(daysRemaining);

                  return (
                    <li key={book.id} className={styles.bookItem}>
                      <div className={styles.bookInfo}>
                        <img
                          src={book.coverImage || "https://placehold.co/80x120"}
                          alt={book.title}
                          className={styles.bookCover}
                        />
                        <div className={styles.bookDetails}>
                          <h3 className={styles.bookTitle}>{book.title}</h3>
                          <p className={styles.bookAuthor}>{book.author}</p>
                          <p className={styles.bookId}>
                            Mã sách: {book.bookId}
                          </p>
                        </div>
                      </div>

                      <div className={styles.borrowDate}>
                        {new Date(book.borrowDate).toLocaleDateString("vi-VN")}
                      </div>

                      <div className={styles.dueDate}>
                        {new Date(book.dueDate).toLocaleDateString("vi-VN")}
                      </div>

                      <div className={`${styles.status} ${statusClass}`}>
                        {daysRemaining < 0
                          ? `Quá hạn ${Math.abs(daysRemaining)} ngày`
                          : daysRemaining === 0
                          ? "Hạn hôm nay"
                          : `Còn ${daysRemaining} ngày`}
                      </div>

                      <div className={styles.actions}>
                        <button
                          className={styles.renewBtn}
                          onClick={() => handleRenewBook(book.id)}
                          disabled={book.renewCount >= 2 || daysRemaining < 0}
                          title={
                            book.renewCount >= 2
                              ? "Đã gia hạn tối đa"
                              : daysRemaining < 0
                              ? "Không thể gia hạn sách quá hạn"
                              : "Gia hạn thêm 14 ngày"
                          }
                        >
                          <i className="fas fa-sync-alt"></i> Gia hạn
                        </button>
                        <div className={styles.renewCount}>
                          Đã gia hạn: {book.renewCount}/2
                        </div>
                      </div>
                    </li>
                  );
                })}
              </ul>
            </div>

            <div className={styles.reminderBox}>
              <i className="fas fa-info-circle"></i>
              <div>
                <h4>Lưu ý:</h4>
                <ul>
                  <li>Bạn có thể gia hạn mỗi cuốn sách tối đa 2 lần</li>
                  <li>Phí phạt quá hạn: 5.000đ/ngày/cuốn sách</li>
                  <li>
                    Vui lòng trả sách đúng hạn để tránh bị phạt và giúp người
                    khác có cơ hội đọc sách
                  </li>
                </ul>
              </div>
            </div>
          </>
        )}
      </div>
    </>
  );
}
