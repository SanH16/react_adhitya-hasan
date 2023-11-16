import React from "react";
import { Link } from "react-router-dom";

export default function HeaderProduct() {
  window.addEventListener("scroll", function () {
    const navbar = document.querySelector("nav");
    if (window.scrollY > 0) {
      navbar.classList.add("shadow");
    } else {
      navbar.classList.remove("shadow");
    }
  });
  return (
    <section className="container">
      <nav className="fixed-top navbar navbar-expand-lg bg-transparent py-4 px-4">
        <div className="container-fluid">
          <Link to={"/create-product"}>
            <h4 className="navbar-brand">Simple Header</h4>
          </Link>
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
            <ul className="navbar-nav">
              <li className="nav-item pe-4">
                <Link to="/create-product">
                  <span className="nav-link active text-bg-primary rounded d-inline-flex px-2 mb-2" aria-current="page">
                    Home
                  </span>
                </Link>
              </li>
              <li className="nav-item pe-4">
                <Link to="/">
                  <span className="nav-link rounded text-primary d-inline-flex px-2 mb-2" href="/">
                    Landing Page
                  </span>
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </section>
  );
}
