import Image from "next/image";
import React from "react";
import { Col, Row } from "react-bootstrap";
import image2 from "../../../public/2.jpg";
import image3 from "../../../public/3.jpg";
import image4 from "../../../public/4.jpg";
import image5 from "../../../public/5.jpg";
import image6 from "../../../public/6.jpg";
import image1 from "../../../public/propject1.jpg";
import anotherStyles from "../../../styles/Boosting.module.css";
import styles from "../../../styles/Projects.module.css";
const Projects = () => {
  return (
    <div className={`${anotherStyles.boosting_list_tab} mb-5`}>
      <span>PROJECTS</span>
      <h3>Our Projects For Client</h3>
      <Row>
        <Col lg={4} sm={6}>
          <div className={styles.single_project_box}>
            <Image alt="image not found" src={image1} />
            <div className={styles.project_hover_content}>
              <h4>Web Design</h4>
            </div>
          </div>
        </Col>
        <Col lg={4} sm={6}>
          <div className={styles.single_project_box}>
            <Image alt="image not found" src={image2} />
            <div className={styles.project_hover_content}>
              <h4>Web Design</h4>
            </div>
          </div>
        </Col>
        <Col lg={4} sm={6}>
          <div className={styles.single_project_box}>
            <Image alt="image not found" src={image3} />
            <div className={styles.project_hover_content}>
              <h4>Web Design</h4>
            </div>
          </div>
        </Col>
        <Col lg={4} sm={6}>
          <div className={styles.single_project_box}>
            <Image alt="image not found" src={image4} />
            <div className={styles.project_hover_content}>
              <h4>Web Design</h4>
            </div>
          </div>
        </Col>
        <Col lg={4} sm={6}>
          <div className={styles.single_project_box}>
            <Image alt="image not found" src={image5} />
            <div className={styles.project_hover_content}>
              <h4>Web Design</h4>
            </div>
          </div>
        </Col>
        <Col lg={4} sm={6}>
          <div className={styles.single_project_box}>
            <Image alt="image not found" src={image6} />
            <div className={styles.project_hover_content}>
              <h4>Web Design</h4>
            </div>
          </div>
        </Col>
      </Row>
    </div>
  );
};

export default Projects;
