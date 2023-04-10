import React from "react";
import "../../utils/css/contact.css";
import {
  FaFacebookF,
  FaInstagram,
  FaTwitter,
  FaYoutube,
  FaMapMarkerAlt,
  FaEnvelope,
  FaPhoneAlt,
} from "react-icons/fa";

const Contact = () => {
  return (
    <>
      <section className="contact topMargin-2">
        <div className="container">
          <div className="heading">
            <h3>CONTACT US</h3>
            <h1>Get In Touch With Us</h1>
          </div>
          <div className="contact-box">
            <div className="contact form">
              <form>
                <div className="formBox">
                  <div className="row50">
                    <div className="inputBox">
                      <span>First Name</span>
                      <input type="text" placeholder="john" />
                    </div>
                    <div className="inputBox">
                      <span>Last Name</span>
                      <input type="text" placeholder="cena" />
                    </div>
                  </div>

                  <div className="row50">
                    <div className="inputBox">
                      <span>Email</span>
                      <input type="email" placeholder="john@email.com" />
                    </div>
                    <div className="inputBox">
                      <span>Mobile</span>
                      <input type="tel" placeholder="+64 21345678" />
                    </div>
                  </div>

                  <div className="row100">
                    <div className="inputBox">
                      <span>Message</span>
                      <textarea placeholder="Write your message here..."></textarea>
                    </div>
                  </div>

                  <div className="row100">
                    <div className="inputBox">
                      <input type="submit" value="Send" />
                    </div>
                  </div>
                </div>
              </form>
            </div>
            <div className="contact info">
              <div className="infoBox">
                <div>
                  <span>
                    <FaMapMarkerAlt />
                  </span>
                  <p>
                    Location: 189 Hobson street,
                    <br /> Central Auckland
                  </p>
                </div>
                <div>
                  <span>
                    <FaEnvelope />
                  </span>
                  <a href="mailto:wagging@gmail.com">
                    inforeflectioncleaners@gmail.com
                  </a>
                </div>
                <div>
                  <span>
                    <FaPhoneAlt />
                  </span>
                  <a href="tel:+64 220904799">+64 220904799</a>
                </div>
                <ul className="sci">
                  <li>
                    <a href="/#">
                      <FaFacebookF />
                    </a>
                  </li>
                  <li>
                    <a href="/#">
                      <FaInstagram />
                    </a>
                  </li>
                  <li>
                    <a href="/#">
                      <FaTwitter />
                    </a>
                  </li>
                  <li>
                    <a href="/#">
                      <FaYoutube />
                    </a>
                  </li>
                </ul>
              </div>
            </div>
            <div className="contact map">
              <iframe
                title="Map"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3192.588936283577!2d174.75652487560436!3d-36.85231967223242!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x6d0d47eef5594c17%3A0xcff83468295a622!2s189%20Hobson%20Street%2C%20Auckland%20CBD%2C%20Auckland%201010%2C%20New%20Zealand!5e0!3m2!1sen!2snp!4v1681141547188!5m2!1sen!2snp"
                style={{
                  border: 0,
                }}
                allowfullscreen=""
                loading="lazy"
                referrerpolicy="no-referrer-when-downgrade"
              ></iframe>
            </div>
          </div>
        </div>
      </section>
      <br />
    </>
  );
};

export default Contact;
