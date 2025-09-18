import React from "react";
import styles from "./HowItWorks.module.css";

export default function HowItWorks() {
  return (
    <>
      <section className={styles.howItWorks}>
        <div className="container">
          <h2 className={styles.sectionTitle}>Cách mượn sách</h2>
          <div className={styles.steps}>
            <div className={styles.step}>
              <div className={styles.stepIcon}>
                <i className="fas fa-search"></i>
              </div>
              <h3>Tìm sách</h3>
              <p>Tìm kiếm sách yêu thích từ bộ sưu tập đa dạng của chúng tôi</p>
            </div>
            <div className={styles.step}>
              <div className={styles.stepIcon}>
                <i className="fas fa-calendar-check"></i>
              </div>
              <h3>Đặt trước</h3>
              <p>Đặt sách trực tuyến hoặc sử dụng trợ lý AI để đặt</p>
            </div>
            <div className={styles.step}>
              <div className={styles.stepIcon}>
                <i className="fas fa-book-reader"></i>
              </div>
              <h3>Nhận sách</h3>
              <p>Đến thư viện và nhận sách từ quầy phục vụ</p>
            </div>
            <div className={styles.step}>
              <div className={styles.stepIcon}>
                <i className="fas fa-undo"></i>
              </div>
              <h3>Trả sách</h3>
              <p>Trả sách đúng hạn hoặc gia hạn trực tuyến</p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
