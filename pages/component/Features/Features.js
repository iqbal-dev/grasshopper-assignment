import { faCoffee } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import { Col, Row } from "react-bootstrap";
const Features = () => {
  return (
    <Row className="pt-5 feature align-items-center">
      <Col md={5} className="features-content-area">
        <span>CARE FEATURES</span>
        <h3>Create Awesome Service With Our Tools</h3>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiod
          tempor incididunt ut labore et dolore magna aliqua. Quis ipsum
          suspendisse ultrices gravida. Risus commodo viverra maecenas accumsan
          lacus vel facilisis.Lorem Ipsum is simply dummy text of the printing
          and typesetting industry.
        </p>
        <button>More Details</button>
      </Col>
      <Col md={7}>
        <Row className="align-items-center">
          <Col md={6}>
            <div>
              <div className="single-features-item items1">
                {" "}
                <FontAwesomeIcon
                  style={{
                    // fontSize: "30px",
                    margin: "20px 0",
                    padding: "10px",
                    color: "#5d43bc",
                    border: "2px dotted #5d43bc",
                    height: "65px",
                    width: "65px",
                    borderRadius: "50%",
                  }}
                  icon={faCoffee}
                />
                <h5>Seo Consultancy</h5>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor
                </p>
              </div>
              <div className="single-features-item items2">
                {" "}
                <FontAwesomeIcon
                  style={{
                    // fontSize: "30px",
                    margin: "20px 0",
                    padding: "10px",
                    color: "#19b192",
                    border: "2px dotted #19b192",
                    height: "65px",
                    width: "65px",
                    borderRadius: "50%",
                  }}
                  icon={faCoffee}
                />
                <h5>Social Media Marketing</h5>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor
                </p>
              </div>
            </div>
            <div style={{ height: "60px" }}></div>
          </Col>
          <Col md={6}>
            <div>
              <div className="single-features-item items3">
                {" "}
                <FontAwesomeIcon
                  style={{
                    // fontSize: "30px",
                    margin: "20px 0",
                    padding: "10px",
                    color: "#f1760c",
                    border: "2px dotted #f1760c",
                    height: "65px",
                    width: "65px",
                    borderRadius: "50%",
                  }}
                  icon={faCoffee}
                />
                <h5>Competitor Analysis</h5>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor
                </p>
              </div>
              <div className="single-features-item items4">
                {" "}
                <FontAwesomeIcon
                  style={{
                    // fontSize: "30px",
                    margin: "20px 0",
                    padding: "10px",
                    color: "#f0116f",
                    border: "2px dotted #f0116f",
                    height: "65px",
                    width: "65px",
                    borderRadius: "50%",
                  }}
                  icon={faCoffee}
                />
                <h5>Competitor Analysis</h5>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor
                </p>
              </div>
            </div>
          </Col>
        </Row>
      </Col>
    </Row>
  );
};

export default Features;
