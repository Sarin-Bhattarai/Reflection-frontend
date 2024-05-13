import React from "react";
import "../../utils/css/blog.css";
import Blogdata from "./BlogData";
import { FaAngleDoubleRight } from "react-icons/fa";

const Blog = () => {
  return (
    <>
      <section className="blog services">
        <div className="container topMargin">
          <div className="heading">
            <h3>NEW BLOG</h3>
            <h1>Read Exciting Blog Every Week</h1>
          </div>

          <div className="contain grid topMargin">
            {Blogdata.map((val) => {
              return (
                <>
                  <div className="box">
                    <div className="img">
                      <img src={val.cover} alt="blogImage" />
                    </div>
                    <div className="text">
                      <span>{val.date}</span>
                      <h2>{val.title}</h2>
                      <a
                        href="https://www.thespruce.com/cleaning-4127917"
                        target="?"
                      >
                        Read More
                        <FaAngleDoubleRight className="icon" />
                      </a>
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

export default Blog;
