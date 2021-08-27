import React from "react";
import { Col, Row } from "react-bootstrap";
import styles from "../../../styles/CopyRight.module.css";
const CopyRight = () => {
  return (
    <div className={styles.CopyRight}>
      <div className="container">
        <Row>
          <Col md={6}>
            <p>
              &#169;2021 Neemo. All Rights Reserved by <a href="#">EnvyTheme</a>
            </p>
          </Col>
          <Col md={6} className={styles.right}>
            <p>
              {" "}
              <a href="#">Terms & Conditions</a> |
              <a href="#"> Privacy Policy</a>
            </p>
          </Col>
        </Row>
      </div>
    </div>
  );
};

export default CopyRight;
