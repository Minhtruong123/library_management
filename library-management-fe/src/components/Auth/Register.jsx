import React, { useState } from "react";
import styles from "./Register.module.css";
import * as authService from "../../service/authService";

export default function Register({ onSwitchToLogin }) {
  const [formData, setFormData] = useState({
    username: "",
    fullName: "",
    email: "",
    phoneNumber: "",
    password: "",
    confirmPassword: "",
    agreeTerms: false,
  });

  const [errors, setErrors] = useState({});
  const [message, setMessage] = useState("");
  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData({
      ...formData,
      [name]: type === "checkbox" ? checked : value,
    });

    if (errors[name]) {
      setErrors({
        ...errors,
        [name]: "",
      });
    }
  };

  const validateForm = () => {
    const newErrors = {};
    if (!formData.username.trim()) {
      newErrors.username = "Vui lòng nhập tên đăng nhập";
    } else if (formData.username.length < 4) {
      newErrors.username = "Tên đăng nhập phải ít nhất 4 ký tự";
    }

    if (!formData.fullName.trim()) {
      newErrors.fullName = "Vui lòng nhập họ tên đầy đủ";
    }

    if (!formData.email.trim()) {
      newErrors.email = "Vui lòng nhập email";
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = "Email không hợp lệ";
    }

    if (!formData.phoneNumber.trim()) {
      newErrors.phoneNumber = "Vui lòng nhập số điện thoại";
    } else if (!/^(0[0-9]{9}|84[0-9]{9})$/.test(formData.phoneNumber)) {
      newErrors.phoneNumber = "Số điện thoại không hợp lệ";
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

  const handleSubmit = async (e) => {
    e.preventDefault();
    setMessage("");

    const newErrors = validateForm();
    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
      return;
    }

    try {
      setLoading(true);

      await authService.register({
        username: formData.username,
        fullName: formData.fullName,
        email: formData.email,
        phoneNumber: formData.phoneNumber,
        password: formData.password,
      });

      setMessage("🎉 Đăng ký thành công! Vui lòng đăng nhập.");
      setFormData({
        username: "",
        fullName: "",
        email: "",
        password: "",
        confirmPassword: "",
        agreeTerms: false,
      });

      if (onSwitchToLogin) {
        onSwitchToLogin();
      }
    } catch (err) {
      setMessage(`❌ ${err.message}`);
    } finally {
      setLoading(false);
    }
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
            <label htmlFor="username">Tên đăng nhập</label>
            <input
              type="text"
              id="username"
              name="username"
              placeholder="Nhập tên đăng nhập"
              value={formData.username}
              onChange={handleChange}
            />
            {errors.username && (
              <div className={styles.error}>{errors.username}</div>
            )}
          </div>
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
            <label htmlFor="phoneNumber">Số điện thoại</label>
            <input
              type="text"
              id="phoneNumber"
              name="phoneNumber"
              placeholder="Nhập số điện thoại"
              value={formData.phoneNumber}
              onChange={handleChange}
            />
            {errors.phoneNumber && (
              <div className={styles.error}>{errors.phoneNumber}</div>
            )}
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

          <button
            type="submit"
            className={styles.btnRegister}
            disabled={loading}
          >
            {loading ? "Đang xử lý..." : "Đăng ký"}
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
