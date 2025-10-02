import React, { useEffect, useState } from "react";
import styles from "./PersonalInfo.module.css";
import * as userService from "../../service/userService";

export default function PersonalInfo() {
  const [isEditing, setIsEditing] = useState(false);
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    phoneNumber: "",
    dateOfBirth: "",
    gender: "",
    job: "",
    address: "",
    favoriteCategories: "",
    image: "",
  });

  const fetchApi = async () => {
    try {
      const data = await userService.getCurrentUser();
      setFormData(data);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    fetchApi();
  }, []);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const payload = {
        address: formData.address || "",
        dateOfBirth: formData.dateOfBirth ? formData.dateOfBirth : null,
        email: formData.email,
        favoriteCategoryIds: [],
        fullName: formData.fullName,
        gender: formData.gender ? formData.gender.toUpperCase() : "MALE",
        image: formData.image,
        job: formData.job || "",
        phoneNumber: formData.phoneNumber,
      };
      console.log(payload);

      const updatedUser = await userService.updateUser(payload);

      await fetchApi();
      setFormData(updatedUser);
      setIsEditing(false);
      alert("Cập nhật thông tin thành công!");
    } catch (error) {
      console.error("Lỗi khi cập nhật user:", error);
      alert("Cập nhật thất bại, vui lòng thử lại!");
    }
  };

  const handleCancel = () => {
    setIsEditing(false);
  };
  return (
    <>
      <div className={styles.personalInfo}>
        <div className={styles.contentHeader}>
          <h2>Thông tin cá nhân</h2>
          <p>Quản lý thông tin cá nhân của bạn</p>
        </div>

        <div className={styles.infoCard}>
          <div className={styles.cardHeader}>
            <h3>Thông tin chi tiết</h3>
            {!isEditing && (
              <button
                className={styles.editBtn}
                onClick={() => setIsEditing(true)}
              >
                <i className="fas fa-edit"></i> Chỉnh sửa
              </button>
            )}
          </div>

          <form onSubmit={handleSubmit} className={styles.infoForm}>
            <div className={styles.avatarSection}>
              <div className={styles.avatarContainer}>
                {/* <img
                  src={
                    formData?.image && formData?.image.trim() !== ""
                      ? formData?.image
                      : "https://placehold.co/120x120"
                  }
                  alt="Avatar"
                  className={styles.avatar}
                /> */}
                {isEditing && (
                  <div className={styles.avatarInputGroup}>
                    <i className="fas fa-camera"></i>
                    <input
                      type="text"
                      id="image"
                      name="image"
                      value={formData?.image}
                      onChange={handleInputChange}
                      placeholder="Nhập link ảnh avatar..."
                      className={styles.avatarInput}
                    />
                  </div>
                )}
              </div>
            </div>

            <div className={styles.formGrid}>
              <div className={styles.formGroup}>
                <label htmlFor="fullName">Họ và tên</label>
                <input
                  type="text"
                  id="fullName"
                  name="fullName"
                  value={formData?.fullName}
                  onChange={handleInputChange}
                  disabled={!isEditing}
                  required
                />
              </div>

              <div className={styles.formGroup}>
                <label htmlFor="email">Email</label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData?.email}
                  onChange={handleInputChange}
                  disabled={!isEditing}
                  required
                />
              </div>

              <div className={styles.formGroup}>
                <label htmlFor="phoneNumber">Số điện thoại</label>
                <input
                  type="tel"
                  id="phoneNumber"
                  name="phoneNumber"
                  value={formData?.phoneNumber}
                  onChange={handleInputChange}
                  disabled={!isEditing}
                  required
                />
              </div>

              <div className={styles.formGroup}>
                <label htmlFor="dateOfBirth">Ngày sinh</label>
                <input
                  type="date"
                  id="dateOfBirth"
                  name="dateOfBirth"
                  value={formData?.dateOfBirth}
                  onChange={handleInputChange}
                  disabled={!isEditing}
                />
              </div>

              <div className={styles.formGroup}>
                <label htmlFor="gender">Giới tính</label>
                <select
                  id="gender"
                  name="gender"
                  value={formData?.gender}
                  onChange={handleInputChange}
                  disabled={!isEditing}
                >
                  <option value="male">Nam</option>
                  <option value="female">Nữ</option>
                  <option value="other">Khác</option>
                </select>
              </div>

              <div className={styles.formGroup}>
                <label htmlFor="job">Nghề nghiệp</label>
                <input
                  type="text"
                  id="job"
                  name="job"
                  value={formData?.job}
                  onChange={handleInputChange}
                  disabled={!isEditing}
                />
              </div>

              <div className={`${styles.formGroup} ${styles.fullWidth}`}>
                <label htmlFor="address">Địa chỉ</label>
                <input
                  type="text"
                  id="address"
                  name="address"
                  value={formData?.address}
                  onChange={handleInputChange}
                  disabled={!isEditing}
                />
              </div>

              <div className={`${styles.formGroup} ${styles.fullWidth}`}>
                <label htmlFor="favoriteCategories">Sở thích đọc sách</label>
                <textarea
                  id="favoriteCategories"
                  name="favoriteCategories"
                  value={formData?.favoriteCategories}
                  onChange={handleInputChange}
                  disabled={!isEditing}
                  rows="3"
                  placeholder="Mô tả các thể loại sách bạn yêu thích..."
                />
              </div>
            </div>

            {isEditing && (
              <div className={styles.formActions}>
                <button type="submit" className={styles.saveBtn}>
                  <i className="fas fa-save"></i> Lưu thay đổi
                </button>
                <button
                  type="button"
                  className={styles.cancelBtn}
                  onClick={handleCancel}
                >
                  <i className="fas fa-times"></i> Hủy
                </button>
              </div>
            )}
          </form>
        </div>

        <div className={styles.membershipCard}>
          <div className={styles.cardHeader}>
            <h3>Thông tin thành viên</h3>
          </div>
          <div className={styles.membershipDetails}>
            <div className={styles.membershipItem}>
              <span className={styles.label}>Mã thành viên:</span>
              <span className={styles.value}>TV-2025-1234</span>
            </div>
            <div className={styles.membershipItem}>
              <span className={styles.label}>Loại thành viên:</span>
              <span className={`${styles.value} ${styles.goldMember}`}>
                Thành viên vàng
              </span>
            </div>
            <div className={styles.membershipItem}>
              <span className={styles.label}>Ngày gia nhập:</span>
              <span className={styles.value}>15/01/2020</span>
            </div>
            <div className={styles.membershipItem}>
              <span className={styles.label}>Hạn thẻ:</span>
              <span className={styles.value}>15/01/2026</span>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
