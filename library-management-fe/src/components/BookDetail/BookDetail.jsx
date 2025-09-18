import React from "react";
import styles from "./BookDetail.module.css";
import BookTabs from "../BookTabs/BookTabs";
import BookOverview from "../BookOverview/BookOverview";

export default function BookDetail({ book }) {
  return (
    <>
      <section className={styles.bookDetail}>
        <div className={styles.container}>
          <div className={styles.bookDetailContainer}>
            <BookOverview book={book} />
            <BookTabs book={book} />
          </div>
        </div>
      </section>
    </>
  );
}
