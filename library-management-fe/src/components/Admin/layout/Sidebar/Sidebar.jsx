import React, { useState } from "react";
import styles from "./Sidebar.module.css";
import { Link, useLocation } from "react-router-dom";

export default function Sidebar() {
  const location = useLocation();
  const [activeItem, setActiveItem] = useState("dashboard");

  const handleItemClick = (item) => {
    setActiveItem(item);
  };
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
              <Link
                to="/dashboard"
                className={
                  location.pathname === "/dashboard" ? styles.active : ""
                }
              >
                <i className="fas fa-home"></i> <span>Tổng quan</span>
              </Link>
            </li>
            <li>
              <Link
                to="/bookmanagement"
                className={
                  location.pathname === "/bookmanagement" ? styles.active : ""
                }
              >
                <i className="fas fa-book"></i> <span>Sách</span>
              </Link>
            </li>
            <li>
              <a
                href="#"
                className={activeItem === "members" ? styles.active : ""}
                onClick={() => handleItemClick("members")}
              >
                <i className="fas fa-users"></i> <span>Thành viên</span>
              </a>
            </li>
            <li>
              <a
                href="#"
                className={activeItem === "loans" ? styles.active : ""}
                onClick={() => handleItemClick("loans")}
              >
                <i className="fas fa-exchange-alt"></i> <span>Mượn trả</span>
              </a>
            </li>
            <li>
              <a
                href="#"
                className={activeItem === "schedule" ? styles.active : ""}
                onClick={() => handleItemClick("schedule")}
              >
                <i className="fas fa-calendar-alt"></i> <span>Đặt lịch</span>
              </a>
            </li>
          </ul>
          <div className={styles.menuCategory}>Quản lý</div>
          <ul>
            <li>
              <a
                href="#"
                className={activeItem === "categories" ? styles.active : ""}
                onClick={() => handleItemClick("categories")}
              >
                <i className="fas fa-th-large"></i> <span>Danh mục</span>
              </a>
            </li>
            <li>
              <a
                href="#"
                className={activeItem === "publishers" ? styles.active : ""}
                onClick={() => handleItemClick("publishers")}
              >
                <i className="fas fa-building"></i> <span>Nhà xuất bản</span>
              </a>
            </li>
            <li>
              <a
                href="#"
                className={activeItem === "authors" ? styles.active : ""}
                onClick={() => handleItemClick("authors")}
              >
                <i className="fas fa-pen-fancy"></i> <span>Tác giả</span>
              </a>
            </li>
            <li>
              <a
                href="#"
                className={activeItem === "notifications" ? styles.active : ""}
                onClick={() => handleItemClick("notifications")}
              >
                <i className="fas fa-bell"></i> <span>Thông báo</span>
              </a>
            </li>
          </ul>
          <div className={styles.menuCategory}>Cài đặt</div>
          <ul>
            <li>
              <a
                href="#"
                className={activeItem === "settings" ? styles.active : ""}
                onClick={() => handleItemClick("settings")}
              >
                <i className="fas fa-cog"></i> <span>Thiết lập</span>
              </a>
            </li>
            <li>
              <a
                href="#"
                className={activeItem === "permissions" ? styles.active : ""}
                onClick={() => handleItemClick("permissions")}
              >
                <i className="fas fa-user-shield"></i> <span>Phân quyền</span>
              </a>
            </li>
            <li>
              <a
                href="#"
                className={activeItem === "logout" ? styles.active : ""}
                onClick={() => handleItemClick("logout")}
              >
                <i className="fas fa-sign-out-alt"></i> <span>Đăng xuất</span>
              </a>
            </li>
          </ul>
        </div>
      </div>
    </>
  );
}
