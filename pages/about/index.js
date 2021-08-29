import React from "react";
import AboutUs from "../component/About/About";
import Common from "../component/Common/Common";
import Footer from "../component/Footer/Footer";
import Header from "../component/Header/Header";
const About = () => {
  return (
    <>
      <div className="container">
        <Header />
      </div>
      <Common common="About us" />
      <div className="container">
        <AboutUs />
      </div>
      <div className="footer">
        <div className="container">
          <Footer />
        </div>
      </div>
    </>
  );
};

export default About;
