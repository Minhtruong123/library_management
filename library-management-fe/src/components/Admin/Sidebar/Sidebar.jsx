import React, { useContext } from "react";
import styles from "./Sidebar.module.css";
import { NavLink, useNavigate } from "react-router-dom";
import { AuthContext } from "../../../service/AuthContext";

export default function Sidebar({ children }) {
  const { user, logout } = useContext(AuthContext);
  const navigate = useNavigate();
  const handleLogout = () => {
    logout();
    navigate("/auth");
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
              <NavLink
                to="/dashboard"
                className={({ isActive }) =>
                  isActive ? styles.active : undefined
                }
              >
                <i className="fas fa-home"></i> <span>Tổng quan</span>
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/book-management"
                className={({ isActive }) =>
                  isActive ? styles.active : undefined
                }
              >
                <i className="fas fa-book"></i> <span>Sách</span>
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/members-management"
                className={({ isActive }) =>
                  isActive ? styles.active : undefined
                }
              >
                <i className="fas fa-users"></i> <span>Thành viên</span>
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/borrow-return-management"
                className={({ isActive }) =>
                  isActive ? styles.active : undefined
                }
              >
                <i className="fas fa-exchange-alt"></i> <span>Mượn trả</span>
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/schedualing-management"
                className={({ isActive }) =>
                  isActive ? styles.active : undefined
                }
              >
                <i className="fas fa-calendar-alt"></i> <span>Đặt lịch</span>
              </NavLink>
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
              <button className={styles.logoutBtn} onClick={handleLogout}>
                <i className="fas fa-sign-out-alt"></i> <span>Đăng xuất</span>
              </button>
            </li>
          </ul>
        </div>
      </div>
    </>
  );
}
