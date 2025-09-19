import React, { useEffect } from "react";
import styles from "./AuthPage.module.css";
import Header from "../Header/Header";
import Footer from "../Footer/Footer";
import Auth from "../Auth/Auth";

export default function AuthPage() {
  useEffect(() => {
    // Scroll to top when component mounts
    window.scrollTo(0, 0);

    document.title = "Đăng nhập/Đăng ký - Thư viện Thông minh";
  }, []);
  return (
    <>
      <div className={styles.authPage}>
        <Header />
        <div className={styles.container}>
          <Auth />
        </div>
        <Footer />
      </div>
    </>
  );
}
