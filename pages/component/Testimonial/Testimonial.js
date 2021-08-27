import Image from "next/image";
import React from "react";
import { Col, Row } from "react-bootstrap";
import Slider from "react-slick";
import testimonial1 from "../../../public/testimonial1.jpg";
import testimonial2 from "../../../public/testimonial2.jpg";
import testimonial3 from "../../../public/testimonial3.jpg";
import testimonial4 from "../../../public/testimonial4.jpg";
import headerStyles from "../../../styles/Choose.module.css";
import styles from "../../../styles/Testimonial.module.css";

const Testimonial = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 4000,
    slidesToShow: 2,
    slidesToScroll: 2,
    autoplay: true,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };
  return (
    <Row className="my-5">
      <Col lg={4}>
        <div className={headerStyles.choose_content_area}>
          <span>TESTIMONIAL</span>
          <h3>What Our Client Say</h3>
        </div>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Quis ipsum
          suspendisse ultrices gravida. Risus commodo viverra maecenas accumsan
          lacus.Lorem is simply dummy text of the printing and typesetting
          industry.
        </p>
      </Col>
      <Col lg={8}>
        <Slider {...settings}>
          <div>
            <div className={styles.testimonial_single_item}>
              <div className={styles.testimonial_image}>
                <Image
                  alt="image not found"
                  className={styles.img}
                  src={testimonial1}
                />
              </div>
              <div>
                <h3 className="mt-5">Edward Bold</h3>
                <p>CEO & Founder</p>
                <h2>``</h2>
                <p>
                  Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                  Provident asperiores consectetur tempore debitis temporibus,
                  pariatur quis,
                </p>
              </div>
            </div>
          </div>
          <div>
            <div className={styles.testimonial_single_item}>
              <div className={styles.testimonial_image}>
                <Image
                  alt="image not found"
                  className={styles.img}
                  src={testimonial2}
                />
              </div>
              <div>
                <h3 className="mt-5">Edward Bold</h3>
                <p>CEO & Founder</p>
                <h2>``</h2>
                <p>
                  Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                  Provident asperiores consectetur tempore debitis temporibus,
                  pariatur quis,
                </p>
              </div>
            </div>
          </div>
          <div>
            <div className={styles.testimonial_single_item}>
              <div className={styles.testimonial_image}>
                <Image
                  alt="image not found"
                  className={styles.img}
                  src={testimonial3}
                />
              </div>
              <div>
                <h3 className="mt-5">Edward Bold</h3>
                <p>CEO & Founder</p>
                <h2>``</h2>
                <p>
                  Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                  Provident asperiores consectetur tempore debitis temporibus,
                  pariatur quis,
                </p>
              </div>
            </div>
          </div>
          <div>
            <div className={styles.testimonial_single_item}>
              <div className={styles.testimonial_image}>
                <Image
                  alt="image not found"
                  className={styles.img}
                  src={testimonial4}
                />
              </div>
              <div>
                <h3 className="mt-5">Edward Bold</h3>
                <p>CEO & Founder</p>
                <h2>``</h2>
                <p>
                  Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                  Provident asperiores consectetur tempore debitis temporibus,
                  pariatur quis,
                </p>
              </div>
            </div>
          </div>
        </Slider>
      </Col>
    </Row>
  );
};

export default Testimonial;
