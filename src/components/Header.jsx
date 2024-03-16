import React from "react";
import NavBar from "./NavBar";
import HeaderContent from "./HeaderContent";
import triangle from "../assets/images/webp/traingle.webp";
const Header = () => {
  return (
    <header id="Home" className=" min-vh-100 bg-header d-flex flex-column">
      <NavBar />
      <HeaderContent />
      <img
        src={triangle}
        alt="triangle"
        width={95}
        height={47}
        className="mx-auto"
      />
    </header>
  );
};

export default Header;
