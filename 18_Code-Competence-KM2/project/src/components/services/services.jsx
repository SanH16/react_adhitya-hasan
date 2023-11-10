import React, { useRef } from "react";
import iconPlane from "../../assets/icon/icon-plane.svg";
import iconAtm from "../../assets/icon/icon-atm.svg";

export default function Services() {
  const scrollUpRef = useRef(null);

  const handleScrollUp = () => {
    window.scrollTo(0, document.body.scrollTop * 0.3);
  };
  return (
    <>
      {/* Service content */}
      <section id="services">
        <div className="row mb-5" style={{ marginTop: 190 }}>
          <div className="col-lg-4 col-md-10 col-sm-12 pt-5 me-5">
            <h1 className="tripify" data-aos="fade-right" data-aos-duration="1000">
              We Offer🚀 <br />
              best services
            </h1>
            <p className="text-paragraf mt-4" data-aos="fade-right" data-aos-duration="1000" data-aos-delay="200">
              Discover the world like never before with our innovative travel app.
            </p>
            <button
              id="scroll-up"
              type="button"
              className="btn discover mt-3"
              ref={scrollUpRef}
              onClick={handleScrollUp}
              data-aos="fade-right"
              data-aos-duration="1000"
              data-aos-delay="200"
            >
              Explore more
            </button>
          </div>

          <div
            className="col-lg-3 col-md-6 col-sm-6 ms-5 cards-service mt-5"
            data-aos="flip-left"
            data-aos-duration="1000"
            data-aos-delay="200"
          >
            <div className="card rounded-5 services mb-3">
              <img src={iconPlane} className="card-img" alt="Tour" />
              <div className="card-body">
                <h2 className="card-title ms-3 fw-bold mb-4">Best tour guide</h2>
                <p className="card-text text-secondary mx-3 mb-2" style={{ fontSize: 15, fontWeight: 300 }}>
                  Discover the world like never before with our innovate travel app. Discover the world like never
                  before with our innovate travel app. DIscover the world.
                </p>
              </div>
            </div>
          </div>

          <div
            className="col-lg-3 col-md-6 col-sm-6"
            data-aos="flip-right"
            data-aos-duration="1000"
            data-aos-delay="200"
          >
            <div className="card rounded-5 services">
              <img src={iconAtm} className="card-img" alt="Booking" />
              <div className="card-body">
                <h2 className="card-title ms-3 fw-bold mb-4">Easy booking</h2>
                <p className="card-text text-secondary mx-3 mb-2" style={{ fontSize: 15, fontWeight: 300 }}>
                  Discover the world like never before with our innovate travel app. Discover the world like never
                  before with our innovate travel app. DIscover the world.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
