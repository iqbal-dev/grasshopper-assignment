import React from "react";
import { Col, Row } from "react-bootstrap";
import styles from "../../../styles/Subscription.module.css";

const Subscription = () => {
  return (
    <div
      style={{
        backgroundColor: "#f6f5fb",
        paddingTop: "100px",
        paddingBottom: "70px",
      }}
    >
      <div className="container">
        <Row className="justify-content-center">
          <Col md={6} className={styles.subscription_content}>
            <h2>Sign Up For Newsletter</h2>
            <span>And Receive 40% discount on first project</span>
          </Col>
          <Col md={6}>
            <form action="">
              <div className={`${styles.form} form-group`}>
                <input
                  type="email"
                  name="email"
                  required
                  placeholder="Enter your mail"
                />
                <button>Subscription Now</button>
              </div>
            </form>
          </Col>
        </Row>
      </div>
    </div>
  );
};

export default Subscription;
