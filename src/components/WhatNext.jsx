import React from "react";

const WhatNext = () => {
  return (
    <section className="bg-black py-sm-5 -mt-1">
      <div className="bg-next d-flex">
        <div className="container d-flex flex-grow-1 align-items-center flex-column justify-content-center text-center">
          <h2
            data-aos="fade-down"
            className=" fw-bold mb-3 fs-4xl lh-24  text-white "
          >
            What’s Next
          </h2>
          <p
            data-aos="zoom-in"
            className=" pt-2 fw-semibold  fs-md lh-24  text-white"
          >
            92% of gamers have never even tried a Web3 game. We’re going to
            change that.
          </p>
          <p
            data-aos="zoom-out"
            className=" fw-normal pt-1  text-opacit-70 fs-md lh-24  text-white"
          >
            248Labs The market is worth about a gazillion dollars, so whatever
            those stats were, that goes here.
          </p>
          <div data-aos="fade-up" className="button-border d-inline-block ">
            <button className="button-primery   fs-lg fw-bold text-c-white lh-27">
              Try to keep up
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhatNext;
