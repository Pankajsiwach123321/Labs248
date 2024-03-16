import React from "react";
import man1 from "../assets/images/webp/man1.webp";
import man3 from "../assets/images/webp/man2.webp";
import man6 from "../assets/images/webp/man3.webp";
import man7 from "../assets/images/webp/man4.webp";
import man2 from "../assets/images/webp/man5.webp";
import man4 from "../assets/images/webp/man6.webp";
import man5 from "../assets/images/webp/man7.webp";
import man8 from "../assets/images/webp/man8.webp";
const teamdata = [
  {
    aos: "zoom-out",
    img: man1,
    name: "James Vuong",
    profension: "(Co-CEO)",
    about:
      "James is a dynamic CEO leading two thriving companies. He co-founded ROOMERANG, elevating it from $0 to $8 million in annual net revenue in just 5 years. Additionally, as a co-founder of KEYNINJA, James achieved an ",
    brief:
      "impressive 50% year-over-year net revenue growth within the same timeframe. With a background in property valuation, sales, and technology, James brings a unique blend of skills to drive innovation and success in both ventures.",
  },
  {
    aos: "zoom-in",
    img: man2,
    name: "Tricia Yong",
    profension: "(Co-CEO)",
    about:
      "Tricia is a Marketing Director with 15 years of expertise, co-founded ROOMERANG and KEYNINJA with James Vuong, bringing a wealth of knowledge from the tech industry, property valuation, and consumer ",
    brief:
      "products. With a background in consumer behavior, UI/UX design, and marketing strategies, she adeptly navigates the convergence of technology and marketing. Tricia is renowned for crafting compelling narratives that deeply resonate with both business clients and consumers, propelling the company to success in the ever-evolving tech landscape.",
  },
  {
    aos: "zoom-out",
    img: man3,
    name: "Kevin Li",
    profension: "(CFO)",
    about:
      "Kev is a seasoned CFO with 15 years of expertise in the Big Pharma sector, demonstrated his leadership by establishing a successful branch office in Myanmar, overseeing its growth to 70 employees in just 24 months. His",
    brief:
      "strategic pricing initiatives for life-saving medications not only gained eligibility onto the government reimbursement list in Singapore, Sri Lanka, and the Maldives but also significantly alleviated the financial burden on patients grappling with the costs of disease.",
  },
  {
    aos: "zoom-in",
    img: man4,
    name: "Ryan Ang",
    profension: "(Lorem Ipsum)",
    about:
      "Experienced in investing in traditional equity markets and blockchain companies. Early adopter of digital assets and co-founded a decentralised finance application that provides walletservices, swaps and DeFi ",
    brief:
      "products. Previously in the private equity arm of one of Singapore’s leading asset management funds, Dymon Asia Capital. Previously the fund manager at Blockchain Ventures.",
  },
  {
    aos: "zoom-out",
    img: man5,
    name: "Dylan",
    profension: "(Executive Producer)",
    about:
      "Lorem ipsum dolor sit amet consectetur. Quis in ullamcorper molestie velit proin est. Vestibulum eget eu in egestas. Consequat mi consequat eu eu id integer est. Eget at egestas morbi vitae platea imperdiet sed egestas dignissim.",
    brief: "Lorem ipsum dolor sit amet consectetur. Amet erat condimentum.",
  },
  {
    aos: "zoom-in",
    img: man6,
    name: "Ralf",
    profension: "(Lorem Ipsum)",
    about:
      "Lorem ipsum dolor sit amet consectetur. Cursus vulputate facilisis mattis diam consectetur molestie ultrices. Laoreet sagittis facilisis consequat dignissim viverra etiam gravida. Eu cursus scelerisque purus pharetra enim.",
    brief:
      "Lorem ipsum dolor sit amet consectetur. Donec amet mattis sit fermentum. Cursus at sed commodo ac mattis feugiat vel faucibus iaculis. Id congue egestas sit leo placerat. Ipsum a feugiat massa fringilla justo consectetur. Eu euismod viverra ut porttitor sed leo. Eget viverra etiam sit nunc.",
  },
  {
    aos: "zoom-out",

    img: man7,
    name: "Jordan Stratford",
    profension: "(Creative Director)",
    about:
      "Jordan is an international best-selling author of the Wollstonecraft Detective Agency series with Penguin Random House, which was adapted to a mobile game for iOS, Android, and Nintendo Switch, and is in development",
    brief: "for television with the world’s largest streaming producer.",
  },
  {
    aos: "zoom-in",
    img: man8,
    name: "Jae Sik Choi ",
    profension: " (Lorem Ipsum)",
    about:
      "Early adopter of digital assets since 2011, founded Garuda Crypto, The Cryptocurrency Fund Project and Kalian Cryptocurrency Fund, along with being deeply experienced in DeFi and dApps since 2019. Previously an ex-NAB",
    brief:
      "Specialised Transaction Management Associate, experienced in fixed income structured products, KYC/AML, FATCA and CRS reporting. Holds a Master of Applied Finance from Monash University.",
  },
];
const OurTeam = () => {
  return (
    <section
      id="Ourteam"
      className="bg-black pt-5 position-relative z-1 overflow-xclip -mt-1"
    >
      <div className=" container  ">
        <p className=" text-center ">
          <span
            data-aos="fade-down"
            className="button-rare d-inline-block  mt-5 gradient-border-mask  text-center "
          >
            Our Team
          </span>
        </p>
        <h2
          data-aos="fade-up"
          className=" text-center  fs-4xl lh-sm-62 lh-40 mb-0 pt-3 text-white"
        >
          Behind our expertise
        </h2>
        <div className="row mt-4">
          {teamdata.map((obj, i) => (
            <div
              data-aos={obj.aos}
              key={i}
              className="col-xl-6 col-12  pt-4 mt-1"
            >
              <div className="our-team-card h-100">
                <div className=" d-flex flex-column flex-md-row gap-2">
                  <img src={obj.img} alt="man1" className="border-30" />
                  <div className="pt-3">
                    <div className=" d-flex align-items-center gap-1">
                      <h2 className="text-white text-nowrap  mb-1 fw-semibold fs-xl lh-24">
                        {obj.name}
                      </h2>
                      <span className=" fw-normal text-nowrap text-white mb-1 fs-md lh-19 profeesion-text">
                        {obj.profension}
                      </span>
                    </div>
                    <p className="text-white pt-2 text-opacit-70 fw-normal fs-md lh-24">
                      {obj.about}
                    </p>
                  </div>
                </div>
                <p className="text-white pt-2 text-opacit-70 fw-normal fs-md lh-24">
                  {obj.brief}
                </p>
                <div className="ellipesourtem"></div>
              </div>
            </div>
          ))}
        </div>
      </div>
      <h2 className=" setheading-section-alternate z-n1  fw-bold fs-6xl text-white text-opacit-6 lh-224">
        Our Team
      </h2>
      <div className="ellipes1-ourteam"></div>
      <div className="ellipes2-ourteam"></div>
    </section>
  );
};

export default OurTeam;
