import React from "react";
import Faq from "react-faq-component";
import aboutPic from "../../../utils/assets/aboutpic.jpg";
import aboutPic2 from "../../../utils/assets/cat-care.png";
import "../../../utils/css/about.css";
import { Link } from "react-router-dom";

const About = () => {
  const data1 = [
    {
      title: "Who We Are And What We Do",
      desc1:
        "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Unde possimus quaerat quam dolorum ipsa laboriosam, repudia illum amet inventore facilis, eius libero.",
      desc2:
        "There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable.",
      desc3:
        "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
      cover: aboutPic,
    },
  ];

  const data = {
    rows: [
      {
        title: "24 hour Services",
        content: `Lorem ipsum, dolor sit amet consectetur adipisicing elit. Neque similique, placeat vel eligendi quidem aliquid odit enim suscipit aspernatur quo voluptates iusto unde voluptas perferendis cupiditate, quibusdam aperiam, voluptatem mollitia tenetur doloremque? Eaque dolores corporis molestias earum blanditiis saepe ducimus iste asperiores? Numquam ipsum, libero nostrum repellat sint vero rem!`,
      },

      {
        title: "Lorem Ipsum dolor sit",
        content: `Lorem ipsum, dolor sit amet consectetur adipisicing elit. Neque similique, placeat vel eligendi quidem aliquid odit enim suscipit aspernatur quo voluptates iusto unde voluptas perferendis cupiditate, quibusdam aperiam, voluptatem mollitia tenetur doloremque? Eaque dolores corporis molestias earum blanditiis saepe ducimus iste asperiores? Numquam ipsum, libero nostrum repellat sint vero rem!`,
      },

      {
        title: "Lorem Ipsum dolor sit",
        content: `Lorem ipsum, dolor sit amet consectetur adipisicing elit. Neque similique, placeat vel eligendi quidem aliquid odit enim suscipit aspernatur quo voluptates iusto unde voluptas perferendis cupiditate, quibusdam aperiam, voluptatem mollitia tenetur doloremque? Eaque dolores corporis molestias earum blanditiis saepe ducimus iste asperiores? Numquam ipsum, libero nostrum repellat sint vero rem!`,
      },
      {
        title: "Lorem Ipsum dolor sit",
        content: `Lorem ipsum, dolor sit amet consectetur adipisicing elit. Neque similique, placeat vel eligendi quidem aliquid odit enim suscipit aspernatur quo voluptates iusto unde voluptas perferendis cupiditate, quibusdam aperiam, voluptatem mollitia tenetur doloremque? Eaque dolores corporis molestias earum blanditiis saepe ducimus iste asperiores? Numquam ipsum, libero nostrum repellat sint vero rem!`,
      },
      {
        title: "Lorem Ipsum dolor sit",
        content: `Lorem ipsum, dolor sit amet consectetur adipisicing elit. Neque similique, placeat vel eligendi quidem aliquid odit enim suscipit aspernatur quo voluptates iusto unde voluptas perferendis cupiditate, quibusdam aperiam, voluptatem mollitia tenetur doloremque? Eaque dolores corporis molestias earum blanditiis saepe ducimus iste asperiores? Numquam ipsum, libero nostrum repellat sint vero rem!`,
      },
    ],
  };

  const styles = {
    titleTextColor: "black",
    rowTitleColor: "black",
    bgColor: "#fff",
    rowContentColor: "black",
    arrowColor: "black",
    transitionDuration: "0.8s",
  };

  const config = {
    animate: true,
    arrowIcon: "V",
    openOnload: 0,
    expandIcon: "+",
    collapseIcon: "-",
  };
  return (
    <>
      <section className="about topMargin">
        <div className="container flex">
          {data1.map((val) => {
            return (
              <>
                <div className="left mtop">
                  <div className="heading">
                    <h3>About Us</h3>
                    <h1>{val.title}</h1>
                  </div>
                  <p>{val.desc1}</p>
                  <p>{val.desc2}</p>
                  <p>{val.desc3}</p>
                  <button className="primary-btn ">
                    <Link style={{ color: "#fff" }} to="/contact">
                      Contact Us
                    </Link>
                  </button>
                </div>
                <div className="right">
                  <div className="img">
                    <img src={val.cover} alt="about-pic" />
                  </div>
                </div>
              </>
            );
          })}
        </div>
      </section>

      <section className="about-second topMargin">
        <div className="container">
          <div className="heading">
            <h1>Why Choose Us</h1>
          </div>

          <div className="about-grid">
            <div className="about-row">
              <div className="about-image">
                <img
                  className="cat-image"
                  src={aboutPic2}
                  alt="about-pic-second"
                />
              </div>
              <h2>Pet Daycare</h2>
              <p style={{ textAlign: "justify", marginBottom: "15px" }}>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Laudantium ipsam fugit facilis excepturi debitis nostrum aut
                eius distinctio doloribus expedita?
              </p>
              <button className="primary-btn ">
                <Link style={{ color: "#fff" }} to="/services">
                  More Services
                </Link>
              </button>
            </div>

            <div className="about-row">
              <Faq data={data} styles={styles} config={config} />
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default About;
