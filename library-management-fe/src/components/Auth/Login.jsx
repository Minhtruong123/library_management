import React, { useState } from "react";
import styles from "./Login.module.css";

export default function Login({ onSwitchToRegister }) {
  const [formData, setFormData] = useState({
    username: "",
    password: "",
    rememberMe: false,
  });

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData({
      ...formData,
      [name]: type === "checkbox" ? checked : value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Login form submitted:", formData);
  };
  return (
    <>
      <div className={styles.loginContainer}>
        <div className={styles.loginHeader}>
          <h2>Đăng nhập</h2>
          <p>Chào mừng bạn trở lại với Thư viện Thông minh</p>
        </div>

        <form className={styles.loginForm} onSubmit={handleSubmit}>
          <div className={styles.formGroup}>
            <label htmlFor="username">Tên đăng nhập</label>
            <input
              type="text"
              id="username"
              name="username"
              placeholder="Nhập tên đăng nhập của bạn"
              value={formData.username}
              onChange={handleChange}
              required
            />
          </div>

          <div className={styles.formGroup}>
            <label htmlFor="password">Mật khẩu</label>
            <input
              type="password"
              id="password"
              name="password"
              placeholder="Nhập mật khẩu của bạn"
              value={formData.password}
              onChange={handleChange}
              required
            />
          </div>

          <div className={styles.rememberMe}>
            <input
              type="checkbox"
              id="rememberMe"
              name="rememberMe"
              checked={formData.rememberMe}
              onChange={handleChange}
            />
            <label htmlFor="rememberMe">Ghi nhớ đăng nhập</label>
          </div>

          <button type="submit" className={styles.btnLogin}>
            Đăng nhập
          </button>
        </form>

        <div className={styles.loginFooter}>
          <p>
            Quên mật khẩu? <a href="#">Khôi phục mật khẩu</a>
          </p>
          <p>
            Chưa có tài khoản?{" "}
            <a href="#" onClick={onSwitchToRegister}>
              Đăng ký
            </a>
          </p>
        </div>

        <div className={styles.socialLogin}>
          <p>Hoặc đăng nhập với</p>
          <div className={styles.socialLoginButtons}>
            <a href="#" className={`${styles.socialBtn} ${styles.google}`}>
              <i className="fab fa-google"></i>
            </a>
            <a href="#" className={`${styles.socialBtn} ${styles.facebook}`}>
              <i className="fab fa-facebook-f"></i>
            </a>
            <a href="#" className={`${styles.socialBtn} ${styles.twitter}`}>
              <i className="fab fa-twitter"></i>
            </a>
          </div>
        </div>
      </div>
    </>
  );
}
