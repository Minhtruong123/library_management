import React, { useState, useEffect } from "react";
import styles from "./BookModal.module.css";

export default function BookModal({ isOpen, onClose, mode, book }) {
  const [formData, setFormData] = useState({
    title: "",
    isbn: "",
    author: "",
    category: "",
    publisher: "",
    year: "",
    quantity: "",
    location: "",
    description: "",
  });

  useEffect(() => {
    if (mode === "edit" && book) {
      setFormData({
        title: book.title || "",
        isbn: book.isbn || "",
        author: book.author || "",
        category: book.category || "",
        publisher: book.publisher || "",
        year: book.year || "",
        quantity: book.quantity || "",
        location: book.location || "",
        description: book.description || "",
      });
    }
  }, [mode, book]);

  const handleChange = (e) => {
    const { id, value } = e.target;
    setFormData({
      ...formData,
      [id.replace("book-", "")]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form data:", formData);
    onClose();
  };

  if (!isOpen) return null;
  return (
    <>
      <div className={styles.modalBackdrop}>
        <div className={styles.modal}>
          <div className={styles.modalHeader}>
            <h3>{mode === "add" ? "Thêm sách mới" : "Chỉnh sửa sách"}</h3>
            <button className={styles.modalClose} onClick={onClose}>
              <i className="fas fa-times"></i>
            </button>
          </div>
          <form onSubmit={handleSubmit}>
            <div className={styles.modalBody}>
              <div className={styles.formRow}>
                <div className={styles.formGroup}>
                  <label htmlFor="book-title">Tiêu đề</label>
                  <input
                    type="text"
                    id="book-title"
                    placeholder="Nhập tiêu đề sách"
                    value={formData.title}
                    onChange={handleChange}
                    required
                  />
                </div>
                <div className={styles.formGroup}>
                  <label htmlFor="book-isbn">Mã ISBN</label>
                  <input
                    type="text"
                    id="book-isbn"
                    placeholder="Nhập mã ISBN"
                    value={formData.isbn}
                    onChange={handleChange}
                  />
                </div>
              </div>
              <div className={styles.formRow}>
                <div className={styles.formGroup}>
                  <label htmlFor="book-author">Tác giả</label>
                  <select
                    id="book-author"
                    value={formData.author}
                    onChange={handleChange}
                    required
                  >
                    <option value="">Chọn tác giả</option>
                    <option value="Tô Hoài">Tô Hoài</option>
                    <option value="Nguyễn Nhật Ánh">Nguyễn Nhật Ánh</option>
                    <option value="Paulo Coelho">Paulo Coelho</option>
                    <option value="Dale Carnegie">Dale Carnegie</option>
                    <option value="J.K. Rowling">J.K. Rowling</option>
                  </select>
                </div>
                <div className={styles.formGroup}>
                  <label htmlFor="book-category">Danh mục</label>
                  <select
                    id="book-category"
                    value={formData.category}
                    onChange={handleChange}
                    required
                  >
                    <option value="">Chọn danh mục</option>
                    <option value="Văn học Việt Nam">Văn học Việt Nam</option>
                    <option value="Văn học nước ngoài">
                      Văn học nước ngoài
                    </option>
                    <option value="Khoa học - Kỹ thuật">
                      Khoa học - Kỹ thuật
                    </option>
                    <option value="Kinh tế - Quản lý">Kinh tế - Quản lý</option>
                    <option value="Giáo trình">Giáo trình</option>
                    <option value="Sách thiếu nhi">Sách thiếu nhi</option>
                  </select>
                </div>
              </div>
              <div className={styles.formRow}>
                <div className={styles.formGroup}>
                  <label htmlFor="book-publisher">Nhà xuất bản</label>
                  <select
                    id="book-publisher"
                    value={formData.publisher}
                    onChange={handleChange}
                    required
                  >
                    <option value="">Chọn nhà xuất bản</option>
                    <option value="NXB Kim Đồng">NXB Kim Đồng</option>
                    <option value="NXB Trẻ">NXB Trẻ</option>
                    <option value="NXB Giáo dục">NXB Giáo dục</option>
                    <option value="NXB Tổng hợp TP.HCM">
                      NXB Tổng hợp TP.HCM
                    </option>
                    <option value="NXB Hội Nhà văn">NXB Hội Nhà văn</option>
                  </select>
                </div>
                <div className={styles.formGroup}>
                  <label htmlFor="book-year">Năm xuất bản</label>
                  <input
                    type="number"
                    id="book-year"
                    placeholder="Nhập năm xuất bản"
                    value={formData.year}
                    onChange={handleChange}
                    min="1900"
                    max={new Date().getFullYear()}
                  />
                </div>
              </div>
              <div className={styles.formRow}>
                <div className={styles.formGroup}>
                  <label htmlFor="book-quantity">Số lượng</label>
                  <input
                    type="number"
                    id="book-quantity"
                    placeholder="Nhập số lượng"
                    value={formData.quantity}
                    onChange={handleChange}
                    min="0"
                  />
                </div>
                <div className={styles.formGroup}>
                  <label htmlFor="book-location">Vị trí</label>
                  <input
                    type="text"
                    id="book-location"
                    placeholder="Nhập vị trí sách"
                    value={formData.location}
                    onChange={handleChange}
                  />
                </div>
              </div>
              <div className={styles.formGroup}>
                <label htmlFor="book-cover">Ảnh bìa</label>
                <input type="file" id="book-cover" accept="image/*" />
              </div>
              <div className={styles.formGroup}>
                <label htmlFor="book-description">Mô tả</label>
                <textarea
                  id="book-description"
                  placeholder="Nhập mô tả sách"
                  value={formData.description}
                  onChange={handleChange}
                ></textarea>
              </div>
            </div>
            <div className={styles.modalFooter}>
              <button
                type="button"
                className={`${styles.btn} ${styles.btnSecondary}`}
                onClick={onClose}
              >
                Hủy
              </button>
              <button
                type="submit"
                className={`${styles.btn} ${styles.btnPrimary}`}
              >
                {mode === "add" ? "Thêm" : "Lưu"}
              </button>
            </div>
          </form>
        </div>
      </div>
    </>
  );
}
