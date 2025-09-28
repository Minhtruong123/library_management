import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import Header from "../Header/Header";
import Footer from "../Footer/Footer";
import styles from "./CategoryPage.module.css";

export default function CategoryPage() {
  const [categories, setCategories] = useState([]);
  const [loading, setLoading] = useState(true);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchCategories = async () => {
      try {
        setTimeout(() => {
          const mockCategories = [
            { id: 1, name: "Văn học", count: 253 },
            { id: 2, name: "Khoa học", count: 187 },
            { id: 3, name: "Lịch sử", count: 142 },
            { id: 4, name: "Kinh tế", count: 201 },
            { id: 5, name: "Tâm lý học", count: 167 },
            { id: 6, name: "Kỹ năng sống", count: 156 },
            { id: 7, name: "Công nghệ", count: 198 },
            { id: 8, name: "Giáo dục", count: 134 },
          ];
          setCategories(mockCategories);
          setLoading(false);
        }, 800);
      } catch (error) {
        console.error("Error fetching categories:", error);
        setLoading(false);
      }
    };

    fetchCategories();
  }, []);

  const handleCategoryClick = (categoryId) => {
    navigate(`/books?category=${categoryId}`);
  };
  return (
    <>
      <Header />
      <section className={styles.categoriesSection}>
        <div className="container">
          <div className={styles.sectionHeader}>
            <h2>Danh mục sách</h2>
            <p>Khám phá sách theo chủ đề yêu thích của bạn</p>
          </div>

          {loading ? (
            <div className={styles.loadingContainer}>
              <i className="fas fa-spinner fa-spin"></i>
              <p>Đang tải danh mục...</p>
            </div>
          ) : (
            <div className={styles.categoriesGrid}>
              {categories.map((category) => (
                <div
                  key={category.id}
                  className={styles.categoryCard}
                  onClick={() => handleCategoryClick(category.id)}
                >
                  <div className={styles.categoryInfo}>
                    <h3>{category.name}</h3>
                    <p>{category.count} cuốn sách</p>
                  </div>
                  <div className={styles.categoryIcon}>
                    <i className="fas fa-chevron-right"></i>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
      </section>
      <Footer />
    </>
  );
}
