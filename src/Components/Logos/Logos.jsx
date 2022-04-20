import React from "react";
import Marquee from "react-fast-marquee";
import "./Logos.css";
const Logos = () => {
  const Partners = [
    { img: "/img/partners/APNEWS.svg" },
    { img: "/img/partners/INDEPENDENT.svg" },
    { img: "/img/partners/NAIRAMETRICS.svg" },
    { img: "/img/partners/THEGUARDIAN.svg" },
    { img: "/img/partners/ctele2.svg" },
    { img: "/img/partners/YAHOOFINANCE.svg" },
    { img: "/img/partners/NEWSBTC.svg" },
  ];
  return (
    <div className="logosDiv">
      <div className="Logos_area">
        <Marquee speed={50} pauseOnHover={true}>
          {Partners.map((data) => (
            <img src={data.img} className="partnerLogo" />
          ))}
        </Marquee>
      </div>
    </div>
  );
};

export default Logos;
