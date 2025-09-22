import React from "react";
import styles from "./StatCard.module.css";

export default function StatCard({ icon, value, label }) {
  return (
    <>
      <div className={styles.statCard}>
        <div className={styles.statIcon}>
          <i className={icon}></i>
        </div>
        <div className={styles.statValue}>{value}</div>
        <div className={styles.statLabel}>{label}</div>
      </div>
    </>
  );
}
