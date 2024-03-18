import React from "react";

const aboutdata = [
  {
    title: "World Building",
    para: "Every pixel, every character, every puzzle is a testament to the harmonious marriage of imagination and engineering precision",
    aos: "zoom-out",
  },
  {
    title: "Game Design",
    aos: "zoom-in",
    para: "Every frame becomes a brushstroke, every motion a choreographed dance, contributing to a symphony of visuals that captivate players' senses and ignite their imagination.",
  },
  {
    title: "Art and Sound",
    aos: "zoom-out",
    para: "In the realm of game design, art and animation are the storytellers, whispering tales of wonder and excitement, etching memories that linger long after the controller is set down.",
  },
];
const AboutUs = () => {
  return (
    <section
      id="Aboutus"
      className="bg-black pt-5 pb-5 position-relative z-1 overflow-xclip -mt-1"
    >
      <div className=" container pb-sm-5 mb-md-5 pt-sm-5 mt-md-5">
        <p className="button-rare d-inline-block gradient-border-mask">
          DOERS OVER TALKERS
        </p>
        <div className="row pt-3 pb-md-5">
          <div data-aos="zoom-in" className="col-md-6">
            <h2 className="  mb-0  fw-bold lh-sm-62 lh-40 fs-4xl text-c-prime">
              Game <span className=" d-block"> First.Always.</span>
            </h2>
          </div>
          <div data-aos="zoom-in-down" className="col-md-6 pt-4 pt-md-1 ">
            <h3 className=" fw-medium  mb-1 fs-lg text-white lh-21">
              This is difficult
            </h3>
            <p className="  fw-normal pt-2 mb-0 max-w-516 text-opacit-70 text-white fs-md lh-24">
              Web3 Games have a notoriously high barrier-to-entry for casual
              gamers who make up the vast majority of players. “Link your
              wallet” before gameplay is not just off-putting, it’s boring.
              We’re solving that with{" "}
              <span className=" fw-semibold">world-class storytelling</span>,
              world-building, game design, art and sound. And fun.
            </p>
          </div>
          {aboutdata.map((obj, i) => (
            <div
              data-aos={obj.aos}
              className="col-lg-4 col-md-6 mt-lg-5 pt-md-5 pt-4  "
              key={i}
            >
              <div className="card-aboutus h-100 gradient-border-maskaboutus position-relative z-1 ">
                <h3 className="text-white  fs-3xl lh-38 fw-bold mb-3">
                  {obj.title}
                </h3>
                <p className=" max-w-311  fw-normal mb-0 fs-md lh-24  text-white text-opacit-70">
                  {obj.para}
                </p>
                <div className="ellipes-card-aboutus"></div>
              </div>
            </div>
          ))}
        </div>
      </div>
      <div className="ellipes-aboutsection d-none d-sm-block "></div>
      <h2 className=" setheading-section z-n1   fw-bold fs-6xl text-white text-opacit-6 lh-sm-224 lh-52 ">
        About Us
      </h2>
    </section>
  );
};

export default AboutUs;
