// components/Loader.js
import React from "react";
import styles from "./Loader.module.css"; // Import CSS module for styling

const Loader = () => {
  return (
    <div className={styles.loadercontainer}>
      <div className={styles.loader}>
        <div className={styles.dot}></div>
        <div className={styles.dot}></div>
        <div className={styles.dot}></div>
      </div>
    </div>
  );
};

export default Loader;
