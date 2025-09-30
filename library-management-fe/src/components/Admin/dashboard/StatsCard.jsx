import React from "react";
import styles from "./StatCard.module.css";

export default function StatsCard({ icon, value, label }) {
  return (
    <>
      <div className={styles.card}>
        <div className={styles.icon}>
          <i className={icon}></i>
        </div>
        <div className={styles.info}>
          <h3>{value}</h3>
          <p>{label}</p>
        </div>
      </div>
    </>
  );
}
