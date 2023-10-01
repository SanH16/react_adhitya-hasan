import React from "react";

export default function Footer() {
  return (
    <>
      <section id="arsha">
        <div className="wrapper-arsha">
          <div className="row">
            <div className="arsha-heading">
              <h4>ARSHA</h4>
              <ul id="street">
                <li>
                  A108 Adam Street <br />
                  New York, NY 535022 <br />
                  United States
                </li>
                <li>
                  <strong>Phone:</strong> +1 5589 55488 55 <br />
                  <strong>Email:</strong> info@example.com
                </li>
              </ul>
            </div>
            <div className="arsha-heading">
              <h4>Useful Links</h4>
              <ul>
                <li>Home</li>
                <li>About Us</li>
                <li>Services</li>
                <li>Terms of service</li>
                <li>Privacy policy</li>
              </ul>
            </div>
            <div className="arsha-heading">
              <h4>Our Services</h4>
              <ul>
                <li>Web Design</li>
                <li>Web Development</li>
                <li>Product Management</li>
                <li>Marketing</li>
                <li>Graphic Design</li>
              </ul>
            </div>
            <div className="arsha-heading">
              <h4>Our Social Networks</h4>
              <ul>
                <li>Cras fermentum odio eu feugiat lide par naso tierra videa magna derita valies</li>
              </ul>
              <div className="icon-hover">
                <li>
                  <a style={{ textDecoration: "none" }} href="https://github.com/SanH16">
                    <i className="fab fa-github" />
                  </a>
                </li>
                <li>
                  <i className="fab fa-instagram" />
                </li>
                <li>
                  <i className="fab fa-twitter" />
                </li>
                <li>
                  <i className="fab fa-facebook-f" />
                </li>
              </div>
            </div>
          </div>
        </div>
      </section>
      <footer className="bawah">
        <div className="under">
          <h5>
            ©️Copyright <strong>Arsha</strong>. All Right Reserved
          </h5>
          <h5>
            Design by <span>BootstrapMade</span>
          </h5>
        </div>
      </footer>
    </>
  );
}
