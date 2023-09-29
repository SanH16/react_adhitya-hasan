import React from "react";
import Header from "../components/landing-page/header";
import Newsletter from "../components/landing-page/newsletter";

import "../assets/css/landing-page.css";
import content from "../assets/image/asset-figma.png";
import Footer from "../components/landing-page/footer";

export default function LandingPage() {
  return (
    <>
      <Header />

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
      <Footer />
    </>
  );
}
