import React, { useState } from "react";
import styles from "./Header.module.css";
import { NavLink, Link, Route, Routes } from "react-router-dom";

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
                  <NavLink
                    to="/"
                    className={({ isActive }) =>
                      isActive ? styles.active : undefined
                    }
                  >
                    Trang chủ
                  </NavLink>
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
                  <NavLink to="/auth" className={styles.btnLogin}>
                    Đăng nhập
                  </NavLink>
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
