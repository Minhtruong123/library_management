import React from "react";
import styles from "./Footer.module.css";

export default function Footer() {
  return (
    <>
      <footer className={styles.footer}>
        <div className="container">
          <div className={styles.footerContent}>
            <div className={styles.footerSection}>
              <h3>Thư viện Thông minh</h3>
              <p>
                Nơi kết nối tri thức và công nghệ, mang đến trải nghiệm đọc sách
                tốt nhất cho bạn.
              </p>
              <div className={styles.socialLinks}>
                <a href="#">
                  <i className="fab fa-facebook"></i>
                </a>
                <a href="#">
                  <i className="fab fa-twitter"></i>
                </a>
                <a href="#">
                  <i className="fab fa-instagram"></i>
                </a>
                <a href="#">
                  <i className="fab fa-youtube"></i>
                </a>
              </div>
            </div>
            <div className={styles.footerSection}>
              <h3>Liên kết</h3>
              <ul>
                <li>
                  <a href="#">Trang chủ</a>
                </li>
                <li>
                  <a href="#">Sách</a>
                </li>
                <li>
                  <a href="#">Danh mục</a>
                </li>
                <li>
                  <a href="#">Tài khoản</a>
                </li>
                <li>
                  <a href="#">Giới thiệu</a>
                </li>
                <li>
                  <a href="#">Liên hệ</a>
                </li>
              </ul>
            </div>
            <div className={styles.footerSection}>
              <h3>Liên hệ</h3>
              <p>
                <i className="fas fa-map-marker-alt"></i> 123 Bạch Đằng, Q.Hải
                Châu, TP.Đà Nẵng
              </p>
              <p>
                <i className="fas fa-phone"></i> (028) 1234 5678
              </p>
              <p>
                <i className="fas fa-envelope"></i> info@thuvienthongminh.vn
              </p>
            </div>
            <div className={styles.footerSection}>
              <h3>Giờ làm việc</h3>
              <p>Thứ Hai - Thứ Sáu: 8:00 - 21:00</p>
              <p>Thứ Bảy: 9:00 - 19:00</p>
              <p>Chủ Nhật: 9:00 - 17:00</p>
            </div>
          </div>
          <div className={styles.footerBottom}>
            <p>&copy; 2025 Thư viện Thông minh. Tất cả quyền được bảo lưu.</p>
          </div>
        </div>
      </footer>
    </>
  );
}
