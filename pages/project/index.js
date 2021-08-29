import React from "react";
import Common from "../component/Common/Common";
import Footer from "../component/Footer/Footer";
import Header from "../component/Header/Header";
import Projects from "../component/Projects/Projects";
const Project = () => {
  return (
    <>
      <div className="container">
        <Header />
      </div>
      <Common common="Project" />
      <div className="container">
        <Projects />
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
