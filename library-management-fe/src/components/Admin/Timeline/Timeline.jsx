import React from "react";
import TimelineItem from "./TimelineItem";
import styles from "./Timeline.module.css";

export default function Timeline({ activities }) {
  return (
    <>
      <div className={styles.cardHeader}>
        <h2>Hoạt động gần đây</h2>
        <a href="#" className={styles.more}>
          Xem tất cả <i className="fas fa-chevron-right"></i>
        </a>
      </div>
      <div className={styles.timeline}>
        {activities.map((activity) => (
          <TimelineItem
            key={activity.id}
            time={activity.time}
            user={activity.user}
            action={activity.action}
            subject={activity.subject}
            note={activity.note}
          />
        ))}
      </div>
    </>
  );
}
