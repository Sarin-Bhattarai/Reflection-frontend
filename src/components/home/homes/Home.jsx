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
            <p>
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Cumque
              odit velit in dicta vero quae amet, odio voluptas. Odit magnam eum
              quam? Rem adipisci mollitia aut numquam temporibus quasi vitae
              vitae vitae vitae.
            </p>
            <button className="primary-btn ">
              <Link style={{ color: "#fff" }} to="/contact">
                Contact Us
              </Link>
            </button>
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
                <p>Price: $10</p>
                <p>Lorem ipsum dolor sit amet smet.</p>
                <h2>Pedigree</h2>
                <button className="primary-btn ">
                  <Link style={{ color: "#fff" }} to="/shop">
                    Shop now
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
                <p>Price: $12</p>
                <p>Lorem ipsum dolor sit amet smet.</p>
                <h2>Mockup</h2>
                <button className="primary-btn ">
                  <Link style={{ color: "#fff" }} to="/shop">
                    Shop now
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
                <p>Price: $15</p>
                <p>Lorem ipsum dolor sit amet smet.</p>
                <h2>Smartbones</h2>
                <button className="primary-btn ">
                  <Link style={{ color: "#fff" }} to="/shop">
                    Shop now
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
                <br /> Dog owners who have
                <br /> Successfully completed
                <br /> Our courses.
              </h4>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Quidem
                odit dolor nemo velit expedita totam ad officiis voluptatum
                facilis perspiciatis, autem reprehenderit recusandae? Atque
                voluptatum minima cumque eligendi magni sint cupiditate
                obcaecati veniam perspiciatis voluptatibus repellat, provident
                quaerat asperiores suscipit, vitae perferendis. Quo nam ex
                itaque recusandae, sit sapiente provident!
              </p>
            </div>
            {/* box ends */}
            <div className="box">
              <div className="small-grid">
                <div className="sg-row">
                  <span>8.827</span>
                  <h3>Happy Dog Owners</h3>
                  <p style={{ color: "black" }}>
                    Sample text. Click to select the textbox. Click again or
                    double click to start editing the text.
                  </p>
                </div>
                <div className="sg-row">
                  <span>$640</span>
                  <h3>Average Savings</h3>
                  <p style={{ color: "black" }}>
                    Sample text. Click to select the textbox. Click again or
                    double click to start editing the text.
                  </p>
                </div>
              </div>
              <div className="small-grid">
                <div className="sg-row">
                  <span>219.844</span>
                  <h3>Training Videos</h3>
                  <p style={{ color: "black" }}>
                    Sample text. Click to select the textbox. Click again or
                    double click to start editing the text.
                  </p>
                </div>
                <div className="sg-row">
                  <span>only 10</span>
                  <h3>Training Time</h3>
                  <p style={{ color: "black" }}>
                    Sample text. Click to select the textbox. Click again or
                    double click to start editing the text.
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
