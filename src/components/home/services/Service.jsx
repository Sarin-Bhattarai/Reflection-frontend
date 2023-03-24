import React from "react";
import "../../../utils/css/services.css";
import ServicesData from "./ServicesData";

const Service = () => {
  return (
    <>
      <section className="services topMargin">
        <div className="container">
          <div className="heading">
            <h3>OUR SERVICES</h3>
            <h1>Best Services Offered</h1>
          </div>
          <div className="contain grid topMargin">
            {ServicesData.map((val) => {
              return (
                <>
                  <div className="box">
                    <div className="img">
                      <img src={val.cover} alt="servicesImg" />
                    </div>
                    <div className="text">
                      <h2>{val.title}</h2>
                      <p>{val.desc}</p>
                    </div>
                  </div>
                </>
              );
            })}
          </div>
        </div>
      </section>
    </>
  );
};

export default Service;
