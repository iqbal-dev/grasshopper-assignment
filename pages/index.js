// import "bootstrap/dist/css/bootstrap.min.css";
import Head from "next/head";
import "../styles/Home.module.css";
import About from "./component/About/About";
import Analysis from "./component/Analysis/Analysis";
import Banner from "./component/Banner/Banner";
import Blog from "./component/Blog/Blog";
import Boosting from "./component/Boosting/Boosting";
import Choose from "./component/Choose/Choose";
import CopyRight from "./component/CopyRight/CopyRight";
import Features from "./component/Features/Features";
import Footer from "./component/Footer/Footer";
import Header from "./component/Header/Header";
import Projects from "./component/Projects/Projects";
import Services from "./component/Services/Services";
import Subscription from "./component/Subscription/Subscription";
import Team from "./component/Team/Team";
import Testimonial from "./component/Testimonial/Testimonial";

export default function Home() {
  return (
    <div>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <link
          rel="stylesheet"
          href="https://maxcdn.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css"
          integrity="sha384-ggOyR0iXCbMQv3Xipma34MD+dH/1fQ784/j6cY/iJTQUOhcWr7x9JvoRxT2MZw1T"
        />
        <link
          rel="stylesheet"
          type="text/css"
          charset="UTF-8"
          href="https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.6.0/slick.min.css"
        />
        <link
          rel="stylesheet"
          type="text/css"
          href="https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.6.0/slick-theme.min.css"
        />
      </Head>

      <main>
        <div className="container">
          <Header />
          <Banner />
          <Features />
          <About />
        </div>
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
        <div className="container">
          <Choose />
          <Boosting />
          <Projects />
        </div>
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
        <div className="container">
          <Testimonial />
          <Analysis />
          <Blog />
        </div>
        <Subscription />
      </main>

      <footer>
        <div className="footer">
          <div className="container">
            <Footer />
          </div>
        </div>
        <CopyRight />
      </footer>
    </div>
  );
}
