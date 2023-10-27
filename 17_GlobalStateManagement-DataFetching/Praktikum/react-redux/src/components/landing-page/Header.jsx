import React from "react";
import { Link } from "react-router-dom";

export default function Header() {
  return (
    <>
      <section className="container">
        <nav className="fixed-top navbar navbar-expand-lg shadow-sm bg-body-tertiary pt-3 px-4">
          <div className="container-fluid">
            <Link to="/">
              <h4 className="navbar-brand">Landing Page</h4>
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
                  <Link to="/">
                    <span
                      className="nav-link active text-bg-primary rounded d-inline-flex px-2 mb-2"
                      aria-current="page"
                    >
                      Home
                    </span>
                  </Link>
                </li>
                <li className="nav-item pe-4">
                  <Link to="/create-product">
                    <span className="nav-link anav rounded d-inline-flex px-2 mb-2">Create Product</span>
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
