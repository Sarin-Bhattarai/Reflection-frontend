import React from "react";
import "../../../utils/css/wrapper.css";

const Wrapper = () => {
  const data = [
    {
      title: "LOOKING FOR BEST SERVICES?",
      heading: "Get The Best For Your Dog",
      desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    },
  ];
  return (
    <>
      <section className="branding wrapper">
        <div className="container">
          {data.map((val) => {
            return (
              <div className="box">
                <h3>{val.title}</h3>
                <h2>{val.heading}</h2>
                <p>{val.desc}</p>
                <button className="primary-btn">Contact Us</button>
              </div>
            );
          })}
        </div>
      </section>
    </>
  );
};

export default Wrapper;
