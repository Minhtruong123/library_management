import React, { useState } from "react";
import styles from "./Auth.module.css";
import Login from "./Login";
import Register from "./Register";

export default function Auth() {
  const [isLogin, setIsLogin] = useState(true);

  const toggleAuthMode = () => {
    setIsLogin(!isLogin);
  };
  return (
    <>
      <div className={styles.authContainer}>
        {isLogin ? (
          <Login onSwitchToRegister={toggleAuthMode} />
        ) : (
          <Register onSwitchToLogin={toggleAuthMode} />
        )}
      </div>
    </>
  );
}
