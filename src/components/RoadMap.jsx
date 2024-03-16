import React from "react";
import india from "../assets/images/png/india.png";
import australia from "../assets/images/png/austrailia.png";
import usa from "../assets/images/png/amrica.png";
import roadmapimg from "../assets/images/webp/roadmapLogo.webp";
import { Star } from "./Icon";
const RoadMap = () => {
  return (
    <section
      id="Roadmap"
      className=" bg-black pt-sm-5 position-relative z-1 overflow-xclip"
    >
      <div className=" bg-roadmap">
        <div className=" container pt-sm-5 mt-sm-5 ">
          <p className=" text-center">
            <span
              data-aos="fade-down"
              className="button-rare  gradient-border-mask  d-inline-block "
            >
              Road map
            </span>
          </p>
          <h2
            data-aos="fade-up"
            className=" text-center pb-5  fs-4xl lh-sm-62 lh-40 mb-0 pt-3 text-white"
          >
            Milestones and markers
          </h2>
          <span className="py-5 d-sm-block "></span>
          <div className="row lineorapmap position-relative z-1 justify-content-between">
            <img src={roadmapimg} alt="roadmapimg" className="imageroadmap" />
            <div className="col-sm-5 ps-5 ps-sm-0 "></div>
            <div
              data-aos="fade-left"
              className="col-sm-5 ps-5 ps-sm-0  pb-sm-5 pt-5 mt-1"
            >
              <div className="gradient-border-maskroadmap mb-1 w-100 mt-4 overflow-hidden ">
                <div className="roadmap-card position-relative w-100 text-center z-1 ">
                  <span className="fw-normal  text-white mb-1 fs-2xl lh-27 profeesion-text ">
                    Oct 2014
                  </span>
                  <p className=" mb-0 fw-normal pt-2 fs-2xl lh-27 text-white text-opacit-70">
                    Hired our first employee
                  </p>
                  <div className="ellipes-card-roadmap"></div>
                </div>
              </div>
            </div>
            <div
              data-aos="fade-right"
              className="col-sm-5 ps-5 ps-sm-0  mt-lg-5 pt-lg-5 mb-sm-5 mb-0"
            >
              <div className="gradient-border-maskroadmap mb-1 w-100 mt-4 overflow-hidden ">
                <div className="roadmap-card position-relative w-100 text-center z-1 ">
                  <span className="fw-normal  text-white mb-1 fs-2xl lh-27 profeesion-text ">
                    Nov 2014
                  </span>
                  <p className=" mb-0 fw-normal pt-2 fs-2xl lh-27 text-white text-opacit-70">
                    Launched Bitcoin wallet
                  </p>
                  <div className="ellipes-card-roadmap"></div>
                </div>
              </div>
            </div>
            <div className="col-sm-5 ps-5 ps-sm-0 "></div>
            <div className="col-sm-5 ps-5 ps-sm-0 "></div>
            <div
              data-aos="fade-left"
              className="col-sm-5 ps-5 ps-sm-0  mt-lg-5 pt-lg-5 mb-sm-5 mb-0"
            >
              <div className="gradient-border-maskroadmap mb-1 w-100 mt-4 overflow-hidden ">
                <div className="roadmap-card position-relative w-100 text-center z-1 ">
                  <span className="fw-normal  text-white mb-1 fs-2xl lh-27 profeesion-text ">
                    Oct 2015
                  </span>
                  <p className=" mb-0 fw-normal pt-2 fs-2xl lh-27 text-white text-opacit-70">
                    1st prize by Bit angels at Coin Agenda, Las Vegas
                  </p>
                  <div className="ellipes-card-roadmap"></div>
                </div>
              </div>
            </div>
            <div
              data-aos="fade-right"
              className="col-sm-5 ps-5 ps-sm-0  pt-lg-5 mt-lg-5 mb-sm-5 mb-0"
            >
              <div className="gradient-border-maskroadmap mb-1 w-100 mt-4 overflow-hidden ">
                <div className="roadmap-card position-relative w-100 text-center z-1 ">
                  <span className="fw-normal  text-white mb-1 fs-2xl lh-27 profeesion-text ">
                    Jan 2020
                  </span>
                  <div className=" d-flex align-items-center gap-3 justify-content-center pt-2">
                    <p className=" mb-0 text-nowrap fw-normal fs-2xl lh-27 text-white text-opacit-70">
                      launch On
                    </p>
                    <img src={india} alt="india" width={21} />
                    <img src={australia} alt="australia" width={21} />
                    <img src={usa} alt="usa" width={21} />
                  </div>
                  <div className="ellipes-card-roadmap"></div>
                </div>
              </div>
            </div>
            <div className="col-sm-5 ps-5 ps-sm-0 "></div>
            <div className="col-sm-5 ps-5 ps-sm-0 "></div>
            <div
              data-aos="fade-left"
              className="col-sm-5 ps-5 ps-sm-0  pt-lg-5 mt-lg-5"
            >
              <div className="gradient-border-maskroadmap mb-1 w-100 mt-4 overflow-hidden ">
                <div className="roadmap-card position-relative w-100 text-center z-1 ">
                  <span className="fw-normal  text-white mb-1 fs-2xl lh-27 profeesion-text ">
                    Oct 2014
                  </span>
                  <p className=" mb-0 fw-normal pt-2 fs-2xl lh-27 text-white text-opacit-70">
                    Trusted by 10 Millions+ Users
                  </p>
                  <Star />
                  <div className="ellipes-card-roadmap"></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <h2 className=" setheading-section2 z-n1  fw-bold fs-6xl text-white text-opacit-6 lh-sm-224 lh-52 l">
        Roadmap
      </h2>
      <div className="ellipes-roadmap"></div>
    </section>
  );
};

export default RoadMap;
