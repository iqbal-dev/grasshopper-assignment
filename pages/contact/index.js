import React from "react";
import Analysis from "../component/Analysis/Analysis";
import Common from "../component/Common/Common";
import Footer from "../component/Footer/Footer";
import Header from "../component/Header/Header";

const Contact = () => {
  return (
    <div>
      <div className="container">
        <Header />
      </div>
      <Common common="Contact" />
      <Analysis />
      <div className="footer">
        <div className="container">
          <Footer />
        </div>
      </div>
    </div>
  );
};

export default Contact;
