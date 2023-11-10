import React from "react";
import logoFooter from "../../assets/icon/logo-tripify.svg";

export default function Footer() {
  return (
    <footer
      className="container col-lg-12 col-sm-12 mt-5"
      data-aos="fade-up"
      data-aos-duration="1000"
      data-aos-delay="200"
    >
      <div className="row ">
        <div className="tripify-heading">
          <img src={logoFooter} alt="Logo" height="auto" className="d-inline-block align-text-top mb-4 ms-4" />
          <ul id="street">
            <li>
              Tripify is an innovative application designed to streamline the process of planning and organizing trips
              for users.
            </li>
            <li>
              <strong>Phone:</strong> +62 895 3831 38600 <br />
              <strong>Email:</strong> adhityahasan011@gmail.com
            </li>
          </ul>
          <div className="icon-hover">
            <a href="https://github.com/SanH16" target="_blank" style={{ textDecoration: "none" }}>
              <li>
                <i className="fab fa-github" />
              </li>
            </a>
            <a href="https://instagram.com/crzans" target="_blank" style={{ textDecoration: "none" }}>
              <li>
                <i className="fab fa-instagram" />
              </li>
            </a>
            <a href="https://youtube.com/@adhityasan16" target="_blank" style={{ textDecoration: "none" }}>
              <li>
                <i className="fab fa-youtube" />
              </li>
            </a>
            <a href="https://facebook.com/thegamersmock" target="_blank">
              <li>
                <i className="fab fa-facebook-f" />
              </li>
            </a>
          </div>
        </div>
        <div className="tripify-heading">
          <h4>Company</h4>
          <ul>
            <li>About</li>
            <li>Blog</li>
            <li>Patners</li>
            <li>Careers</li>
            <li>Community</li>
          </ul>
        </div>
        <div className="tripify-heading">
          <h4>Resources</h4>
          <ul>
            <li>Customer</li>
            <li>Booking &amp; guides</li>
            <li>Api documentation</li>
          </ul>
        </div>
        <div className="tripify-heading">
          <h4>Programs</h4>
          <ul>
            <li>Our programs</li>
            <li>Our plans</li>
            <li>Partnerships</li>
            <li>Become a member</li>
          </ul>
        </div>
        <div className="tripify-heading">
          <h4>Support</h4>
          <ul>
            <li>Privacy</li>
            <li>FAQs</li>
            <li>Contact Us</li>
          </ul>
        </div>
      </div>
      <hr />
      <div className="d-flex col-12">
        <div className="col-lg-6 text-start">
          <p className="copy">Copyright ©️ 2023 SanTech</p>
        </div>
        <div className="col-lg-6 text-end">
          <a href="https://github.com/SanH16" style={{ textDecoration: "none" }}>
            <p className="agency">
              Tripify Travel Agency | <span>https://github.com/SanH16</span>
            </p>
          </a>
        </div>
      </div>
    </footer>
  );
}
