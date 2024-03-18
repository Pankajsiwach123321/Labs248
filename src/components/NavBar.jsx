import React, { useState } from "react";
import logo from "../assets/images/webp/logo.webp";
import { Cross } from "./Icon";
const NavBar = () => {
  const [show, setshow] = useState(false);
  function showme() {
    setshow(!show);
  }
  function hideme() {
    setshow(false);
  }
  if (show) {
    document.body.classList.add("max_over_flow_hidden");
  } else {
    document.body.classList.remove("max_over_flow_hidden");
  }
  return (
    <nav className="py-19">
      <div className=" container">
        <div className="row justify-content-between align-items-center ">
          <div className=" col-auto">
            <a href="#">
              <img src={logo} alt="logo" className="w-100 max-w-206" />
            </a>
          </div>
          <div className="col-auto">
            <ul className="ps-0 mb-0  d-flex align-items-center gap-40">
              <li
                className={` ${
                  show ? "start-0" : " left-100"
                } d-flex gap-4  mobile-view align-items-center `}
              >
                <a
                  onClick={hideme}
                  href="#Aboutus"
                  className=" lh-24 fs-md font-normal text-opacit-70 text-decoration-none text-c-white hoverlink position-relative  "
                >
                  About Us
                </a>
                <a
                  onClick={hideme}
                  href="#Ourteam"
                  className=" lh-24 fs-md font-normal text-opacit-70 text-decoration-none text-c-white hoverlink position-relative  "
                >
                  Our Team
                </a>
                <a
                  onClick={hideme}
                  href="#Roadmap"
                  className=" lh-24 fs-md font-normal text-opacit-70 text-decoration-none text-c-white hoverlink position-relative  "
                >
                  Roadmap
                </a>
                <div className="button-border d-sm-none ">
                  <button
                    onClick={hideme}
                    className="button-primery   fs-lg fw-bold text-c-white lh-27"
                  >
                    Contact Us
                  </button>
                </div>
              </li>
              <div className="button-border d-sm-block d-none   me-4 me-md-0">
                <button className="button-primery  fs-lg fw-bold text-c-white lh-27">
                  Contact Us
                </button>
              </div>
              <button
                onClick={showme}
                className=" d-md-none  navbutton position-absolute  z-3" >
                {show ? <Cross /> : "|||"}
              </button>
            </ul>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default NavBar;
