import React, { useEffect, useState } from "react";
import logo from "../../assets/icon/logo-tripify.svg";
import { Link } from "react-router-dom";
import { Tooltip } from "antd";

export default function Navbar() {
  const [navbarShadow, setNavbarShadow] = useState(false);
  const colors = ["#5c67e1"];

  const handleScroll = () => {
    if (window.scrollY > 0) {
      setNavbarShadow(true);
    } else {
      setNavbarShadow(false);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);
  return (
    <>
      <section className="container">
        <nav
          className={`fixed-top navbar navbar-expand-lg bg-white py-4 ${navbarShadow ? "shadow" : ""}`}
          data-aos="fade-down"
          data-aos-duration="1000"
        >
          <div className="container-fluid col-10">
            <a className="navbar-brand" href="/">
              <img src={logo} alt="Logo" height="auto" className="d-inline-block align-text-top" />
            </a>
            <button
              className="navbar-toggler"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#navbarNavDropdown"
              aria-controls="navbarNavDropdown"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <span className="navbar-toggler-icon" />
            </button>
            <div className="collapse navbar-collapse justify-content-end" id="navbarNavDropdown">
              <ul className="navbar-nav head">
                <li className="nav-item">
                  <Link to="/" className="nav-link active" aria-current="page">
                    Home
                  </Link>
                </li>
                <li className="nav-item">
                  <Link to="/about" className="nav-link">
                    About
                  </Link>
                </li>
                <Tooltip title="Available Soon😊" color={colors}>
                  <li className="nav-item">
                    <Link to="/" className="nav-link">
                      Resources
                    </Link>
                  </li>
                </Tooltip>
                <Tooltip title="Available Soon😊" color={colors}>
                  <li className="nav-item">
                    <Link to="/" className="nav-link">
                      Contact
                    </Link>
                  </li>
                </Tooltip>
                <Tooltip title="Available Soon😊" color={colors}>
                  <li className="nav-item">
                    <Link to="/" className="nav-link">
                      Blog
                    </Link>
                  </li>
                </Tooltip>
              </ul>
              <Tooltip title="Available Soon😊" color={colors}>
                <button type="button" className="btn sign-in me-4">
                  Sign In
                </button>
              </Tooltip>
              <Tooltip title="Available Soon😊" color={colors}>
                <button type="button" className="btn register">
                  Register
                </button>
              </Tooltip>
            </div>
          </div>
        </nav>
      </section>
    </>
  );
}
