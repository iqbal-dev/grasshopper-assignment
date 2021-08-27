import { faCheck } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Image from "next/image";
import React from "react";
import { Col, Row } from "react-bootstrap";
import images from "../../../public/choose-image.png";
import styles from "../../../styles/Choose.module.css";
const Choose = () => {
  return (
    <div className={styles.choose_section}>
      <Row className="align-items-center">
        <Col lg={6} md={12} className={styles.choose_content_area}>
          <div>
            <span>WHY CHOOSE US</span>
            <h3>Outstanding Digital Experience</h3>
          </div>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Quis
            ipsum suspendisse ultrices gravida. Risus commodo viverra maecenas
            accumsan lacus vel facilisis.
          </p>
          <div className={styles.choose_text}>
            <FontAwesomeIcon className={styles.choose_icon} icon={faCheck} />
            <h4>First Working Process</h4>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor abore et dolore magna aliqua.
            </p>
          </div>
          <div className={styles.choose_text}>
            <FontAwesomeIcon className={styles.choose_icon} icon={faCheck} />
            <h4>24/7 Support</h4>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor abore et dolore magna aliqua.
            </p>
          </div>
          <div className={styles.choose_text}>
            <FontAwesomeIcon className={styles.choose_icon} icon={faCheck} />
            <h4>Dedicated Team Member</h4>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor abore et dolore magna aliqua.
            </p>
          </div>
          <button className="moreAbout">Discover more</button>
        </Col>
        <Col lg={6} md={12}>
          <Image alt="image not found" src={images} />
        </Col>
      </Row>
    </div>
  );
};

export default Choose;
