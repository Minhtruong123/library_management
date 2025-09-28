import React, { useEffect, useState } from "react";
import styles from "./NewBooks.module.css";
import BookCard from "../BookCard/BookCard";
import * as bookService from "../../service/bookService";

export default function NewBooks() {
  const [books, setBooks] = useState([]);

  const fetchApi = async () => {
    try {
      const data = await bookService.getNewBooks();
      setBooks(data);
    } catch (error) {
      console.error("Lỗi load sách mới:", error);
    }
  };

  useEffect(() => {
    fetchApi();
  }, []);

  return (
    <>
      <section className={styles.newBooks}>
        <div className="container">
          <h2 className={styles.sectionTitle}>Sách mới</h2>
          <div className={styles.booksGrid}>
            {books.slice(0, 4).map((book, index) => (
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
