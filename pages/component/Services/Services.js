import { faCoffee } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import { Col, Row } from "react-bootstrap";
import styles from "../../../styles/Services.module.css";
const Services = () => {
  return (
    <div className={styles.container}>
      <div>
        <div className="header">
          <span>SERVICES</span>
          <h3 style={{ maxWidth: "340px" }}>How We Can Help?</h3>
        </div>
      </div>
      <Row>
        <Col lg={4} md={6}>
          <div className={styles.single_services_box}>
            <div className={`${styles.icon} ${styles.icon1}`}>
              <FontAwesomeIcon icon={faCoffee} />
            </div>
            <h3>
              <a href="#">Search Engine Optimization</a>
            </h3>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incutu labore et dolore magna aliqua.
            </p>
          </div>
        </Col>
        <Col lg={4} md={6}>
          <div className={styles.single_services_box}>
            <div className={`${styles.icon} ${styles.icon2}`}>
              <FontAwesomeIcon icon={faCoffee} />
            </div>
            <h3>
              <a href="#">Social Media Strategy</a>
            </h3>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incutu labore et dolore magna aliqua.
            </p>
          </div>
        </Col>
        <Col lg={4} md={6}>
          <div className={styles.single_services_box}>
            <div className={`${styles.icon} ${styles.icon3}`}>
              <FontAwesomeIcon icon={faCoffee} />
            </div>
            <h3>
              <a href="#">Real Time And Data</a>
            </h3>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incutu labore et dolore magna aliqua.
            </p>
          </div>
        </Col>
        <Col lg={4} md={6}>
          <div className={styles.single_services_box}>
            <div className={`${styles.icon} ${styles.icon4}`}>
              <FontAwesomeIcon icon={faCoffee} />
            </div>
            <h3>
              <a href="#">Online Media Management</a>
            </h3>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incutu labore et dolore magna aliqua.
            </p>
          </div>
        </Col>
        <Col lg={4} md={6}>
          <div className={styles.single_services_box}>
            <div className={`${styles.icon} ${styles.icon5}`}>
              <FontAwesomeIcon icon={faCoffee} />
            </div>
            <h3>
              <a href="#">Reporting & Analysis</a>
            </h3>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incutu labore et dolore magna aliqua.
            </p>
          </div>
        </Col>
        <Col lg={4} md={6}>
          <div className={styles.single_services_box}>
            <div className={`${styles.icon} ${styles.icon6}`}>
              <FontAwesomeIcon icon={faCoffee} />
            </div>
            <h3>
              <a href="#">Penalty Recovery</a>
            </h3>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incutu labore et dolore magna aliqua.
            </p>
          </div>
        </Col>
      </Row>
    </div>
  );
};

export default Services;
