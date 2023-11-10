import React, { useRef } from "react";
import iconFlag from "../../assets/icon/icon-flag.svg";
import iconDollar from "../../assets/icon/icon-dollar.svg";
import iconDate from "../../assets/icon/icon-date.svg";

export default function Destination() {
  const scrollNewsRef = useRef(null);

  const handleScrollNews = () => {
    window.scrollTo(0, document.body.scrollHeight * 0.55);
  };
  return (
    <>
      {/* Destination content  */}
      <div className="row justify-content-center">
        <div className="container-fluid card destination col-12" data-aos="zoom-in" data-aos-duration="1000">
          <div className="row ms-3 my-auto ">
            <div className="col-3">
              <div className="card" style={{ borderColor: "transparent" }}>
                <div className="row g-3 align-items-center">
                  <div className="col-lg-4 col-md-6">
                    <img src={iconFlag} className="img-fluid rounded" alt="Flag" />
                  </div>
                  <div className="col-md-8">
                    <div className="card-body card-destination">
                      <p className="card-text text-secondary ct">Destination</p>
                      <p className="card-text ct">
                        <small className="text-black fw-medium">Jakarta, Indonesia</small>
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-3">
              <div className="card" style={{ borderColor: "transparent" }}>
                <div className="row g-3 align-items-center">
                  <div className="col-lg-4 col-md-6">
                    <img src={iconDollar} className="img-fluid rounded" alt="Price" />
                  </div>
                  <div className="col-md-8">
                    <div className="card-body card-destination">
                      <p className="card-text text-secondary ct">Average Price</p>
                      <p className="card-text ct">
                        <small className="text-black fw-medium">$120 - $900</small>
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-3">
              <div className="card" style={{ borderColor: "transparent" }}>
                <div className="row g-3 align-items-center">
                  <div className="col-lg-4 col-md-6">
                    <img src={iconDate} className="img-fluid rounded" alt="Date" />
                  </div>
                  <div className="col-md-8">
                    <div className="card-body card-destination">
                      <p className="card-text text-secondary ct">Date</p>
                      <p className="card-text ct">
                        <small className="text-black fw-medium">September 2023</small>
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-3 my-auto">
              <div className="card" style={{ borderColor: "transparent" }}>
                <div className="row ms-3 align-items-center">
                  <div className="col-12">
                    <button
                      id="scroll-news"
                      type="button"
                      className="btn search"
                      ref={scrollNewsRef}
                      onClick={handleScrollNews}
                    >
                      {window.innerWidth <= 576 ? (
                        <span>
                          <i className="fa fa-search text-white me-3" />
                        </span>
                      ) : (
                        <span>
                          <i className="fa fa-search text-white me-3" /> Search
                        </span>
                      )}
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
