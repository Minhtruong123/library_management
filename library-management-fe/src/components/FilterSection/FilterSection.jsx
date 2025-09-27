import React, { useState } from "react";
import styles from "./FilterSection.module.css";

export default function FilterSection() {
  const [filters, setFilters] = useState({
    search: "",
    category: "",
    sort: "newest",
    availability: "",
  });

  const handleInputChange = (e) => {
    const { id, value } = e.target;
    setFilters({
      ...filters,
      [id]: value,
    });
  };

  const handleFilter = () => {
    alert(
      `Đang lọc với các tiêu chí:\nTìm kiếm: ${filters.search}\nThể loại: ${filters.category}\nSắp xếp: ${filters.sort}\nTrạng thái: ${filters.availability}`
    );
  };

  const handleReset = () => {
    setFilters({
      search: "",
      category: "",
      sort: "newest",
      availability: "",
    });
  };
  return (
    <>
      <div className={styles.filterSection}>
        <div className={styles.filterContainer}>
          <div className={styles.filterGroup}>
            <label htmlFor="search">Tìm kiếm</label>
            <input
              type="text"
              id="search"
              placeholder="Nhập tên sách, tác giả..."
              value={filters.search}
              onChange={handleInputChange}
            />
          </div>
          <div className={styles.filterGroup}>
            <label htmlFor="category">Thể loại</label>
            <select
              id="category"
              value={filters.category}
              onChange={handleInputChange}
            >
              <option value="">Tất cả thể loại</option>
              <option value="van-hoc">Văn học</option>
              <option value="kinh-te">Kinh tế</option>
              <option value="khoa-hoc">Khoa học</option>
              <option value="lich-su">Lịch sử</option>
              <option value="tam-ly-hoc">Tâm lý học</option>
              <option value="thieu-nhi">Thiếu nhi</option>
              <option value="ky-nang-song">Kỹ năng sống</option>
              <option value="cong-nghe">Công nghệ</option>
            </select>
          </div>
          <div className={styles.filterGroup}>
            <label htmlFor="sort">Sắp xếp theo</label>
            <select id="sort" value={filters.sort} onChange={handleInputChange}>
              <option value="newest">Mới nhất</option>
              <option value="rating-desc">Đánh giá cao nhất</option>
              <option value="rating-asc">Đánh giá thấp nhất</option>
              <option value="az">A-Z</option>
              <option value="za">Z-A</option>
            </select>
          </div>
          <div className={styles.filterGroup}>
            <label htmlFor="availability">Trạng thái</label>
            <select
              id="availability"
              value={filters.availability}
              onChange={handleInputChange}
            >
              <option value="">Tất cả</option>
              <option value="available">Có sẵn</option>
              <option value="unavailable">Đã mượn hết</option>
            </select>
          </div>
          <div className={styles.filterButtons}>
            <button className={styles.btnFilter} onClick={handleFilter}>
              Lọc kết quả
            </button>
            <button className={styles.btnReset} onClick={handleReset}>
              Đặt lại
            </button>
          </div>
        </div>
      </div>
    </>
  );
}
