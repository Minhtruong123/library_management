import React, { useState } from "react";
import styles from "./ChangePassword.module.css";
import * as userService from "../../service/userService";

export default function ChangePassword() {
  const [formData, setFormData] = useState({
    currentPassword: "",
    newPassword: "",
    confirmPassword: "",
  });

  const [showPasswords, setShowPasswords] = useState({
    current: false,
    new: false,
    confirm: false,
  });

  const [errors, setErrors] = useState({});
  const [passwordStrength, setPasswordStrength] = useState({
    score: 0,
    feedback: "",
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));

    if (errors[name]) {
      setErrors((prev) => ({
        ...prev,
        [name]: "",
      }));
    }

    if (name === "newPassword") {
      checkPasswordStrength(value);
    }
  };

  const togglePasswordVisibility = (field) => {
    setShowPasswords((prev) => ({
      ...prev,
      [field]: !prev[field],
    }));
  };

  const checkPasswordStrength = (password) => {
    let score = 0;
    let feedback = "";

    if (password.length >= 8) score++;
    if (/[a-z]/.test(password)) score++;
    if (/[A-Z]/.test(password)) score++;
    if (/[0-9]/.test(password)) score++;
    if (/[^A-Za-z0-9]/.test(password)) score++;

    switch (score) {
      case 0:
      case 1:
        feedback = "Rất yếu";
        break;
      case 2:
        feedback = "Yếu";
        break;
      case 3:
        feedback = "Trung bình";
        break;
      case 4:
        feedback = "Mạnh";
        break;
      case 5:
        feedback = "Rất mạnh";
        break;
      default:
        feedback = "";
    }

    setPasswordStrength({ score, feedback });
  };

  const validateForm = () => {
    const newErrors = {};

    if (!formData.currentPassword) {
      newErrors.currentPassword = "Vui lòng nhập mật khẩu hiện tại";
    }

    if (!formData.newPassword) {
      newErrors.newPassword = "Vui lòng nhập mật khẩu mới";
    } else if (formData.newPassword.length < 8) {
      newErrors.newPassword = "Mật khẩu phải có ít nhất 8 ký tự";
    }

    if (!formData.confirmPassword) {
      newErrors.confirmPassword = "Vui lòng xác nhận mật khẩu mới";
    } else if (formData.newPassword !== formData.confirmPassword) {
      newErrors.confirmPassword = "Mật khẩu xác nhận không khớp";
    }

    if (formData.currentPassword === formData.newPassword) {
      newErrors.newPassword = "Mật khẩu mới phải khác mật khẩu hiện tại";
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (validateForm()) {
      try {
        const res = await userService.changePassword(
          formData.currentPassword,
          formData.newPassword
        );
        alert("Đổi mật khẩu thành công!");

        setFormData({
          currentPassword: "",
          newPassword: "",
          confirmPassword: "",
        });
        setPasswordStrength({ score: 0, feedback: "" });
      } catch (error) {
        alert("Đổi mật khẩu thất bại!");
      }
    }
  };

  const getStrengthColor = () => {
    switch (passwordStrength.score) {
      case 0:
      case 1:
        return "#dc3545";
      case 2:
        return "#fd7e14";
      case 3:
        return "#ffc107";
      case 4:
        return "#198754";
      case 5:
        return "#20c997";
      default:
        return "#e9ecef";
    }
  };
  return (
    <>
      <div className={styles.changePassword}>
        <div className={styles.contentHeader}>
          <h2>Đổi mật khẩu</h2>
          <p>Cập nhật mật khẩu để bảo vệ tài khoản của bạn</p>
        </div>

        <div className={styles.passwordCard}>
          <div className={styles.securityTips}>
            <h3>
              <i className="fas fa-shield-alt"></i> Mẹo bảo mật
            </h3>
            <ul>
              <li>Sử dụng ít nhất 8 ký tự</li>
              <li>Kết hợp chữ hoa, chữ thường, số và ký tự đặc biệt</li>
              <li>Không sử dụng thông tin cá nhân dễ đoán</li>
              <li>Đổi mật khẩu định kỳ</li>
            </ul>
          </div>

          <form onSubmit={handleSubmit} className={styles.passwordForm}>
            <div className={styles.formGroup}>
              <label htmlFor="currentPassword">Mật khẩu hiện tại</label>
              <div className={styles.passwordInput}>
                <input
                  type={showPasswords.current ? "text" : "password"}
                  id="currentPassword"
                  name="currentPassword"
                  value={formData.currentPassword}
                  onChange={handleInputChange}
                  className={errors.currentPassword ? styles.error : ""}
                  placeholder="Nhập mật khẩu hiện tại"
                />
                <button
                  type="button"
                  className={styles.togglePassword}
                  onClick={() => togglePasswordVisibility("current")}
                >
                  <i
                    className={`fas ${
                      showPasswords.current ? "fa-eye-slash" : "fa-eye"
                    }`}
                  ></i>
                </button>
              </div>
              {errors.currentPassword && (
                <span className={styles.errorMessage}>
                  {errors.currentPassword}
                </span>
              )}
            </div>

            <div className={styles.formGroup}>
              <label htmlFor="newPassword">Mật khẩu mới</label>
              <div className={styles.passwordInput}>
                <input
                  type={showPasswords.new ? "text" : "password"}
                  id="newPassword"
                  name="newPassword"
                  value={formData.newPassword}
                  onChange={handleInputChange}
                  className={errors.newPassword ? styles.error : ""}
                  placeholder="Nhập mật khẩu mới"
                />
                <button
                  type="button"
                  className={styles.togglePassword}
                  onClick={() => togglePasswordVisibility("new")}
                >
                  <i
                    className={`fas ${
                      showPasswords.new ? "fa-eye-slash" : "fa-eye"
                    }`}
                  ></i>
                </button>
              </div>
              {formData.newPassword && (
                <div className={styles.passwordStrength}>
                  <div className={styles.strengthBar}>
                    <div
                      className={styles.strengthFill}
                      style={{
                        width: `${(passwordStrength.score / 5) * 100}%`,
                        backgroundColor: getStrengthColor(),
                      }}
                    ></div>
                  </div>
                  <span
                    className={styles.strengthText}
                    style={{ color: getStrengthColor() }}
                  >
                    {passwordStrength.feedback}
                  </span>
                </div>
              )}
              {errors.newPassword && (
                <span className={styles.errorMessage}>
                  {errors.newPassword}
                </span>
              )}
            </div>

            <div className={styles.formGroup}>
              <label htmlFor="confirmPassword">Xác nhận mật khẩu mới</label>
              <div className={styles.passwordInput}>
                <input
                  type={showPasswords.confirm ? "text" : "password"}
                  id="confirmPassword"
                  name="confirmPassword"
                  value={formData.confirmPassword}
                  onChange={handleInputChange}
                  className={errors.confirmPassword ? styles.error : ""}
                  placeholder="Nhập lại mật khẩu mới"
                />
                <button
                  type="button"
                  className={styles.togglePassword}
                  onClick={() => togglePasswordVisibility("confirm")}
                >
                  <i
                    className={`fas ${
                      showPasswords.confirm ? "fa-eye-slash" : "fa-eye"
                    }`}
                  ></i>
                </button>
              </div>
              {errors.confirmPassword && (
                <span className={styles.errorMessage}>
                  {errors.confirmPassword}
                </span>
              )}
            </div>

            <div className={styles.formActions}>
              <button type="submit" className={styles.updateBtn}>
                <i className="fas fa-key"></i> Cập nhật mật khẩu
              </button>
            </div>
          </form>
        </div>

        <div className={styles.securityInfo}>
          <div className={styles.infoHeader}>
            <h3>
              <i className="fas fa-info-circle"></i> Thông tin bảo mật
            </h3>
          </div>
          <div className={styles.infoContent}>
            <div className={styles.infoItem}>
              <span className={styles.label}>Lần đổi mật khẩu cuối:</span>
              <span className={styles.value}>15/08/2025</span>
            </div>
            <div className={styles.infoItem}>
              <span className={styles.label}>Đăng nhập cuối:</span>
              <span className={styles.value}>23/09/2025 - 14:30</span>
            </div>
            <div className={styles.infoItem}>
              <span className={styles.label}>Thiết bị:</span>
              <span className={styles.value}>Chrome trên Windows</span>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
