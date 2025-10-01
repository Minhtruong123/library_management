import React from "react";
import styles from "./TimelineItem.module.css";

export default function TimelineItem({ time, user, action, subject, note }) {
  return (
    <>
      <div className={styles.timelineItem}>
        <div className={styles.time}>{time}</div>
        <div className={styles.activity}>
          <span className={styles.user}>{user}</span> {action}
          {subject && <strong> {subject}</strong>}
          {note && ` ${note}`}
        </div>
      </div>
    </>
  );
}
