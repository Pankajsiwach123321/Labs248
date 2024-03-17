import React from "react";

const Preloader = () => {
  return (
    <div className=" min-vh-100  position-fixed z-19 w-100  bg-black d-flex justify-content-center align-items-center">
      <div className=" p-5 outer-border">
        <div className=" dot-bounce"></div>
        <div className=" horizontel-line"></div>
        <h6
          data-text="248 LABS"
          className="text-loderanimation text-center fs-2xl mb-0 py-3"
        >
          248 LABS
        </h6>
      </div>
    </div>
  );
};

export default Preloader;
