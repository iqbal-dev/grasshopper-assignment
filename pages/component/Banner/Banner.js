import Image from "next/image";
import React from "react";
import { Button, Col, Row } from "react-bootstrap";
import bannerImage from "../../../public/digital-screen.png";

const Banner = () => {
  return (
    <Row className="align-items-center justify-content-between mb-5">
      <Col md={5}>
        <h1
          style={{
            fontSize: "50px",
            marginBottom: "25px",
            color: "rgb(2, 2, 19)",
          }}
        >
          Digital Agency with <br /> Excellence Service
        </h1>
        <p style={{ marginBottom: "25px" }}>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, eiusmod
          tempor incididunt ut labore.
        </p>
        <Row className="mb-3">
          <Col sm={4}>
            <Button className="moreAbout">More About us</Button>
          </Col>
          <Col sm={4}>
            <Button className="watchVideo">Watch Video</Button>
          </Col>
        </Row>
      </Col>
      <Col md={6}>
        <div>
          <Image
            alt="image not found"
            className="rounded"
            height={3000}
            src={bannerImage}
          />
        </div>
      </Col>
    </Row>
  );
};

export default Banner;
