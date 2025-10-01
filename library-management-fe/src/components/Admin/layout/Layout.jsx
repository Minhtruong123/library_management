import React from "react";
import styles from "./Layout.module.css";
import Sidebar from "../Sidebar/Sidebar";
import Topbar from "../Topbar/Topbar";
import Chatbot from "../Chatbot/Chatbot";

export default function Layout({ children }) {
  return (
    <>
      <div className={styles.container}>
        <Sidebar />
        <div className={styles.mainContent}>
          <Topbar />
          <div className={styles.content}>{children}</div>
        </div>
        <Chatbot />
      </div>
    </>
  );
}
