export default function Header() {
  return (
    <section className="container">
      <nav className="fixed-top navbar navbar-expand-lg shadow-sm bg-body-tertiary pt-3 px-4">
        <div className="container-fluid">
          <h4 className="navbar-brand" href="#">
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
                  href="createProduct.html"
                >
                  Home
                </a>
              </li>
              <li className="nav-item pe-4">
                <a className="nav-link rounded d-inline-flex px-2 mb-2" href="createProduct.html">
                  Features
                </a>
              </li>
              <li className="nav-item pe-4">
                <a className="nav-link rounded d-inline-flex px-2 mb-2 disabled" href="#">
                  Pricing
                </a>
              </li>
              <li className="nav-item pe-4">
                <a className="nav-link rounded d-inline-flex px-2 mb-2 disabled" href="#">
                  FAQs
                </a>
              </li>
              <li className="nav-item pe-4">
                <a className="nav-link rounded d-inline-flex px-2 mb-2 disabled" href="#">
                  About
                </a>
              </li>
              <li className="nav-item dropdown">
                <a
                  className="nav-link dropdown-toggle"
                  href="#"
                  role="button"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                ></a>
                <ul className="dropdown-menu">
                  <li>
                    <a className="dropdown-item" href="landingPage.html">
                      Landing Page
                    </a>
                  </li>
                  <li>
                    <a className="dropdown-item" href="createProduct.html">
                      Create Product
                    </a>
                  </li>
                </ul>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </section>
  );
}
