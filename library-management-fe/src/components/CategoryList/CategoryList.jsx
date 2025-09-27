import React, { useState } from "react";
import styles from "./CategoryList.module.css";

export default function CategoryList() {
  const [activeCategory, setActiveCategory] = useState("Tất cả");

  const categories = [
    "Tất cả",
    "Văn học",
    "Kinh tế",
    "Khoa học",
    "Lịch sử",
    "Tâm lý học",
    "Thiếu nhi",
    "Kỹ năng sống",
    "Công nghệ",
    "Sức khỏe",
    "Ngoại ngữ",
    "Giáo dục",
  ];

  const handleCategoryClick = (category) => {
    setActiveCategory(category);

    if (category !== "Tất cả") {
      alert(`Đang hiển thị sách thuộc danh mục: ${category}`);
    }
  };
  return (
    <>
      <section className={styles.bookCategories}>
        <div className="container">
          <h2 className="section-title">Danh mục sách</h2>
          <div className={styles.categoryList}>
            {categories.map((category) => (
              <a
                href="#"
                className={`${styles.categoryTag} ${
                  activeCategory === category ? styles.active : ""
                }`}
                onClick={(e) => {
                  e.preventDefault();
                  handleCategoryClick(category);
                }}
                key={category}
              >
                {category}
              </a>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
