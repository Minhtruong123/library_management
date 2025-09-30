import React from "react";
import styles from "./Topbar.module.css";

export default function Topbar() {
  return (
    <>
      <div className={styles.topbar}>
        <div className={styles.menuToggle}>
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
