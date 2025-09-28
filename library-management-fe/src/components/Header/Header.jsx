import React, { useState, useContext, useRef, useEffect } from "react";
import styles from "./Header.module.css";
import { NavLink, useNavigate } from "react-router-dom";
import { AuthContext } from "../../service/AuthContext";

export default function Header() {
  const [isNavActive, setIsNavActive] = useState(false);
  const [showDropdown, setShowDropdown] = useState(false);
  const { user, logout } = useContext(AuthContext);
  const navigate = useNavigate();
  const dropdownRef = useRef(null);

  const toggleNav = () => {
    setIsNavActive(!isNavActive);
  };

  const toggleDropdown = () => {
    setShowDropdown(!showDropdown);
  };

  useEffect(() => {
    function handleClickOutside(event) {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setShowDropdown(false);
      }
    }

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [dropdownRef]);

  const handleLogout = () => {
    logout();
    navigate("/auth");
  };

  return (
    <>
      <header className={styles.header}>
        <div className="container">
          <div className={styles.headerContainer}>
            <div className={styles.logo}>
              <h1>
                <i className="fas fa-book-open"></i> Thư viện Thông minh
              </h1>
            </div>
            <nav
              className={`${styles.nav} ${isNavActive ? styles.active : ""}`}
            >
              <ul>
                <li>
                  <NavLink
                    to="/"
                    className={({ isActive }) =>
                      isActive ? styles.active : undefined
                    }
                  >
                    Trang chủ
                  </NavLink>
                </li>
                <li>
                  <NavLink
                    to="/books"
                    className={({ isActive }) =>
                      isActive ? styles.active : undefined
                    }
                  >
                    Sách
                  </NavLink>
                </li>
                <li>
                  <NavLink
                    to="/categories"
                    className={({ isActive }) =>
                      isActive ? styles.active : undefined
                    }
                  >
                    Danh mục
                  </NavLink>
                </li>
                {user ? (
                  <>
                    <li>
                      <NavLink
                        to="/myaccount"
                        className={({ isActive }) =>
                          isActive ? styles.active : undefined
                        }
                      >
                        Tài khoản
                      </NavLink>
                    </li>
                    <li>
                      <div className={styles.userDropdown} ref={dropdownRef}>
                        <div
                          className={styles.userGreeting}
                          onClick={toggleDropdown}
                        >
                          <span>Xin chào, {user.username}</span>
                          <i
                            className={`fas fa-chevron-down ${styles.dropdownIcon}`}
                          ></i>
                        </div>
                        {showDropdown && (
                          <div className={styles.dropdownMenu}>
                            <button
                              onClick={handleLogout}
                              className={styles.dropdownItem}
                            >
                              <i className="fas fa-sign-out-alt"></i> Đăng xuất
                            </button>
                          </div>
                        )}
                      </div>
                    </li>
                  </>
                ) : (
                  <li>
                    <NavLink
                      to="/auth"
                      className={({ isActive }) =>
                        isActive
                          ? `${styles.btnLogin} ${styles.active}`
                          : styles.btnLogin
                      }
                    >
                      Đăng nhập
                    </NavLink>
                  </li>
                )}
              </ul>
            </nav>
            <div className={styles.mobileToggle} onClick={toggleNav}>
              <i className="fas fa-bars"></i>
            </div>
          </div>
        </div>
      </header>
    </>
  );
}
