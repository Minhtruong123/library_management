import React, { useState } from "react";
import styles from "./Header.module.css";

export default function Header() {
  const [isNavActive, setIsNavActive] = useState(false);

  const toggleNav = () => {
    setIsNavActive(!isNavActive);
  };
  return (
    <>
      <header className={styles.header}>
        <div className="container">
          <div className={styles.headerContainer}>
            <div className={styles.logo}>
              <h1>
                <i className="fas fa-book-open"></i> Thư viện Thông minh
              </h1>
            </div>
            <nav
              className={`${styles.nav} ${isNavActive ? styles.active : ""}`}
            >
              <ul>
                <li>
                  <a href="index.html" className={styles.active}>
                    Trang chủ
                  </a>
                </li>
                <li>
                  <a href="books.html">Sách</a>
                </li>
                <li>
                  <a href="categories.html">Danh mục</a>
                </li>
                <li>
                  <a href="myaccount.html">Tài khoản</a>
                </li>
                <li>
                  <a href="login.html" className={styles.btnLogin}>
                    Đăng nhập
                  </a>
                </li>
              </ul>
            </nav>
            <div className={styles.mobileToggle} onClick={toggleNav}>
              <i className="fas fa-bars"></i>
            </div>
          </div>
        </div>
      </header>
    </>
  );
}
