import React, { useState } from "react";
import styles from "./AccountPage.module.css";
import Header from "../Header/Header";
import Footer from "../Footer/Footer";
import AccountSidebar from "../Account/AccountSidebar";
import AccountDashboard from "../Account/AccountDashboard";
import PersonalInfo from "../Account/PersonalInfo";
import ChangePassword from "../Account/ChangePassword";
import BorrowedBooksUser from "../Account/BorrowedBooksUser";
import BorrowHistory from "../Account/BorrowHistory";

export default function AccountPage() {
  const [activeSection, setActiveSection] = useState("dashboard");

  const renderContent = () => {
    switch (activeSection) {
      case "dashboard":
        return <AccountDashboard />;
      case "personal-info":
        return <PersonalInfo />;
      case "change-password":
        return <ChangePassword />;
      case "borrowed-books":
        return <BorrowedBooksUser />;
      case "borrow-history":
        return <BorrowHistory />;
      default:
        return <AccountDashboard />;
    }
  };
  return (
    <>
      <Header />
      <section className={styles.accountSection}>
        <div className="container">
          <div className={styles.accountContainer}>
            <AccountSidebar
              activeSection={activeSection}
              setActiveSection={setActiveSection}
            />
            {renderContent()}
          </div>
        </div>
      </section>
      <Footer />
    </>
  );
}
