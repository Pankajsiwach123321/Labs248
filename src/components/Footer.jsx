import React from "react";
import logo from "../assets/images/webp/logo.webp";
import { Facebook, Instagram, Linkin, Twitter } from "./Icon.jsx";

const Footer = () => {
  const date = new Date().getFullYear();

  return (
    <footer className=" bg-black position-relative z-1 overflow- hidden -mt-1 overflow-xclip">
      <div className=" container text-center mb-3 ">
        <img src={logo} alt="logo" width={287} />
        <div className=" d-flex align-items-center gap-4 justify-content-center mt-3  pt-1 ">
          <a
            href="#Home"
            className=" lh-24 fs-md font-normal text-opacit-70 text-decoration-none text-c-white hoverlink position-relative  "
          >
            Home
          </a>
          <a
            href="#Roadmap"
            className=" lh-24 fs-md font-normal text-opacit-70 text-decoration-none text-c-white hoverlink position-relative  "
          >
            Roadmap
          </a>
          <a
            href="#Ourteam"
            className=" lh-24 fs-md font-normal text-opacit-70 text-decoration-none text-c-white hoverlink position-relative  "
          >
            Team
          </a>
          <a
            href="#Aboutus"
            className=" lh-24 fs-md font-normal text-opacit-70 text-decoration-none text-c-white hoverlink position-relative  "
          >
            About Us
          </a>
        </div>
        <div className=" d-flex gap-3 align-items-center justify-content-center pt-4">
          <a href="https://twitter.com/account/access" target="_blanck" className="svg-up">
            <Twitter />
          </a>
          <a href="https://www.linkedin.com/" target="_blanck" className="svg-up">
            <Facebook />
          </a>
          <a href="https://www.linkedin.com/" target="_blanck" className="svg-up">
            <Instagram />
          </a>
          <a href="https://www.linkedin.com/" target="_blanck" className="svg-up">
            <Linkin />
          </a>
        </div>
      </div>
      <p className="border-t fw-normal fs-sm lh-19 mb-0 opacity-60 text-white text-center py-4 mt-4">
        © {date} 248 Labs. All rights reserved
      </p>
      <div className="ellipes1-footer"></div>
      <div className="ellipes2-footer"></div>
    </footer>
  );
};

export default Footer;
