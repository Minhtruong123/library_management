import React from "react";
import styles from "./BooksBanner.module.css";

export default function BooksBanner() {
  return (
    <>
      <section className={styles.booksBanner}>
        <div className="container">
          <h2>Kho sách đa dạng</h2>
          <p>
            Khám phá hơn 10,000 đầu sách thuộc nhiều thể loại từ kinh điển đến
            hiện đại
          </p>
        </div>
      </section>
    </>
  );
}
