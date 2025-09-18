import React from "react";
import styles from "./Hero.module.css";

export default function Hero() {
  const handleSearch = (e) => {
    if (e.key === "Enter") {
      const searchTerm = e.target.value.toLowerCase().trim();
      if (searchTerm === "") return;

      alert(`Đang tìm kiếm: "${searchTerm}"`);
      // Thông thường sẽ chuyển hướng: window.location.href = `books.html?search=${encodeURIComponent(searchTerm)}`;
    }
  };
  return (
    <>
      <section className={styles.hero}>
        <div className="container">
          <div className={styles.heroContent}>
            <h2>Khám phá thế giới tri thức</h2>
            <p>
              Hơn 10,000 đầu sách trong nhiều lĩnh vực khác nhau đang chờ bạn
              khám phá
            </p>
            <div className={styles.searchBox}>
              <input
                type="text"
                placeholder="Tìm kiếm sách, tác giả, danh mục..."
                onKeyPress={handleSearch}
              />
              <button>
                <i className="fas fa-search"></i>
              </button>
            </div>
            <div className={styles.featuredCategories}>
              <span>Danh mục nổi bật:</span>
              <a href="#">Văn học</a>
              <a href="#">Khoa học</a>
              <a href="#">Kinh tế</a>
              <a href="#">Tâm lý học</a>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
