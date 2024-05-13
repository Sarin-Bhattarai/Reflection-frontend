import React, { useState } from "react";
import { Link } from "react-router-dom";
import "../../../utils/css/header.css";
import { MdOutlineMenu, MdOutlineClose } from "react-icons/md";

const Header = () => {
  const [sidebar, setSidebar] = useState(false);

  window.addEventListener("scroll", function () {
    const header = document.querySelector(".header");
    header.classList.toggle("active", window.scrollY > 150);
  });

  //sliding function for header title
  window.onload = function () {
    document.getElementById("title").style.marginLeft = "0"; // Ensure title is visible
  };

  return (
    <>
      <header className="header">
        <div className="container flex">
          <div className="logo">
            <a href="/">
              <h1 id="title">Reflection Cleaner</h1>
            </a>
          </div>
          <div className="nav">
            <ul
              className={sidebar ? "nav-links-sidebar" : "nav-links"}
              onClick={() => setSidebar(false)}
            >
              <li>
                <Link to="/">Home</Link>
              </li>
              {/* <li>
                <Link to="/shop">Shop</Link>
              </li> */}
              <li>
                <Link to="/about">About</Link>
              </li>
              <li>
                <Link to="/services">Services</Link>
              </li>
              <li>
                <Link to="/blog">Blogs</Link>
              </li>
              <li>
                <Link to="/teams">Team</Link>
              </li>
              <li>
                <Link to="/faq">FAQs</Link>
              </li>
              <li>
                <Link to="/contact">Contact</Link>
              </li>
            </ul>
          </div>
          <button
            className="navbar-items-icon"
            onClick={() => setSidebar(!sidebar)}
          >
            {sidebar ? <MdOutlineClose /> : <MdOutlineMenu />}
          </button>
        </div>
      </header>
    </>
  );
};

export default Header;
