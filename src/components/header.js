import React from "react";
import "./../styles/header.css";

function Header() {
  return (
    <header className="headerContainer">
      <nav className="headerMenu">
        <a href="#">Home</a>
        <a href="#">ContactUs</a>
        <a href="#">AboutUs</a>
      </nav>
      <div>Social Media Links</div>
    </header>
  );
}
export default Header;
