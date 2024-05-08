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
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d25541.755623547862!2d174.7456105008228!3d-36.84919447288924!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x6d0d47fb48a99ab9%3A0x500ef6143a2b3e0!2sAuckland%20CBD%2C%20Auckland%201010%2C%20New%20Zealand!5e0!3m2!1sen!2snp!4v1715149523514!5m2!1sen!2snp "
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
