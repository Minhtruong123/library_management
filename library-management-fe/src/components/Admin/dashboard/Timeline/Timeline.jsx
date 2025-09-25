import React from "react";
import styles from "./Timeline.module.css";

export default function Timeline({ activities }) {
  return (
    <>
      <div className={styles.card}>
        <div className={styles.cardHeader}>
          <h2>Hoạt động gần đây</h2>
          <a href="#" className={styles.more}>
            Xem tất cả <i className="fas fa-chevron-right"></i>
          </a>
        </div>
        <div className={styles.timeline}>
          {activities.map((activity, index) => (
            <div className={styles.timelineItem} key={index}>
              <div className={styles.time}>{activity.time}</div>
              <div className={styles.activity}>
                <span className={styles.user}>{activity.user}</span>{" "}
                {activity.action}
                {activity.book && <strong> {activity.book}</strong>}
                {activity.extraInfo && activity.extraInfo}
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}
