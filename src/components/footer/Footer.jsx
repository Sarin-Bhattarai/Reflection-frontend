import React from "react";
import "../../utils/css/footer.css";
import logo from "../../utils/assets/logo.png";
import {
  FaFacebookF,
  FaInstagram,
  FaTwitter,
  FaYoutube,
  FaMapMarkerAlt,
  FaEnvelope,
  FaPhoneAlt,
} from "react-icons/fa";
import { Link } from "react-router-dom";
import moment from "moment";

const Footer = () => {
  return (
    <>
      <footer>
        <div className="container grid1">
          <div className="box">
            <img className="fft" src={logo} alt="footerLogo" />
            <p>
              Transforming spaces with our expert cleaning services, leaving you
              with a spotless and fresh environment.
            </p>
            <div className="socialIcon">
              <FaFacebookF className="i" />
              <FaInstagram className="i" />
              <FaTwitter className="i" />
              <FaYoutube className="i" />
            </div>
          </div>

          <div className="box">
            <h2>Quick Links</h2>
            <ul>
              <li>
                <Link className="footer-link" to="/about">
                  About
                </Link>
              </li>

              <li>
                <Link className="footer-link" to="/contact">
                  Contact
                </Link>
              </li>
              <li>
                <Link className="footer-link" to="/faq">
                  FAQs
                </Link>
              </li>
              <li>
                <Link className="footer-link" to="/terms">
                  Terms & condition
                </Link>
              </li>
              <li>
                <Link className="footer-link" to="/privacy">
                  Privacy
                </Link>
              </li>
            </ul>
          </div>

          <div className="box">
            <h2>Recent Posts</h2>
            <h3>Refresh Your Space</h3>
            <p>Refresh your space and</p>
            <h3>House Cleaning Tip</h3>
            <p>Amazing tips for clea..</p>
          </div>
          <div className="box">
            <h2>Get in Touch</h2>
            <p>
              Contact us today for exceptional cleaning services and a spotless
              space.
            </p>
            <div className="icon">
              <FaMapMarkerAlt className="ia" />
              <label>Location: 189 Hobson Street,CBD, Auckland</label>
            </div>
            <div className="icon">
              <FaPhoneAlt className="ia" />
              <label>Phone: +64 220904799</label>
            </div>
            <div className="icon">
              <FaEnvelope className="ia" />
              <label>inforeflectioncleaners@gmail.com</label>
            </div>
          </div>
        </div>

        <div className="legal container">
          <p>Copyright @ {moment().year()}. All rights reserved.</p>
          <label>
            Design & Developed by <span>Untech boys</span>
          </label>
        </div>
      </footer>
    </>
  );
};

export default Footer;
