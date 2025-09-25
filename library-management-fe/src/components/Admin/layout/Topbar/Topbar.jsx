import React, { useState } from "react";
import styles from "./Topbar.module.css";

export default function Topbar() {
  const [isSidebarCollapsed, setIsSidebarCollapsed] = useState(false);

  const toggleSidebar = () => {
    setIsSidebarCollapsed(!isSidebarCollapsed);
    document.querySelector(".sidebar").classList.toggle("collapsed");
    document.querySelector(".main-content").classList.toggle("expanded");
  };
  return (
    <>
      <div className={styles.topbar}>
        <div className={styles.menuToggle} onClick={toggleSidebar}>
          <i className="fas fa-bars"></i>
        </div>
        <div className={styles.searchBar}>
          <i className="fas fa-search"></i>
          <input type="text" placeholder="Tìm kiếm sách, thành viên..." />
        </div>
        <div className={styles.userInfo}>
          <div className={styles.notifications}>
            <i className="far fa-bell"></i>
            <span className={styles.badge}>3</span>
          </div>
          <div className={styles.userProfile}>
            <img
              src="https://randomuser.me/api/portraits/men/85.jpg"
              alt="Người dùng"
            />
            <span>Quản trị viên</span>
          </div>
        </div>
      </div>
    </>
  );
}
