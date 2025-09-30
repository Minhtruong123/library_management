import React from "react";
import styles from "./Sidebar.module.css";

export default function Sidebar({ children }) {
  return (
    <>
      <div className={styles.sidebar}>
        <div className={styles.sidebarHeader}>
          <i className="fas fa-book"></i>
          <h2>Thư viện Thông minh</h2>
        </div>
        <div className={styles.sidebarMenu}>
          <div className={styles.menuCategory}>Chính</div>
          <ul>
            <li>
              <a href="#" className={styles.active}>
                <i className="fas fa-home"></i> <span>Tổng quan</span>
              </a>
            </li>
            <li>
              <a href="#">
                <i className="fas fa-book"></i> <span>Sách</span>
              </a>
            </li>
            <li>
              <a href="#">
                <i className="fas fa-users"></i> <span>Thành viên</span>
              </a>
            </li>
            <li>
              <a href="#">
                <i className="fas fa-exchange-alt"></i> <span>Mượn trả</span>
              </a>
            </li>
            <li>
              <a href="#">
                <i className="fas fa-calendar-alt"></i> <span>Đặt lịch</span>
              </a>
            </li>
          </ul>

          <div className={styles.menuCategory}>Quản lý</div>
          <ul>
            <li>
              <a href="#">
                <i className="fas fa-th-large"></i> <span>Danh mục</span>
              </a>
            </li>
            <li>
              <a href="#">
                <i className="fas fa-building"></i> <span>Nhà xuất bản</span>
              </a>
            </li>
            <li>
              <a href="#">
                <i className="fas fa-pen-fancy"></i> <span>Tác giả</span>
              </a>
            </li>
            <li>
              <a href="#">
                <i className="fas fa-bell"></i> <span>Thông báo</span>
              </a>
            </li>
          </ul>

          <div className={styles.menuCategory}>Cài đặt</div>
          <ul>
            <li>
              <a href="#">
                <i className="fas fa-cog"></i> <span>Thiết lập</span>
              </a>
            </li>
            <li>
              <a href="#">
                <i className="fas fa-user-shield"></i> <span>Phân quyền</span>
              </a>
            </li>
            <li>
              <a href="#">
                <i className="fas fa-sign-out-alt"></i> <span>Đăng xuất</span>
              </a>
            </li>
          </ul>
        </div>
      </div>
    </>
  );
}
