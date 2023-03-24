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
                      <input type="text" placeholder="John" />
                    </div>
                    <div className="inputBox">
                      <span>Last Name</span>
                      <input type="text" placeholder="Cena" />
                    </div>
                  </div>

                  <div className="row50">
                    <div className="inputBox">
                      <span>Email</span>
                      <input type="email" placeholder="John@email.com" />
                    </div>
                    <div className="inputBox">
                      <span>Mobile</span>
                      <input type="tel" placeholder="+977 9800000000" />
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
                    Location: 12 Bagale Tol,
                    <br /> Kathmandu, Nepal
                  </p>
                </div>
                <div>
                  <span>
                    <FaEnvelope />
                  </span>
                  <a href="mailto:wagging@gmail.com">homibuddy@gmail.com</a>
                </div>
                <div>
                  <span>
                    <FaPhoneAlt />
                  </span>
                  <a href="tel:+977 9800000000">+977 9800000000</a>
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
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d14130.927037028825!2d85.33106357908288!3d27.69468432475265!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39eb199a06c2eaf9%3A0xc5670a9173e161de!2z4KSo4KSv4KS-4KSBIOCkrOCkvuCkqOClh-CktuCljeCkteCksCwg4KSV4KS-4KSg4KSu4KS-4KSh4KWM4KSBIDQ0NjAw!5e0!3m2!1sne!2snp!4v1659366827429!5m2!1sne!2snp"
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
