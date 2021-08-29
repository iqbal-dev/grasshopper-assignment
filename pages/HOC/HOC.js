import React from "react";
import Footer from "../component/Footer/Footer";
import Header from "../component/Header/Header";
const HOC = (children) => {
  return (
    <div>
      <Header />
      {children}
      <Footer />
    </div>
  );
};

export default HOC;
