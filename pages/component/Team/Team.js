import {
  faFacebook,
  faInstagram,
  faLinkedinIn,
  faTwitter,
} from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Image from "next/image";
import React from "react";
import { Card, Col, Row } from "react-bootstrap";
import member1 from "../../../public/member1.jpg";
import member3 from "../../../public/member3.jpg";
import member2 from "../../../public/memeber2.jpg";
import anotherStyles from "../../../styles/Boosting.module.css";
import styles from "../../../styles/Team.module.css";
const Team = () => {
  return (
    <div>
      <div className={`${anotherStyles.boosting_list_tab} mb-5`}>
        <span>Team</span>
        <h3>Meet Our Team</h3>
      </div>
      <Row>
        <Col lg={4} sm={6}>
          <Card>
            <Image variant="top" src={member1} />
            <Card.Body style={{ textAlign: "center" }}>
              <Card.Title>Edward Bold</Card.Title>
              <Card.Text>CEO & Founder</Card.Text>
              <ul className={styles.team_social}>
                <li>
                  <FontAwesomeIcon className={styles.icon} icon={faFacebook} />
                </li>
                <li>
                  <FontAwesomeIcon className={styles.icon} icon={faTwitter} />
                </li>
                <li>
                  <FontAwesomeIcon
                    className={styles.icon}
                    icon={faLinkedinIn}
                  />
                </li>
                <li>
                  <FontAwesomeIcon className={styles.icon} icon={faInstagram} />
                </li>
              </ul>
            </Card.Body>
          </Card>
        </Col>
        <Col lg={4} sm={6}>
          <Card>
            <Image variant="top" src={member2} />
            <Card.Body style={{ textAlign: "center" }}>
              <Card.Title>Calvin Klein</Card.Title>
              <Card.Text>Marketing Support</Card.Text>
              <ul className={styles.team_social}>
                <li>
                  <FontAwesomeIcon className={styles.icon} icon={faFacebook} />
                </li>
                <li>
                  <FontAwesomeIcon className={styles.icon} icon={faTwitter} />
                </li>
                <li>
                  <FontAwesomeIcon
                    className={styles.icon}
                    icon={faLinkedinIn}
                  />
                </li>
                <li>
                  <FontAwesomeIcon className={styles.icon} icon={faInstagram} />
                </li>
              </ul>
            </Card.Body>
          </Card>
        </Col>
        <Col lg={4} sm={6}>
          <Card>
            <Image variant="top" src={member3} />
            <Card.Body style={{ textAlign: "center" }}>
              <Card.Title>Alastair Cook</Card.Title>
              <Card.Text>Underwriter</Card.Text>
              <ul className={styles.team_social}>
                <li>
                  <FontAwesomeIcon className={styles.icon} icon={faFacebook} />
                </li>
                <li>
                  <FontAwesomeIcon className={styles.icon} icon={faTwitter} />
                </li>
                <li>
                  <FontAwesomeIcon
                    className={styles.icon}
                    icon={faLinkedinIn}
                  />
                </li>
                <li>
                  <FontAwesomeIcon className={styles.icon} icon={faInstagram} />
                </li>
              </ul>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </div>
  );
};

export default Team;
