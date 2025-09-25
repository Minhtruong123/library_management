import React, { useState } from "react";
import BookList from "../Admin/dashboard/BookList/BookList";
import BookModal from "../Admin/dashboard/BookList/BookModal";
import styles from "./BookManagement.module.css";
import Layout from "../Admin/layout/Layout";

export default function BookManagement() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [modalMode, setModalMode] = useState("add");
  const [selectedBook, setSelectedBook] = useState(null);
  const [filters, setFilters] = useState({
    category: "",
    author: "",
    publisher: "",
    status: "",
  });

  const handleOpenModal = (mode, book = null) => {
    setModalMode(mode);
    setSelectedBook(book);
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
    setSelectedBook(null);
  };

  const handleFilterChange = (e) => {
    const { name, value } = e.target;
    setFilters({
      ...filters,
      [name]: value,
    });
  };

  const handleResetFilters = () => {
    setFilters({
      category: "",
      author: "",
      publisher: "",
      status: "",
    });
  };

  const handleApplyFilters = () => {
    console.log("Filtering with:", filters);
  };
  return (
    <>
      <Layout>
        <div>
          <div className={styles.pageHeader}>
            <div className={styles.title}>
              <h1>Quản lý Sách</h1>
              <p>Quản lý toàn bộ sách trong thư viện</p>
            </div>
            <div className={styles.pageActions}>
              <button
                className={`${styles.btn} ${styles.btnSuccess}`}
                id="import-btn"
              >
                <i className="fas fa-file-import"></i> Nhập Excel
              </button>
              <button
                className={`${styles.btn} ${styles.btnPrimary}`}
                onClick={() => handleOpenModal("add")}
              >
                <i className="fas fa-plus"></i> Thêm sách mới
              </button>
            </div>
          </div>

          <div className={styles.filters}>
            <div className={styles.filterItem}>
              <label htmlFor="category">Danh mục</label>
              <select
                id="category"
                name="category"
                value={filters.category}
                onChange={handleFilterChange}
              >
                <option value="">Tất cả danh mục</option>
                <option value="1">Văn học Việt Nam</option>
                <option value="2">Văn học nước ngoài</option>
                <option value="3">Khoa học - Kỹ thuật</option>
                <option value="4">Kinh tế - Quản lý</option>
                <option value="5">Giáo trình</option>
                <option value="6">Sách thiếu nhi</option>
              </select>
            </div>
            <div className={styles.filterItem}>
              <label htmlFor="author">Tác giả</label>
              <select
                id="author"
                name="author"
                value={filters.author}
                onChange={handleFilterChange}
              >
                <option value="">Tất cả tác giả</option>
                <option value="1">Tô Hoài</option>
                <option value="2">Nguyễn Nhật Ánh</option>
                <option value="3">Paulo Coelho</option>
                <option value="4">Dale Carnegie</option>
                <option value="5">J.K. Rowling</option>
              </select>
            </div>
            <div className={styles.filterItem}>
              <label htmlFor="publisher">Nhà xuất bản</label>
              <select
                id="publisher"
                name="publisher"
                value={filters.publisher}
                onChange={handleFilterChange}
              >
                <option value="">Tất cả NXB</option>
                <option value="1">NXB Kim Đồng</option>
                <option value="2">NXB Trẻ</option>
                <option value="3">NXB Giáo dục</option>
                <option value="4">NXB Tổng hợp TP.HCM</option>
                <option value="5">NXB Hội Nhà văn</option>
              </select>
            </div>
            <div className={styles.filterItem}>
              <label htmlFor="status">Trạng thái</label>
              <select
                id="status"
                name="status"
                value={filters.status}
                onChange={handleFilterChange}
              >
                <option value="">Tất cả trạng thái</option>
                <option value="available">Có sẵn</option>
                <option value="borrowed">Đang mượn</option>
                <option value="overdue">Quá hạn</option>
                <option value="reserved">Đã đặt trước</option>
              </select>
            </div>
            <div className={styles.filterActions}>
              <button
                className={`${styles.btn} ${styles.btnPrimary}`}
                onClick={handleApplyFilters}
              >
                <i className="fas fa-filter"></i> Lọc
              </button>
              <button
                className={`${styles.btn} ${styles.btnSecondary}`}
                onClick={handleResetFilters}
              >
                <i className="fas fa-redo"></i> Đặt lại
              </button>
            </div>
          </div>

          <BookList onEditBook={(book) => handleOpenModal("edit", book)} />

          {isModalOpen && (
            <BookModal
              isOpen={isModalOpen}
              onClose={handleCloseModal}
              mode={modalMode}
              book={selectedBook}
            />
          )}
        </div>
      </Layout>
    </>
  );
}
