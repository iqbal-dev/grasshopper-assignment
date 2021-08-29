import React from "react";
import Common from "../component/Common/Common";
import Footer from "../component/Footer/Footer";
import Header from "../component/Header/Header";
import Team from "../component/Team/Team";
const Project = () => {
  return (
    <>
      <div className="container">
        <Header />
      </div>
      <Common common="Team" />
      <div
        style={{
          backgroundColor: "#f6f5fb",
          paddingTop: "100px",
          paddingBottom: "70px",
        }}
      >
        <div className="container">
          <Team />
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

export default Project;
