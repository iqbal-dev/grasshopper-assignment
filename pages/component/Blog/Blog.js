import { faComments } from "@fortawesome/free-regular-svg-icons";
import { faUser } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Image from "next/image";
import React from "react";
import { Card, Col, Row } from "react-bootstrap";
import blog1 from "../../../public/blog1.png";
import blog2 from "../../../public/blog2.png";
import blog3 from "../../../public/blog4.png";
import styles from "../../../styles/Blog.module.css";
import anotherStyles from "../../../styles/Boosting.module.css";
const Blog = () => {
  return (
    <div style={{ padding: "50px 0" }}>
      <div className={`${anotherStyles.boosting_list_tab} mb-5`}>
        <span>Blog</span>
        <h3>Read Our Latest Project</h3>
      </div>
      <Row>
        <Col lg={4} md={6}>
          <Card className={styles.card_container}>
            <div className={styles.image}>
              <Image src={blog1} />
            </div>
            <div
              className={`${styles.date} d-flex justify-content-center align-items-center text-white`}
            >
              <div>
                <span>02</span> <br />
                <span>January</span>
              </div>
            </div>
            <Card.Body className="p-4 mt-3">
              <Row style={{ width: "300px" }}>
                <Col className="d-flex">
                  <FontAwesomeIcon icon={faUser} />
                  <p style={{ marginLeft: "15px" }}>Amin</p>
                </Col>
                <Col className="d-flex">
                  <FontAwesomeIcon icon={faComments} />
                  <p style={{ marginLeft: "15px" }}>Comments</p>
                </Col>
              </Row>
              <Card.Title className={styles.title}>
                Creative solutions to improve your business!
              </Card.Title>
              <Card.Text>
                Some quick example text to build on the card title and make up
                the bulk of the card's content.
              </Card.Text>
              <button>Read More</button>
            </Card.Body>
          </Card>
        </Col>
        <Col lg={4} md={6}>
          <Card className={styles.card_container}>
            <div className={styles.image}>
              <Image src={blog2} />
            </div>
            <div
              className={`${styles.date} d-flex justify-content-center align-items-center text-white`}
            >
              <div>
                <span>02</span> <br />
                <span>January</span>
              </div>
            </div>
            <Card.Body className="p-4 mt-3">
              <Row style={{ width: "300px" }}>
                <Col className="d-flex">
                  <FontAwesomeIcon icon={faUser} />
                  <p style={{ marginLeft: "15px" }}>Amin</p>
                </Col>
                <Col className="d-flex">
                  <FontAwesomeIcon icon={faComments} />
                  <p style={{ marginLeft: "15px" }}>Comments</p>
                </Col>
              </Row>
              <Card.Title className={styles.title}>
                How To Boost Your Digital Marketing Agency
              </Card.Title>
              <Card.Text>
                Some quick example text to build on the card title and make up
                the bulk of the card's content.
              </Card.Text>
              <button>Read More</button>
            </Card.Body>
          </Card>
        </Col>
        <Col lg={4} md={6}>
          <Card className={styles.card_container}>
            <div className={styles.image}>
              <Image src={blog3} />
            </div>
            <div
              className={`${styles.date} d-flex justify-content-center align-items-center text-white`}
            >
              <div>
                <span>02</span> <br />
                <span>January</span>
              </div>
            </div>
            <Card.Body className="p-4 mt-3">
              <Row style={{ width: "300px" }}>
                <Col className="d-flex">
                  <FontAwesomeIcon icon={faUser} />
                  <p style={{ marginLeft: "15px" }}>Amin</p>
                </Col>
                <Col className="d-flex">
                  <FontAwesomeIcon icon={faComments} />
                  <p style={{ marginLeft: "15px" }}>Comments</p>
                </Col>
              </Row>
              <Card.Title className={styles.title}>
                Startup Marketing Solution For Business Owner
              </Card.Title>
              <Card.Text>
                Some quick example text to build on the card title and make up
                the bulk of the card's content.
              </Card.Text>
              <button>Read More</button>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </div>
  );
};

export default Blog;
