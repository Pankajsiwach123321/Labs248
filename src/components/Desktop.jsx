import React from "react";
import citydark from "../assets/images/webp/Rich.webp";
import play from "../assets/images/png/paly.png";
const Desktop = () => {
  return (
    <section className="bg-black pt-5 pb-sm-5  -mt-1 position-relative z-1 overflow-xclip">
      <div className="container pt-md-5 mt-sm-5 pb-5">
        <h2
          data-aos="fade-down"
          className="  fw-bold mb-4 text-4xl lh-sm-62 lh-40 text-center text-white"
        >
          A rich, inhabited, and licensable world.
        </h2>
        <div data-aos="fade-up" className="position-relative pt-3">
          <img
            src={citydark}
            height={458}
            alt="citydark"
            className="w-100 obj-cover border-30"
          />
          <a href="#" className="play">
            <img src={play} alt={play} className="w-100" />
          </a>
        </div>
        <p
          className=" fw-normal fs-md lh-24  fw-normal text-center text-opacit-70 text-white pt-4 mb-0"
          data-aos="fade-down"
        >
          Illustrated with original artwork and a cinematic score, destined not
          only for mobile and desktop gaming but{" "}
          <span className=" d-block">
            also for film and television, events, merchandising, and
            partnerships.
          </span>
        </p>
      </div>
      <div className="ellepise-desktop"></div>
    </section>
  );
};

export default Desktop;
