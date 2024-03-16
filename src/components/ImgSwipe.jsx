import React from "react";
import ardaaous from "../assets/images/png/img1.png";
import twicth from "../assets/images/png/img2.png";
import gamescome from "../assets/images/png/img3.png";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import creythorn from "../assets/images/png/img4.png";
const ImgSwipe = () => {
  var settings = {
    dots: false,
    infinite: true,
    autoplay: true,
    arrows: false,
    autoplaySpeed: 0,
    variableWidth: true,
    speed: 8000,
    cssEase: "linear",
    slidesToShow: 5,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 3,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  };
  return (
    <section className=" bg-black pt-5 pb-5 -mt-1">
      <div className="container pt-5 pb-sm-5 mb-md-5">
        <Slider {...settings}>
          <div className="swipe px-4 d-flex align-items-end justify-content-center w-100">
            <img src={ardaaous} alt="ardaaous" className="w-100" />
          </div>
          <div className="swipe px-4 d-flex align-items-end justify-content-center w-100">
            <img src={twicth} alt="twicth" className="w-100" />
          </div>
          <div className="swipe px-4 d-flex align-items-end justify-content-center w-100">
            <img src={gamescome} alt="gamescome" className="w-100" />
          </div>
          <div className="swipe px-4 d-flex align-items-end justify-content-center w-100">
            <img src={creythorn} alt="creythorn" className="w-100" />
          </div>
          <div className="swipe px-4 d-flex align-items-end justify-content-center w-100">
            <img src={twicth} alt="twicth" className="w-100" />
          </div>
        </Slider>
      </div>
    </section>
  );
};

export default ImgSwipe;
