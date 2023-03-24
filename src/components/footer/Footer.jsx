import React from "react";
import "../../utils/css/footer.css";
import logo from "../../utils/assets/logo3.png";
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
            <img src={logo} alt="footerLogo" />
            <p>
              Lorem ipsum dolor sit amet consectetur, adipisicing elit.
              Exercitationem ad optio qui.
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
                <Link className="footer-link" to="/shop">
                  Shop
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
            <h3>Pet Toys</h3>
            <p>Lorem ipsum dolor sit amet</p>
            <h3>Pet Food</h3>
            <p>Lorem ipsum dolor sit amet</p>
          </div>
          <div className="box">
            <h2>Get in Touch</h2>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. In,
              expedita!
            </p>
            <div className="icon">
              <FaMapMarkerAlt className="ia" />
              <label>Location: 12 Bagale Tol, Kathmandu, Nepal</label>
            </div>
            <div className="icon">
              <FaPhoneAlt className="ia" />
              <label>Phone: +977 9800000000</label>
            </div>
            <div className="icon">
              <FaEnvelope className="ia" />
              <label>Email: homi@gmail.com</label>
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
