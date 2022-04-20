import React from "react";
// import { phoneIcon } from "../Icons/Icons";
import "./Cards.css";
export const IconCards = (props) => {
  const iconCardDetails = [
    {
      img: "/img/phoneIcon.svg",
      txt: "Sell Phone",
    },
    {
      img: "/img/laptopIcon.svg",
      txt: "Sell Laptop",
    },
    {
      img: "/img/tvIcon.svg",
      txt: "Sell TV",
    },
    {
      img: "/img/tabletIcon.svg",
      txt: "Sell Tablet",
    },
    {
      img: "/img/desktopIcon.svg",
      txt: "Sell Desktop",
    },
    {
      img: "/img/homeTheaterIcon.svg",
      txt: "Sell Home Theater",
    },
    {
      img: "/img/refrigeratorIcon.svg",
      txt: "Sell Refrigerator",
    },
    {
      img: "/img/generatorIcon.svg",
      txt: "Sell Generator",
    },
  ];
  return (
    <div className="iconsCardsDiv">
      <div className="container">
        <div className="iconsCardsTitle">Sell for cash</div>
        <div className="iconsCardBody">
          {iconCardDetails.map((data) => (
            <div className="iconsCardCont">
              <div className="iconsDivImg">
                <img src={data.img} className="iconsDivImage" />
              </div>
              <div className="iconsDivTxt">{data.txt}</div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
