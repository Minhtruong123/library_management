import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import Header from "../Header/Header";
import Footer from "../Footer/Footer";
import styles from "./CategoryPage.module.css";
import * as categoryService from "../../service/categoryService";

export default function CategoryPage() {
  const [categories, setCategories] = useState([]);
  const [loading, setLoading] = useState(true);
  const navigate = useNavigate();

  const fetchApi = async () => {
    try {
      const data = await categoryService.getAllCategories();
      setTimeout(() => {
        setCategories(data);
        setLoading(false);
      }, 800);
    } catch (error) {
      console.error("Error fetching categories:", error);
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchApi();
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
                    <p>{category.description}</p>
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
