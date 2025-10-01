import React from "react";
import styles from "./ChatMessage.module.css";

export default function ChatMessage({ sender, text, time }) {
  return (
    <>
      <div className={`${styles.message} ${styles[sender]}`}>
        <div
          className={styles.bubble}
          dangerouslySetInnerHTML={{ __html: text }}
        ></div>
        <div className={styles.time}>{time}</div>
      </div>
    </>
  );
}
