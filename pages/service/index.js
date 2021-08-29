import React from "react";
import Common from "../component/Common/Common";
import Footer from "../component/Footer/Footer";
import Header from "../component/Header/Header";
import Services from "../component/Services/Services";
const Service = () => {
  return (
    <>
      <div className="container">
        <Header />
      </div>
      <Common common="About" />
      <div
        style={{
          backgroundColor: "#f6f5fb",
          paddingTop: "100px",
          paddingBottom: "70px",
        }}
      >
        <div className="container">
          <Services />
        </div>
      </div>
      <div className="footer">
        <div className="container">
          <Footer />
        </div>
      </div>
    </>
  );
};

export default Service;
