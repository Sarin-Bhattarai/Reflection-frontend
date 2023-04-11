import React from "react";
import "../../../utils/css/home.css";
import homePic from "../../../utils/assets/f-home.jpg";
import food1 from "../../../utils/assets/men.png";
import food2 from "../../../utils/assets/materials.png";
import food3 from "../../../utils/assets/work.png";
import { FaFacebookF, FaInstagram, FaTwitter, FaYoutube } from "react-icons/fa";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <>
      <section className="home">
        <div className="container flex">
          <div className="left">
            <div className="img">
              <img src={homePic} alt="cleaning" />
            </div>
          </div>
          <div className="right topMargin">
            <h1
              style={{
                fontSize: "52px",
              }}
            >
              REFLECTION CLEANERS <br />
              SINCE 2023
            </h1>
            <div className="socialIcon">
              <FaFacebookF className="i facebook" />
              <FaInstagram className="i instagram" />
              <FaTwitter className="i twitter" />
              <FaYoutube className="i youtube" />
            </div>
            <p
              style={{
                textAlign: "justify",
              }}
            >
              Welcome to our cleaning company! We are a professional cleaning
              service dedicated to providing exceptional cleaning solutions for
              homes and businesses. Our team of experienced cleaners is
              committed to ensuring that your space is sparkling clean and
              organized, leaving you with more time to focus on the things that
              matter most to you. Trust us to take care of your cleaning needs
              and enjoy a clean and fresh space every day!
            </p>
          </div>
        </div>
      </section>

      <section className="home-second topMargin">
        <div className="container">
          <div className="heading">
            <h1>Featured Services</h1>
          </div>

          <div className="grid">
            <div className="box">
              <div className="image">
                <img src={food1} alt="shop-pic" />
              </div>
              <div className="text">
                <p>set of highly skilled trained prof...</p>
                <h2>Trained Professionals</h2>
                <button className="primary-btn ">
                  <Link style={{ color: "#fff" }} to="/services">
                    See more
                  </Link>
                </button>
              </div>
            </div>
            {/* Box ends here */}
            <div className="box">
              <div className="image">
                <img src={food2} alt="shop-pic" />
              </div>
              <div className="text">
                <p>We have necessary equip.....</p>
                <h2>Necessary Equipments</h2>
                <button className="primary-btn ">
                  <Link style={{ color: "#fff" }} to="/services">
                    See more
                  </Link>
                </button>
              </div>
            </div>
            {/* Box ends here */}
            <div className="box">
              <div className="image">
                <img src={food3} alt="shop-pic" />
              </div>
              <div className="text">
                <p>We have very unique style of cle...</p>
                <h2>Cleaning Style</h2>
                <button className="primary-btn ">
                  <Link style={{ color: "#fff" }} to="/services">
                    See more
                  </Link>
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="home-third topMargin">
        <div className="container">
          <div className="heading">
            <h2>Statistics</h2>
          </div>

          <div className="grid-3">
            <div className="box" id="box90">
              <h4>
                Join thousands of Happy
                <br /> Customers who have
                <br /> Successfully contracted
                <br /> With our company.
              </h4>
              <p>
                We take pride in our company's track record of delivering
                exceptional service and satisfaction to our customers. With
                thousands of happy customers who have successfully contracted
                with us, we are confident that we can meet and exceed your
                expectations. Our commitment to excellence is reflected in every
                aspect of our business, from our skilled and experienced team of
                professionals to our use of high-quality products and equipment.
              </p>
            </div>
            {/* box ends */}
            <div className="box">
              <div className="small-grid">
                <div className="sg-row">
                  <span>8,827</span>
                  <h3>Happy Customers</h3>
                  <p style={{ color: "black" }}>
                    Satisfied clients are our top priority. Join them now and
                    experience our exceptional cleaning services.
                  </p>
                </div>
                <div className="sg-row">
                  <span>$640</span>
                  <h3>Average Savings</h3>
                  <p style={{ color: "black" }}>
                    Our services provide significant cost savings on cleaning
                    expenses, allowing you to allocate resources to other
                    priorities.
                  </p>
                </div>
              </div>
              <div className="small-grid">
                <div className="sg-row">
                  <span>105</span>
                  <h3>Trained Professionals</h3>
                  <p style={{ color: "black" }}>
                    Expert cleaners dedicated to quality service, ensuring a
                    spotless and satisfying clean every time.
                  </p>
                </div>
                <div className="sg-row">
                  <span>Many More+</span>
                  <h3>Services</h3>
                  <p style={{ color: "black" }}>
                    We offer reliable and top-notch cleaning services for all
                    your residential and commercial needs.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Home;
