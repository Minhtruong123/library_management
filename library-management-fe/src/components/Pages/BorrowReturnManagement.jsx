import React, { useState } from "react";
import Layout from "../Admin/Layout/Layout";
import styles from "./BorrowReturnManagement.module.css";

export default function BorrowReturnManagement() {
  const [activeTab, setActiveTab] = useState("all");
  const [searchTerm, setSearchTerm] = useState("");
  const [showModal, setShowModal] = useState(false);
  const [modalType, setModalType] = useState("borrow");

  const borrowRecords = [
    {
      id: 1,
      memberName: "Nguyễn Văn A",
      memberId: "TV001",
      bookTitle: "Dế Mèn Phiêu Lưu Ký",
      bookId: "S001",
      borrowDate: "15/09/2025",
      dueDate: "05/10/2025",
      status: "borrowed",
    },
    {
      id: 2,
      memberName: "Trần Thị B",
      memberId: "TV002",
      bookTitle: "Đắc Nhân Tâm",
      bookId: "S003",
      borrowDate: "12/09/2025",
      dueDate: "01/10/2025",
      status: "overdue",
    },
    {
      id: 3,
      memberName: "Lê Văn C",
      memberId: "TV003",
      bookTitle: "Nhà Giả Kim",
      bookId: "S002",
      borrowDate: "20/09/2025",
      dueDate: "15/10/2025",
      status: "borrowed",
    },
    {
      id: 4,
      memberName: "Phạm Thị D",
      memberId: "TV004",
      bookTitle: "Sách Giáo Khoa Toán Học 12",
      bookId: "S004",
      borrowDate: "10/09/2025",
      dueDate: "20/09/2025",
      status: "borrowed",
    },
    {
      id: 5,
      memberName: "Hoàng Văn E",
      memberId: "TV005",
      bookTitle: "Tôi thấy hoa vàng trên cỏ xanh",
      bookId: "S005",
      borrowDate: "05/09/2025",
      dueDate: "25/09/2025",
      status: "returned",
      returnDate: "20/09/2025",
    },
    {
      id: 6,
      memberName: "Vũ Thị F",
      memberId: "TV006",
      bookTitle: "Chí Phèo",
      bookId: "S006",
      borrowDate: "01/09/2025",
      dueDate: "20/09/2025",
      status: "returned",
      returnDate: "18/09/2025",
    },
  ];

  const filteredRecords = borrowRecords.filter((record) => {
    const matchesSearch =
      record.memberName.toLowerCase().includes(searchTerm.toLowerCase()) ||
      record.bookTitle.toLowerCase().includes(searchTerm.toLowerCase()) ||
      record.memberId.toLowerCase().includes(searchTerm.toLowerCase()) ||
      record.bookId.toLowerCase().includes(searchTerm.toLowerCase());

    if (activeTab === "all") return matchesSearch;
    if (activeTab === "borrowed")
      return matchesSearch && record.status === "borrowed";
    if (activeTab === "overdue")
      return matchesSearch && record.status === "overdue";
    if (activeTab === "returned")
      return matchesSearch && record.status === "returned";

    return false;
  });

  const openModal = (type) => {
    setModalType(type);
    setShowModal(true);
  };

  const closeModal = () => {
    setShowModal(false);
  };

  const getStatusClass = (status) => {
    switch (status) {
      case "borrowed":
        return styles.statusBorrowed;
      case "overdue":
        return styles.statusOverdue;
      case "returned":
        return styles.statusReturned;
      default:
        return "";
    }
  };

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
      <Layout>
        <div className={styles.borrowReturnContainer}>
          <div className={styles.header}>
            <h1>Quản lý mượn trả sách</h1>
            <p className={styles.subheading}>
              Theo dõi và quản lý tất cả các hoạt động mượn trả sách trong thư
              viện
            </p>
          </div>

          <div className={styles.controlsContainer}>
            <div className={styles.tabsAndSearch}>
              <div className={styles.tabs}>
                <button
                  className={`${styles.tab} ${
                    activeTab === "all" ? styles.active : ""
                  }`}
                  onClick={() => setActiveTab("all")}
                >
                  Tất cả
                </button>
                <button
                  className={`${styles.tab} ${
                    activeTab === "borrowed" ? styles.active : ""
                  }`}
                  onClick={() => setActiveTab("borrowed")}
                >
                  Đang mượn
                </button>
                <button
                  className={`${styles.tab} ${
                    activeTab === "overdue" ? styles.active : ""
                  }`}
                  onClick={() => setActiveTab("overdue")}
                >
                  Quá hạn
                </button>
                <button
                  className={`${styles.tab} ${
                    activeTab === "returned" ? styles.active : ""
                  }`}
                  onClick={() => setActiveTab("returned")}
                >
                  Đã trả
                </button>
              </div>

              <div className={styles.searchContainer}>
                <i className="fas fa-search"></i>
                <input
                  type="text"
                  placeholder="Tìm kiếm theo tên, mã sách, thành viên..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className={styles.searchInput}
                />
              </div>
            </div>

            <div className={styles.actions}>
              <button
                className={`${styles.actionButton} ${styles.borrowButton}`}
                onClick={() => openModal("borrow")}
              >
                <i className="fas fa-plus"></i> Mượn sách mới
              </button>
              <button
                className={`${styles.actionButton} ${styles.returnButton}`}
                onClick={() => openModal("return")}
              >
                <i className="fas fa-undo"></i> Trả sách
              </button>
            </div>
          </div>

          <div className={styles.tableContainer}>
            <table className={styles.borrowTable}>
              <thead>
                <tr>
                  <th>Mã phiếu</th>
                  <th>Thành viên</th>
                  <th>Sách</th>
                  <th>Ngày mượn</th>
                  <th>Hạn trả</th>
                  <th>Tình trạng</th>
                  <th>Thao tác</th>
                </tr>
              </thead>
              <tbody>
                {filteredRecords.length > 0 ? (
                  filteredRecords.map((record) => (
                    <tr key={record.id}>
                      <td>#{record.id}</td>
                      <td>
                        <div className={styles.memberInfo}>
                          <span className={styles.memberName}>
                            {record.memberName}
                          </span>
                          <span className={styles.memberId}>
                            {record.memberId}
                          </span>
                        </div>
                      </td>
                      <td>
                        <div className={styles.bookInfo}>
                          <span className={styles.bookTitle}>
                            {record.bookTitle}
                          </span>
                          <span className={styles.bookId}>{record.bookId}</span>
                        </div>
                      </td>
                      <td>{record.borrowDate}</td>
                      <td>{record.dueDate}</td>
                      <td>
                        <span
                          className={`${styles.statusBadge} ${getStatusClass(
                            record.status
                          )}`}
                        >
                          {getStatusText(record.status)}
                        </span>
                        {record.status === "returned" && (
                          <div className={styles.returnDate}>
                            Trả: {record.returnDate}
                          </div>
                        )}
                      </td>
                      <td>
                        <div className={styles.actions}>
                          {record.status !== "returned" && (
                            <button
                              className={styles.returnActionBtn}
                              title="Trả sách"
                            >
                              <i className="fas fa-undo"></i>
                            </button>
                          )}
                          <button
                            className={styles.viewActionBtn}
                            title="Xem chi tiết"
                          >
                            <i className="fas fa-eye"></i>
                          </button>
                          <button
                            className={styles.extendActionBtn}
                            title="Gia hạn"
                            disabled={record.status === "returned"}
                          >
                            <i className="fas fa-clock"></i>
                          </button>
                        </div>
                      </td>
                    </tr>
                  ))
                ) : (
                  <tr>
                    <td colSpan="7" className={styles.noRecords}>
                      Không tìm thấy phiếu mượn trả nào
                    </td>
                  </tr>
                )}
              </tbody>
            </table>
          </div>

          {showModal && (
            <div className={styles.modalOverlay}>
              <div className={styles.modal}>
                <div className={styles.modalHeader}>
                  <h2>
                    {modalType === "borrow" ? "Mượn sách mới" : "Trả sách"}
                  </h2>
                  <button className={styles.closeBtn} onClick={closeModal}>
                    <i className="fas fa-times"></i>
                  </button>
                </div>
                <div className={styles.modalContent}>
                  {modalType === "borrow" ? (
                    <form className={styles.borrowForm}>
                      <div className={styles.formGroup}>
                        <label htmlFor="memberId">Mã thành viên:</label>
                        <div className={styles.inputWithIcon}>
                          <input
                            type="text"
                            id="memberId"
                            placeholder="Nhập mã thành viên"
                          />
                          <button type="button" className={styles.iconButton}>
                            <i className="fas fa-search"></i>
                          </button>
                        </div>
                      </div>

                      <div className={styles.memberPreview}>
                        <div className={styles.previewHeader}>
                          Thông tin thành viên:
                        </div>
                        <div className={styles.previewContent}>
                          <p>
                            <strong>Họ tên:</strong> Nguyễn Văn A
                          </p>
                          <p>
                            <strong>Mã thẻ:</strong> TV001
                          </p>
                          <p>
                            <strong>Đang mượn:</strong> 2 sách
                          </p>
                        </div>
                      </div>

                      <div className={styles.formGroup}>
                        <label htmlFor="bookId">Mã sách:</label>
                        <div className={styles.inputWithIcon}>
                          <input
                            type="text"
                            id="bookId"
                            placeholder="Nhập mã sách"
                          />
                          <button type="button" className={styles.iconButton}>
                            <i className="fas fa-search"></i>
                          </button>
                        </div>
                      </div>

                      <div className={styles.bookPreview}>
                        <div className={styles.previewHeader}>
                          Thông tin sách:
                        </div>
                        <div className={styles.previewContent}>
                          <p>
                            <strong>Tên sách:</strong> Dế Mèn Phiêu Lưu Ký
                          </p>
                          <p>
                            <strong>Tác giả:</strong> Tô Hoài
                          </p>
                          <p>
                            <strong>Tình trạng:</strong>{" "}
                            <span className={styles.available}>Có sẵn</span>
                          </p>
                        </div>
                      </div>

                      <div className={styles.formGroup}>
                        <label htmlFor="borrowDate">Ngày mượn:</label>
                        <input
                          type="date"
                          id="borrowDate"
                          defaultValue="2025-10-01"
                        />
                      </div>

                      <div className={styles.formGroup}>
                        <label htmlFor="dueDate">Hạn trả:</label>
                        <input
                          type="date"
                          id="dueDate"
                          defaultValue="2025-10-15"
                        />
                      </div>

                      <div className={styles.formGroup}>
                        <label htmlFor="note">Ghi chú:</label>
                        <textarea
                          id="note"
                          placeholder="Nhập ghi chú nếu có"
                        ></textarea>
                      </div>

                      <div className={styles.formActions}>
                        <button
                          type="button"
                          className={styles.cancelBtn}
                          onClick={closeModal}
                        >
                          Hủy
                        </button>
                        <button type="submit" className={styles.submitBtn}>
                          Xác nhận mượn sách
                        </button>
                      </div>
                    </form>
                  ) : (
                    <form className={styles.returnForm}>
                      <div className={styles.formGroup}>
                        <label htmlFor="borrowId">Mã phiếu mượn:</label>
                        <div className={styles.inputWithIcon}>
                          <input
                            type="text"
                            id="borrowId"
                            placeholder="Nhập mã phiếu mượn"
                          />
                          <button type="button" className={styles.iconButton}>
                            <i className="fas fa-search"></i>
                          </button>
                        </div>
                      </div>

                      <div className={styles.borrowPreview}>
                        <div className={styles.previewHeader}>
                          Chi tiết phiếu mượn:
                        </div>
                        <div className={styles.previewContent}>
                          <p>
                            <strong>Thành viên:</strong> Nguyễn Văn A (TV001)
                          </p>
                          <p>
                            <strong>Sách:</strong> Dế Mèn Phiêu Lưu Ký (S001)
                          </p>
                          <p>
                            <strong>Ngày mượn:</strong> 15/09/2025
                          </p>
                          <p>
                            <strong>Hạn trả:</strong> 05/10/2025
                          </p>
                          <p>
                            <strong>Tình trạng:</strong>{" "}
                            <span className={styles.statusBorrowed}>
                              Đang mượn
                            </span>
                          </p>
                        </div>
                      </div>

                      <div className={styles.formGroup}>
                        <label htmlFor="returnDate">Ngày trả:</label>
                        <input
                          type="date"
                          id="returnDate"
                          defaultValue="2025-10-01"
                        />
                      </div>

                      <div className={styles.formGroup}>
                        <label htmlFor="condition">Tình trạng sách:</label>
                        <select id="condition">
                          <option value="good">Tốt</option>
                          <option value="damaged">Hư hỏng nhẹ</option>
                          <option value="bad">Hư hỏng nặng</option>
                          <option value="lost">Mất sách</option>
                        </select>
                      </div>

                      <div className={styles.formGroup}>
                        <label htmlFor="fine">Phí phạt (nếu có):</label>
                        <div className={styles.inputWithIcon}>
                          <input type="number" id="fine" defaultValue="0" />
                          <span className={styles.currency}>VNĐ</span>
                        </div>
                      </div>

                      <div className={styles.formGroup}>
                        <label htmlFor="returnNote">Ghi chú:</label>
                        <textarea
                          id="returnNote"
                          placeholder="Nhập ghi chú nếu có"
                        ></textarea>
                      </div>

                      <div className={styles.formActions}>
                        <button
                          type="button"
                          className={styles.cancelBtn}
                          onClick={closeModal}
                        >
                          Hủy
                        </button>
                        <button type="submit" className={styles.submitBtn}>
                          Xác nhận trả sách
                        </button>
                      </div>
                    </form>
                  )}
                </div>
              </div>
            </div>
          )}
        </div>
      </Layout>
    </>
  );
}
