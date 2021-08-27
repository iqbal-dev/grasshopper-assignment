import Image from "next/image";
import React from "react";
import { Col, Row } from "react-bootstrap";
import {
  FaBullhorn,
  FaHandHoldingUsd,
  FaNetworkWired,
  FaVoicemail,
} from "react-icons/fa";
import { IoMdAnalytics } from "react-icons/io";
import images from "../../../public/1.jpg";
import styles from "../../../styles/Boosting.module.css";
const Boosting = () => {
  return (
    <div className={styles.boosting_list_tab}>
      <span>Boosting</span>
      <h3>Outstanding Digital Experience</h3>
      <ul className={styles.tabs}>
        <li active>
          <IoMdAnalytics className={styles.icon} />
          <span>Real-Time-Analytics</span>
        </li>
        <li active>
          <FaHandHoldingUsd className={styles.icon} />
          <span>Real-Time-Analytics</span>
        </li>
        <li active>
          <FaBullhorn className={styles.icon} />
          <span>Real-Time-Analytics</span>
        </li>
        <li active>
          <FaVoicemail className={styles.icon} />
          <span>Real-Time-Analytics</span>
        </li>
        <li active>
          <FaNetworkWired className={styles.icon} />
          <span>Real-Time-Analytics</span>
        </li>
        <li active>
          <IoMdAnalytics className={styles.icon} />
          <span>Real-Time-Analytics</span>
        </li>
      </ul>
      <div className={styles.tab_content}>
        <Row>
          <Col lg={5}>
            <Image alt="image not found" src={images} />
          </Col>
          <Col lg={7}>
            <div className={styles.content}>
              <h2>REAL-TIME ANALYTICS</h2>
              <p>
                There are many variations of passages of Lorem Ipsum
                available&lsquo but the majority have suffered alteration in
                some form, by injected humour&lsquo or randomised words which
                don&lsquot look even slightly believable. If you are going to
                use a passage of Lorem Ipsum&lsquo you need to be sure there
                isn&lsquot anything embarrassing hidden in the middle of text.
              </p>
              <Row className="align-items-center">
                <Col md={6} className={styles.tab_text_content}>
                  <IoMdAnalytics className={styles.icon} />
                  <p>
                    Lorem ipsum dolor sit amet&lsquo consectetur adipiscing
                    elit&lsquo sed do eiusmod tempor incididunt.
                  </p>
                </Col>
                <Col md={6} className={styles.tab_text_content}>
                  <IoMdAnalytics className={styles.icon} />
                  <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                    do eiusmod tempor incididunt.
                  </p>
                </Col>

                <button
                  className="moreAbout"
                  style={{ width: "200px", marginTop: "30px" }}
                >
                  Discover more
                </button>
              </Row>
            </div>
          </Col>
        </Row>
      </div>
    </div>
  );
};

export default Boosting;
