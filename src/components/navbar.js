import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import "./../styles/navbar.css";
import icon from "./../icons/searchIcon.png";

function Navbar() {
  const onFormSubmit = (e) => {
    e.preventDefault();
    alert("searched");
  };
  const [open, setopen] = useState(false);
  const searchNow = () => {
    setopen(true);
  };
  // console.log(open);
  return (
    <div className="navbar">
      <div className="navbarMenu">
        <ul>
          <li>
            <NavLink to="/">Home</NavLink>
          </li>
          <li>
            <NavLink to="contact-us">ContactUs</NavLink>
          </li>
          <li>
            <NavLink to="post">Posts</NavLink>
          </li>
          <li>
            <NavLink to="about-us">AboutUs</NavLink>
          </li>
        </ul>
      </div>
      <div className="search">
        <form onSubmit={onFormSubmit}>
          <input
            placeholder="search"
            type="text"
            className={`searchInput${open ? "Active" : ""}`}
          />
          <img
            src={icon}
            alt="search icon"
            className="searchImag"
            onClick={searchNow}
          />
        </form>
      </div>
    </div>
  );
}

export default Navbar;
