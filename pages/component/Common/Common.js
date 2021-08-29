import React from "react";
import styles from "../../../styles/Common.module.css";
const Common = ({ common }) => {
  return (
    <div>
      <div className={styles.page_title_area}></div>
      <div className={styles.page_title_content}>
        <h2>{common}</h2>
      </div>
    </div>
  );
};

export default Common;
