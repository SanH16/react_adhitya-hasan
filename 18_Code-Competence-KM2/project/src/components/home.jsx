import React, { useEffect, useRef } from "react";
import Navbar from "./navbar/navbar";

import imageVector from "../assets/img/trip-vector.png";
import Destination from "./destination/destination";
import Services from "./services/services";
import Newsletter from "./newsletter/newsletter";
import Footer from "./footer/footer";
import AOS from "aos";
import "aos/dist/aos.css";

export default function Home() {
  useEffect(() => {
    AOS.init();
  }, []);
  const scrollDownRef = useRef(null);

  const handleScrollDown = () => {
    window.scrollTo(0, document.body.scrollHeight * 0.3);
  };
  return (
    <>
      <Navbar />
      <main id="home" className="container col-lg-10 col-md-10 col-sm-12">
        {/* Main content */}
        <div className="row">
          <div className="col-lg-5 col-sm-12 pt-5">
            <h1 className="tripify" data-aos="fade-right" data-aos-duration="1000">
              Temukan tempat impian anda di <span>Tripify.</span>
            </h1>
            <p className="text-paragraf mt-4" data-aos="fade-right" data-aos-duration="1000" data-aos-delay="200">
              Discover the world like never before with our innovative travel app.
            </p>
            <button
              id="scroll-down"
              type="button"
              className="btn discover mt-3"
              data-aos="fade-right"
              data-aos-duration="1000"
              data-aos-delay="400"
              ref={scrollDownRef}
              onClick={handleScrollDown}
            >
              Discover Now
            </button>
          </div>
          <div className="col-lg-7 col-sm-12">
            <img
              src={imageVector}
              alt="gambar"
              className="tripify-image"
              data-aos="fade-left"
              data-aos-duration="1000"
              data-aos-delay="200"
            />
          </div>
        </div>
        <Destination />
        {/* <About /> */}
        <Services />
        <Newsletter />
      </main>
      <Footer />
    </>
  );
}
