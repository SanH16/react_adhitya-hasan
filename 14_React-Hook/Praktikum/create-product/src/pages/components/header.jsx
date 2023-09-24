import React from "react";

export default function Header() {
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
          <h4 className="navbar-brand" href="/">
            Simple Header
          </h4>
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
                <a
                  className="nav-link active text-bg-primary rounded d-inline-flex px-2 mb-2"
                  aria-current="page"
                  href="/"
                >
                  Home
                </a>
              </li>
              <li className="nav-item pe-4">
                <a className="nav-link rounded d-inline-flex px-2 mb-2" href="/">
                  Features
                </a>
              </li>
              <li className="nav-item pe-4">
                <a className="nav-link rounded d-inline-flex px-2 mb-2 disabled" href="/">
                  Pricing
                </a>
              </li>
              <li className="nav-item pe-4">
                <a className="nav-link rounded d-inline-flex px-2 mb-2 disabled" href="/">
                  FAQs
                </a>
              </li>
              <li className="nav-item pe-4">
                <a className="nav-link rounded d-inline-flex px-2 mb-2 disabled" href="/">
                  About
                </a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </section>
  );
}
