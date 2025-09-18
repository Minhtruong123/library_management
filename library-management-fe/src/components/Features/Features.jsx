import React from "react";
import styles from "./Features.module.css";

export default function Features() {
  return (
    <>
      <section className={styles.features}>
        <div className="container">
          <div className={styles.featuresGrid}>
            <div className={styles.featureItem}>
              <i className="fas fa-book"></i>
              <h3>10,000+ Sách</h3>
              <p>Đa dạng thể loại và chủ đề</p>
            </div>
            <div className={styles.featureItem}>
              <i className="fas fa-robot"></i>
              <h3>Trợ lý AI</h3>
              <p>Hỗ trợ tìm kiếm và gợi ý sách phù hợp</p>
            </div>
            <div className={styles.featureItem}>
              <i className="fas fa-mobile-alt"></i>
              <h3>Đa nền tảng</h3>
              <p>Truy cập mọi lúc, mọi nơi</p>
            </div>
            <div className={styles.featureItem}>
              <i className="fas fa-clock"></i>
              <h3>24/7</h3>
              <p>Hỗ trợ mọi lúc bạn cần</p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
