import Image from "next/image";
import React from "react";
import { Col, Row } from "react-bootstrap";
import images from "../../../public/analysis-image.png";
import styles from "../../../styles/Analysis.module.css";
import headerStyles from "../../../styles/Choose.module.css";

const Analysis = () => {
  return (
    <Row className="align-items-center" style={{ paddingTop: "70px" }}>
      <Col lg={6} md={12}>
        <div>
          <Image alt="image not found" src={images} />
        </div>
      </Col>
      <Col lg={6} md={12}>
        <div className={headerStyles.choose_content_area}>
          <span>ANALYSIS</span>
          <h3>Get Free SEO Analysis</h3>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna.
          </p>
        </div>
        <form action="">
          <Row className={styles.form}>
            <Col sm={6} className="form-group">
              <input
                type="text"
                name="name"
                required
                className="form-control"
                placeholder="Your Name *"
              />
            </Col>
            <Col sm={6} className="form-group">
              <input
                type="email"
                name="email"
                className="form-control"
                placeholder="email"
              />
            </Col>
            <Col sm={6} className="form-group">
              <input
                type="number"
                name="phone"
                required
                className="form-control"
                placeholder="Phone *"
              />
            </Col>
            <Col sm={6} className="form-group">
              <input
                type="text"
                name="website"
                className="form-control"
                placeholder="Website"
              />
            </Col>
          </Row>
          <button className="moreAbout my-3">Send Message</button>
        </form>
      </Col>
    </Row>
  );
};

export default Analysis;
