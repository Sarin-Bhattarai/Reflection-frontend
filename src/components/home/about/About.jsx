import React from "react";
import Faq from "react-faq-component";
import aboutPic from "../../../utils/assets/who.jpg";
import aboutPic2 from "../../../utils/assets/ser-1.png";
import "../../../utils/css/about.css";
import { Link } from "react-router-dom";

const About = () => {
  const data1 = [
    {
      title: "Who We Are And What We Do",
      desc1:
        "Reflection Cleaner is a professional cleaning company that offers reliable and high-quality cleaning services to residential and commercial clients in the local area.",
      desc2:
        "We are proud to be certified by industry-leading organizations and have received numerous awards and accolades for our exceptional service. Our team of experienced cleaners is dedicated to providing personalized and customizable cleaning solutions that meet the unique needs of our clients.",
      desc3:
        "Whether you need a one-time cleaning or ongoing service, we are here to help you maintain a clean and healthy environment. Contact us today to schedule a cleaning service with our professional and reliable team.",
      cover: aboutPic,
    },
  ];

  const data = {
    rows: [
      {
        title: "24 hour Services",
        content: `Our 24-hour service ensures that we're available around the clock to help you with any cleaning emergencies. Whether it's a last-minute stain or an unexpected spill, our professional team is always ready to assist you. Contact us anytime, day or night, for fast and reliable cleaning services.`,
      },

      {
        title: "Door-to-Door Service",
        content: `Our door-to-door service makes cleaning convenient and hassle-free for you. We pick up your items from your doorstep and deliver them back to you clean and fresh. Our professional team ensures that your items are handled with care and returned to you in a timely and efficient manner.`,
      },

      {
        title: "Trained Professionals",
        content: `Our cleaning services are provided by trained professionals who are experts in their field. They are equipped with the knowledge and skills to handle all types of cleaning tasks, big or small. You can trust our team to deliver exceptional results and leave your space looking spotless and fresh`,
      },
      {
        title: "Laundary and Dry Cleaning",
        content: `Our laundry and dry cleaning services are designed to provide you with clean and fresh clothes, linens, and textiles. We use high-quality cleaning products and state-of-the-art equipment to ensure that your items are cleaned to perfection. Trust us to handle your laundry needs with care and attention to detail.`,
      },
      {
        title: "Commercial Cleaning",
        content: `Our commercial cleaning services are tailored to meet the unique needs of your business. From offices and retail spaces to medical facilities and warehouses, we provide comprehensive cleaning solutions that help maintain a clean and healthy work environment. Trust us to keep your business looking its best.`,
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
              <h2>Laundary and Dry Cleaning</h2>
              <p style={{ textAlign: "justify", marginBottom: "15px" }}>
                We provide laundry and dry cleaning services with a focus on
                quality, convenience, and affordability. Satisfaction
                guaranteed.
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
