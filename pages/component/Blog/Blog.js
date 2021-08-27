import { faComments } from "@fortawesome/free-regular-svg-icons";
import { faUser } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Image from "next/image";
import React from "react";
import { Card, Col, Row } from "react-bootstrap";
import Slider from "react-slick";
import blog1 from "../../../public/blog1.png";
import blog2 from "../../../public/blog2.png";
import blog3 from "../../../public/blog4.png";
import image5 from "../../../public/hipster.png";
import image2 from "../../../public/iconic.png";
import image6 from "../../../public/mockup.png";
import image3 from "../../../public/natural.png";
import image1 from "../../../public/urban.png";
import image4 from "../../../public/urban1.png";
import styles from "../../../styles/Blog.module.css";
import anotherStyles from "../../../styles/Boosting.module.css";
const Blog = () => {
  const settings = {
    infinite: true,
    speed: 500,
    slidesToShow: 5,
    slidesToScroll: 3,
  };
  return (
    <div style={{ padding: "50px 0" }}>
      <div className={`${anotherStyles.boosting_list_tab} mb-5`}>
        <span>Blog</span>
        <h3>Read Our Latest Project</h3>
      </div>
      <Row className="mb-5">
        <Col lg={4} md={6}>
          <Card className={styles.card_container}>
            <div className={styles.image}>
              <Image alt="image not found" src={blog1} />
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
                the bulk of the card&lsquos content.
              </Card.Text>
              <button>Read More</button>
            </Card.Body>
          </Card>
        </Col>
        <Col lg={4} md={6}>
          <Card className={styles.card_container}>
            <div className={styles.image}>
              <Image alt="image not found" src={blog2} />
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
                the bulk of the card&lsquos content.
              </Card.Text>
              <button>Read More</button>
            </Card.Body>
          </Card>
        </Col>
        <Col lg={4} md={6}>
          <Card className={styles.card_container}>
            <div className={styles.image}>
              <Image alt="image not found" src={blog3} />
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
                the bulk of the card &lsquo;s content.
              </Card.Text>
              <button>Read More</button>
            </Card.Body>
          </Card>
        </Col>
      </Row>
      <Slider {...settings} style={{ marginTop: "100px" }}>
        <div>
          <Image src={image1} alt="image is not found" />
        </div>
        <div>
          <Image src={image2} alt="image is not found" />
        </div>
        <div>
          <Image src={image3} alt="image is not found" />
        </div>
        <div>
          <Image src={image4} alt="image is not found" />
        </div>
        <div>
          <Image src={image5} alt="image is not found" />
        </div>
        <div>
          <Image src={image6} alt="image is not found" />
        </div>
      </Slider>
    </div>
  );
};

export default Blog;
