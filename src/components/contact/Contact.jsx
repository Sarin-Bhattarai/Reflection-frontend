import React from "react";
import "../../utils/css/contact.css";
import { useForm } from "@formspree/react";
import { useHistory } from "react-router-dom";

const Contact = () => {
  const [state, handleSubmit] = useForm("xyyabpgj");
  const history = useHistory();
  if (state.succeeded) {
    return (
      <>
        <div>
          <p>Thankyou for your message!</p>;
        </div>
        {setTimeout(() => {
          history.push("/");
        }, 1000)}
      </>
    );
  }
  return (
    <>
      <section className="contact topMargin-2">
        <div className="container">
          <div className="heading">
            <h3>CONTACT US</h3>
            <h1>Get In Touch With Us</h1>
          </div>
          <div className="contact-grid">
            <div className="contact-section">
              <form onSubmit={handleSubmit} className="contact-form">
                <label className="lbl">First Name</label>
                <div>
                  <input
                    className="inp-con"
                    name="firstname"
                    type="text"
                    required
                  />
                </div>

                <label className="lbl">Last Name</label>
                <div>
                  <input
                    className="inp-con"
                    name="lastname"
                    type="text"
                    required
                  />
                </div>
                <label className="lbl">Email</label>
                <div>
                  <input
                    className="inp-con"
                    name="email"
                    type="email"
                    required
                  />
                </div>
                <label className="lbl">Mobile</label>
                <div>
                  <input
                    className="inp-con"
                    name="mobile"
                    type="tel"
                    required
                    placeholder="+64 2134678"
                  />
                </div>
                <label className="lbl">Message</label>
                <div>
                  <textarea
                    className="inp-text"
                    name="message"
                    type="text"
                    required
                  />
                </div>
                <button type="submit" className="primary-btn">
                  Send
                </button>
              </form>
            </div>
            <div className="map-section">
              <div class="embed-responsive">
                <iframe
                  title=" "
                  height="600px"
                  width="110%"
                  className="embed"
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3192.588936283577!2d174.75652487560436!3d-36.85231967223242!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x6d0d47eef5594c17%3A0xcff83468295a622!2s189%20Hobson%20Street%2C%20Auckland%20CBD%2C%20Auckland%201010%2C%20New%20Zealand!5e0!3m2!1sen!2snp!4v1681226098532!5m2!1sen!2snp"
                />
              </div>
            </div>
          </div>
        </div>
      </section>
      <br />
    </>
  );
};

export default Contact;
