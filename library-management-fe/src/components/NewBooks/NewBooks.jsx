import React from "react";
import styles from "./NewBooks.module.css";
import BookCard from "../BookCard/BookCard";

export default function NewBooks() {
  const books = [
    {
      title: "Nghệ thuật tinh tế của việc đếch quan tâm",
      author: "Mark Manson",
      category: "Tâm lý học",
      rating: 4.5,
      available: 3,
      image: "https://via.placeholder.com/150x220",
    },
    {
      title: "Đắc nhân tâm",
      author: "Dale Carnegie",
      category: "Kỹ năng sống",
      rating: 4.8,
      available: 5,
      image: "https://via.placeholder.com/150x220",
    },
    {
      title: "Sapiens: Lược sử loài người",
      author: "Yuval Noah Harari",
      category: "Lịch sử",
      rating: 4.7,
      available: 2,
      image: "https://via.placeholder.com/150x220",
    },
    {
      title: "Atomic Habits",
      author: "James Clear",
      category: "Phát triển bản thân",
      rating: 4.9,
      available: 4,
      image: "https://via.placeholder.com/150x220",
    },
  ];
  return (
    <>
      <section className={styles.newBooks}>
        <div className="container">
          <h2 className={styles.sectionTitle}>Sách mới</h2>
          <div className={styles.booksGrid}>
            {books.map((book, index) => (
              <BookCard key={index} book={book} />
            ))}
          </div>
          <div className={styles.center}>
            <a href="books.html" className={styles.btnViewAll}>
              Xem tất cả
            </a>
          </div>
        </div>
      </section>
    </>
  );
}
