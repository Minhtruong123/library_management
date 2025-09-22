import React from "react";
import styles from "./NotificationItem.module.css";

export default function NotificationItem({ type, content, time }) {
  const getIconClass = () => {
    switch (type) {
      case "reminder":
        return styles.reminder;
      case "overdue":
        return styles.overdue;
      case "success":
        return styles.success;
      default:
        return "";
    }
  };

  const getIcon = () => {
    switch (type) {
      case "reminder":
        return "fas fa-bell";
      case "overdue":
        return "fas fa-exclamation-circle";
      case "success":
        return "fas fa-check-circle";
      default:
        return "fas fa-info-circle";
    }
  };
  return (
    <>
      <div className={styles.notificationItem}>
        <div className={`${styles.notificationIcon} ${getIconClass()}`}>
          <i className={getIcon()}></i>
        </div>
        <div className={styles.notificationContent}>
          <p dangerouslySetInnerHTML={{ __html: content }}></p>
          <p className={styles.notificationTime}>{time}</p>
        </div>
        <div className={styles.notificationActions}>
          <button>
            <i className="fas fa-check"></i>
          </button>
        </div>
      </div>
    </>
  );
}
