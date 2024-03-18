import React from "react";
import collectable from "../assets/images/png/space.png";
const CollectableCard = () => {
  return (
    <section className="bg-black pt-sm-5 -mt-1 position-relative z-1 overflow-xclip">
      <div className="container pt-md-5 ">
        <img
          src={collectable}
          alt="collectable"
          data-aos="fade-down"
          height={422}
          className="w-100 obj-cover border-30"
        />
        <div className="row mt-md-4 mt-4">
          <div
            data-aos="zoom-out"
            className="col-lg-3 justify-content-center d-flex justify-content-lg-start "
          >
            <div>
              <a
                href="mailto:name@domain.com"
                className="fs-lg   w-100 max-w-237 d-inline-block gradient-border-mask fw-bold text-c-white lh-27 text-decoration-none email-button"
              >
                name@domain.com
              </a>
              <div className="button-border  d-block max-w-237 mt-4  ">
                <button className="button-primery    w-100 fs-lg fw-bold text-c-white lh-27">
                  Contact Us
                </button>
              </div>
            </div>
          </div>
          <div data-aos="zoom-in" className="col-lg-9 pt-4 pt-lg-0 ">
            <p className=" max-w-793   ms-auto  paragraph text-c-light  fw-normal fs-md lh-24">
              Unveiled is a unique
              <span className=" fw-semibold text-white">
                {" "}
                collectible card game
              </span>{" "}
              in which you gain fervour for your ventures, spending it on
              mercenaries, spies, automata, and influence.
            </p>
            <p className=" max-w-793  ms-auto text-c-light paragraph   fw-normal fs-md lh-24">
              You play
              <span className=" fw-semibold text-white">
                {" "}
                a rogue merchant trader
              </span>
              trader allied to a noble house, alongside your
              <span className=" fw-semibold text-white">
                {" "}
                cryptid-humanoid companions{" "}
              </span>
              in a game of ambition and alliance, deception and miracles,
              manipulation and annihilation. Bells chime in the harbour, and
              markets are opening. Guards have swept the streets of the more
              obvious dangers.
            </p>

            <p className=" max-w-793  ms-auto  text-white   fw-semibold fs-md lh-24">
              What’s your next move?
            </p>
          </div>
        </div>
      </div>
      <div className="collectabel-ellipesone"></div>
    </section>
  );
};

export default CollectableCard;
