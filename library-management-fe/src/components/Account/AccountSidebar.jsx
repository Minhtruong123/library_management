import React from "react";
import styles from "./AccountSidebar.module.css";

export default function AccountSidebar({ activeSection, setActiveSection }) {
  const handleMenuClick = (section) => {
    setActiveSection(section);
  };

  return (
    <>
      <div className={styles.accountSidebar}>
        <div className={styles.userInfo}>
          <div className={styles.userAvatar}>
            <img src="https://via.placeholder.com/100x100" alt="User Avatar" />
          </div>
          <h3 className={styles.userName}>Nguyễn Văn A</h3>
          <p className={styles.userId}>ID: TV-2025-1234</p>
          <span className={styles.membershipStatus}>Thành viên vàng</span>
        </div>

        <div className={styles.sidebarMenu}>
          <h3>Tài khoản</h3>
          <ul>
            <li>
              <a
                href="#"
                className={activeSection === "dashboard" ? styles.active : ""}
                onClick={(e) => {
                  e.preventDefault();
                  handleMenuClick("dashboard");
                }}
              >
                <i className="fas fa-tachometer-alt"></i> Bảng điều khiển
              </a>
            </li>
            <li>
              <a
                href="#"
                className={
                  activeSection === "personal-info" ? styles.active : ""
                }
                onClick={(e) => {
                  e.preventDefault();
                  handleMenuClick("personal-info");
                }}
              >
                <i className="fas fa-user"></i> Thông tin cá nhân
              </a>
            </li>
            <li>
              <a
                href="#"
                className={
                  activeSection === "change-password" ? styles.active : ""
                }
                onClick={(e) => {
                  e.preventDefault();
                  handleMenuClick("change-password");
                }}
              >
                <i className="fas fa-key"></i> Đổi mật khẩu
              </a>
            </li>
          </ul>
        </div>

        <div className={styles.sidebarMenu}>
          <h3>Quản lý sách</h3>
          <ul>
            <li>
              <a href="#">
                <i className="fas fa-book"></i> Sách đang mượn
              </a>
            </li>
            <li>
              <a href="#">
                <i className="fas fa-history"></i> Lịch sử mượn sách
              </a>
            </li>
            <li>
              <a href="#">
                <i className="fas fa-bookmark"></i> Sách đã đặt trước
              </a>
            </li>
            <li>
              <a href="#">
                <i className="fas fa-heart"></i> Sách yêu thích
              </a>
            </li>
          </ul>
        </div>

        <div className={styles.sidebarMenu}>
          <h3>Khác</h3>
          <ul>
            <li>
              <a href="#">
                <i className="fas fa-bell"></i> Thông báo
              </a>
            </li>
            <li>
              <a href="#">
                <i className="fas fa-money-bill-wave"></i> Phí & Thanh toán
              </a>
            </li>
            <li>
              <a href="#">
                <i className="fas fa-question-circle"></i> Trợ giúp
              </a>
            </li>
          </ul>
        </div>

        <button className={styles.btnLogout}>
          <i className="fas fa-sign-out-alt"></i> Đăng xuất
        </button>
      </div>
    </>
  );
}
