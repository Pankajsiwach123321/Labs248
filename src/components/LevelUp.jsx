import React from "react";

const LevelUp = () => {
  return (
    <section className="pb-5 bg-black position-relative z-1">
      <div className="bg-level d-flex">
        <div className="container d-flex flex-grow-1 justify-content-end align-items-center">
          <div
            data-aos="zoom-out"
            className="card-levelup gradient-border-mask2"
          >
            <h2 className=" fw-semibold fs-4xl lh-sm-67 lh-52 text-white">
              Level up your gaming{" "}
              <span className="d-md-block">experience</span>
            </h2>
            <div className="button-border  d-inline-block">
              <button className="button-primery2   fs-lg fw-bold text-c-white lh-27">
                Play Unvilled
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default LevelUp;
