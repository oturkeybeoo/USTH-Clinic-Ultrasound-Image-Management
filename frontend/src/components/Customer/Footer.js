import React from "react";
import "./Footer.css";
import { Link } from "react-router-dom";
import logo from "../../images/medcareicon.png";
import phone from "../../images/phone.png";
import mail from "../../images/mail.png";
import location from "../../images/location.png";

function Footer() {
  return (
    <div className="footer-container">
      <div class="footer-links">
        <div className="footer-link-wrapper">
          <div class="footer-link-items">
            <h2>WHO WE ARE</h2>
            <img className="footer-logo" src={logo} />
            <h5>Making health care</h5>
            <h5>better together</h5>
          </div>
          <div class="footer-link-items">
            <h2>USEFUL LINKS</h2>
            <Link to="/">Home</Link>
            <Link to="/">About</Link>
            <Link to="/">Contact Us</Link>
          </div>
          <div class="footer-link-items">
            <h2>GET IN TOUCH</h2>
            <Link to="/">
              <img className="footer-icon" src={phone} /> 0931 910 JQK
            </Link>
            <Link to="/">
              <img className="footer-icon" src={mail} /> medcare@med.care
            </Link>
            <Link to="/">
              <img className="footer-icon" src={location} /> 18 Hoang Quoc Viet
            </Link>
          </div>
          <div class="footer-link-items">
            <h2>LANGUAGE</h2>
            <Link to="/">English</Link>
            <Link to="/">Tiếng Việt</Link>
            <Link to="/">Francais</Link>
          </div>
        </div>
      </div>
      <section class="social-media">
        <div>
          <small class="website-rights">
            Copyright © 2021 Medcare. All rights reserved.
          </small>
          <div class="social-icons">
            <Link
              class="social-icon-link facebook"
              to="/"
              target="_blank"
              aria-label="Facebook"
            >
              <i class="fab fa-facebook-f" />
            </Link>
            <Link
              class="social-icon-link instagram"
              to="/"
              target="_blank"
              aria-label="Instagram"
            >
              <i class="fab fa-instagram" />
            </Link>
            <Link
              class="social-icon-link youtube"
              to="/"
              target="_blank"
              aria-label="Youtube"
            >
              <i class="fab fa-youtube" />
            </Link>
            <Link
              class="social-icon-link twitter"
              to="/"
              target="_blank"
              aria-label="Twitter"
            >
              <i class="fab fa-twitter" />
            </Link>
            <Link
              class="social-icon-link twitter"
              to="/"
              target="_blank"
              aria-label="LinkedIn"
            >
              <i class="fab fa-linkedin" />
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Footer;
