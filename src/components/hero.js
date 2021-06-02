import React from "react";
import "./../styles/hero.css";
import Card from "./card";
import Logo from "./logo";
import Navbar from "./navbar";

function Hero() {
  return (
    <div>
      <Card>
        <div style={{ padding: "50px 0" }}></div>
        <Logo />
        <Navbar />
      </Card>
    </div>
  );
}
export default Hero;
