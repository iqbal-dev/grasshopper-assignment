import {
  faFacebook,
  faInstagram,
  faLinkedinIn,
  faTwitter,
} from "@fortawesome/free-brands-svg-icons";
import {
  faEnvelope,
  faMapMarkerAlt,
  faPhone,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import { Col, Row } from "react-bootstrap";
import styles from "../../../styles/Footer.module.css";
import anotherStyles from "../../../styles/Team.module.css";
const Footer = () => {
  return (
    <div>
      <Row className="py-5 my-5">
        <Col lg={4} sm={6}>
          <div className={`${styles.footer_heading} text-white`}>
            <h4>About Us</h4>
          </div>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Quis
            ipsum suspendisse ultrices gravida. Risus commodo viverra
          </p>
          <ul className={anotherStyles.team_social}>
            <li>
              <FontAwesomeIcon
                className={anotherStyles.icon}
                icon={faFacebook}
              />
            </li>
            <li>
              <FontAwesomeIcon
                className={anotherStyles.icon}
                icon={faTwitter}
              />
            </li>
            <li>
              <FontAwesomeIcon
                className={anotherStyles.icon}
                icon={faLinkedinIn}
              />
            </li>
            <li>
              <FontAwesomeIcon
                className={anotherStyles.icon}
                icon={faInstagram}
              />
            </li>
          </ul>
        </Col>
        <Col lg={2} sm={6}>
          <div className={`${styles.footer_heading} text-white`}>
            <h4>Important Links</h4>
          </div>
          <ul className={styles.footer_links}>
            <li>
              <a href="#">about us</a>
            </li>
            <li>
              <a href="#">Project</a>
            </li>
            <li>
              <a href="#">Services</a>
            </li>
            <li>
              <a href="#">Team</a>
            </li>
            <li>
              <a href="#">Contact</a>
            </li>
          </ul>
        </Col>
        <Col lg={2} sm={6}>
          <div className={`${styles.footer_heading} text-white`}>
            <h4>Featured service</h4>
          </div>
          <ul className={styles.footer_links}>
            <li>
              <a href="#">SEO Marketing</a>
            </li>
            <li>
              <a href="#">SEO Services</a>
            </li>
            <li>
              <a href="#">Services</a>
            </li>
            <li>
              <a href="#">Pay-Per-Click</a>
            </li>
            <li>
              <a href="#">Social Media</a>
            </li>
          </ul>
        </Col>
        <Col lg={4} sm={6}>
          <div className={`${styles.footer_heading} text-white`}>
            <h4>Contact</h4>
          </div>
          <ul className={styles.footer_contact}>
            <li>
              <Row className="justify-content-center text-white">
                <Col sm={2}>
                  <FontAwesomeIcon icon={faPhone} />
                </Col>
                <Col>
                  <p>Phone</p>
                  <span>(882) 569-7565</span>
                </Col>
              </Row>
            </li>
            <li>
              <Row className="justify-content-center text-white">
                <Col sm={2}>
                  <FontAwesomeIcon icon={faEnvelope} />
                </Col>
                <Col>
                  <p>Email</p>
                  <span>hello@gmail.com</span>
                </Col>
              </Row>
            </li>
            <li>
              <Row className="justify-content-center text-white">
                <Col sm={2}>
                  <FontAwesomeIcon icon={faMapMarkerAlt} />
                </Col>
                <Col>
                  <p>Address</p>
                  <span>123, Western Road, Melbourne Australia</span>
                </Col>
              </Row>
            </li>
          </ul>
        </Col>
      </Row>
    </div>
  );
};

export default Footer;
