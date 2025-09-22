import React from "react";
import styles from "./AccountPage.module.css";
import Header from "../Header/Header";
import Footer from "../Footer/Footer";
import AccountSidebar from "../Account/AccountSidebar";
import AccountDashboard from "../Account/AccountDashboard";

export default function AccountPage() {
  return (
    <>
      <Header />
      <section className={styles.accountSection}>
        <div className="container">
          <div className={styles.accountContainer}>
            <AccountSidebar />
            <AccountDashboard />
          </div>
        </div>
      </section>
      <Footer />
    </>
  );
}
