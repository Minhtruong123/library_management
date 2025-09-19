import React, { useState } from "react";
import styles from "./Register.module.css";

export default function Register({ onSwitchToLogin }) {
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    password: "",
    confirmPassword: "",
    agreeTerms: false,
  });

  const [errors, setErrors] = useState({});

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData({
      ...formData,
      [name]: type === "checkbox" ? checked : value,
    });

    // Clear error when user starts typing
    if (errors[name]) {
      setErrors({
        ...errors,
        [name]: "",
      });
    }
  };

  const validateForm = () => {
    const newErrors = {};

    if (!formData.fullName.trim()) {
      newErrors.fullName = "Vui lòng nhập họ tên đầy đủ";
    }

    if (!formData.email.trim()) {
      newErrors.email = "Vui lòng nhập email";
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = "Email không hợp lệ";
    }

    if (!formData.password) {
      newErrors.password = "Vui lòng nhập mật khẩu";
    } else if (formData.password.length < 6) {
      newErrors.password = "Mật khẩu phải có ít nhất 6 ký tự";
    }

    if (formData.password !== formData.confirmPassword) {
      newErrors.confirmPassword = "Mật khẩu xác nhận không khớp";
    }

    if (!formData.agreeTerms) {
      newErrors.agreeTerms = "Bạn phải đồng ý với điều khoản sử dụng";
    }

    return newErrors;
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const newErrors = validateForm();
    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
      return;
    }

    console.log("Register form submitted:", formData);
    // Here you would handle registration logic
  };
  return (
    <>
      <div className={styles.registerContainer}>
        <div className={styles.registerHeader}>
          <h2>Đăng ký tài khoản</h2>
          <p>Tạo tài khoản mới tại Thư viện Thông minh</p>
        </div>

        <form className={styles.registerForm} onSubmit={handleSubmit}>
          <div className={styles.formGroup}>
            <label htmlFor="fullName">Họ và tên</label>
            <input
              type="text"
              id="fullName"
              name="fullName"
              placeholder="Nhập họ và tên đầy đủ"
              value={formData.fullName}
              onChange={handleChange}
            />
            {errors.fullName && (
              <div className={styles.error}>{errors.fullName}</div>
            )}
          </div>

          <div className={styles.formGroup}>
            <label htmlFor="email">Email</label>
            <input
              type="email"
              id="email"
              name="email"
              placeholder="Nhập email của bạn"
              value={formData.email}
              onChange={handleChange}
            />
            {errors.email && <div className={styles.error}>{errors.email}</div>}
          </div>

          <div className={styles.formGroup}>
            <label htmlFor="password">Mật khẩu</label>
            <input
              type="password"
              id="password"
              name="password"
              placeholder="Tạo mật khẩu mới"
              value={formData.password}
              onChange={handleChange}
            />
            {errors.password && (
              <div className={styles.error}>{errors.password}</div>
            )}
          </div>

          <div className={styles.formGroup}>
            <label htmlFor="confirmPassword">Xác nhận mật khẩu</label>
            <input
              type="password"
              id="confirmPassword"
              name="confirmPassword"
              placeholder="Nhập lại mật khẩu"
              value={formData.confirmPassword}
              onChange={handleChange}
            />
            {errors.confirmPassword && (
              <div className={styles.error}>{errors.confirmPassword}</div>
            )}
          </div>

          <div className={styles.termsCheckbox}>
            <input
              type="checkbox"
              id="agreeTerms"
              name="agreeTerms"
              checked={formData.agreeTerms}
              onChange={handleChange}
            />
            <label htmlFor="agreeTerms">
              Tôi đồng ý với <a href="#">Điều khoản sử dụng</a> và{" "}
              <a href="#">Chính sách bảo mật</a>
            </label>
            {errors.agreeTerms && (
              <div className={styles.error}>{errors.agreeTerms}</div>
            )}
          </div>

          <button type="submit" className={styles.btnRegister}>
            Đăng ký
          </button>
        </form>

        <div className={styles.registerFooter}>
          <p>
            Đã có tài khoản?{" "}
            <a href="#" onClick={onSwitchToLogin}>
              Đăng nhập
            </a>
          </p>
        </div>

        <div className={styles.socialLogin}>
          <p>Hoặc đăng ký với</p>
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
