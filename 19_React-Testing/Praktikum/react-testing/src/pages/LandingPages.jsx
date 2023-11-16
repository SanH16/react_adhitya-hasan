import React from "react";

import "../assets/css/landing-page.css";
import content from "../assets/img/asset-figma.png";

import HeaderLP from "../components/landing-page/HeaderLP";
import Newsletter from "../components/landing-page/Newsletter";
import FooterLP from "../components/landing-page/FooterLP";

function LandingPages() {
  return (
    <>
      <HeaderLP />
      <main className="landing">
        <section className="hero">
          <div className="columnn">
            <h1 className="solution">Better Solutions For Your Business</h1>
            <p className="team">We are team of talented designers making websites with Bootstrap</p>
            <div className="contain">
              <a style={{ textDecoration: "none" }} href="/" className="abutton">
                Get Started
              </a>
              <a style={{ textDecoration: "none" }} href="/" className="btns abutton">
                Watch Video
              </a>
            </div>
          </div>
          <div className="columnn">
            <img className="gambar" src={content} alt="gambar" />
          </div>
        </section>
      </main>

      <Newsletter />
      <FooterLP />
    </>
  );
}

export default LandingPages;
