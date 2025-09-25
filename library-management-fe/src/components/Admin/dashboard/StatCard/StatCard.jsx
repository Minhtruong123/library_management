import React from "react";
import styles from "./StatCard.module.css";

export default function StatCard({ icon, count, label }) {
  return (
    <>
      <div className={`${styles.card} ${styles.statCard}`}>
        <div className={styles.icon}>
          <i className={icon}></i>
        </div>
        <div className={styles.info}>
          <h3>{count}</h3>
          <p>{label}</p>
        </div>
      </div>
    </>
  );
}
