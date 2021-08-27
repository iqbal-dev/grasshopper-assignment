import Image from "next/image";
import React from "react";
import { Col, Row } from "react-bootstrap";
import images from "../../../public/about-image.png";
import styles from "../../../styles/About.module.css";
const About = () => {
  return (
    <Row className="align-items-center mb-5">
      <Col md={6}>
        <Image alt="image not found" className={styles.image} src={images} />
      </Col>
      <Col md={6} className={styles.about_area_content}>
        <span>ABOUT US</span>
        <h3 className={styles.h3}>We are Dynamic Team of SEO Agency</h3>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt labore dolore magna aliqua. Lorem ipsum
          dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
          incididunt ut labore et dolore magna aliqua. Quis ipsum suspendisse
          ultrices gravida. Risus commodo viverra maecenas accumsan lacus vel
          facilisis.Lorem Ipsum is simply dummy text of the printing and
          typesetting industry.
        </p>
        <Row>
          <Col md={6}>
            <div className={styles.project}>
              <h3>
                1,165 <span className={styles.sign_icon}>+</span>
              </h3>
              <p>Project Completed</p>
            </div>
          </Col>
          <Col md={6}>
            <div className={styles.project}>
              {" "}
              <h3>
                2,665 <span className={styles.sign_icon}>+</span>
              </h3>
              <p>Satisfied Clients</p>
            </div>
          </Col>
        </Row>
      </Col>
    </Row>
  );
};

export default About;
