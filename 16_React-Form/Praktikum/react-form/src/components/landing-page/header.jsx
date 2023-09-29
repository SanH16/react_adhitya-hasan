import React from "react";
import { Link } from "react-router-dom";

export default function Header() {
  return (
    <>
      <section className="container">
        <nav className="fixed-top navbar navbar-expand-lg shadow-sm bg-body-tertiary pt-3 px-4">
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
                  <Link to="/create-product">
                    <a className="nav-link anav rounded d-inline-flex px-2 mb-2" href="/">
                      Create Product
                    </a>
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </nav>
      </section>
    </>
  );
}
