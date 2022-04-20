import React from "react";
// import { carIcon } from "../Icons/Icons";
import "./Cards.css";
export const IconCards = (props) => {
  const iconCardDetails = [
    {
      img: "/img/carIcon.png",
      txt: "Sell Car",
    },
    {
      img: "/img/carIcon.png",
      txt: "Sell Phone",
    },
    {
      img: "/img/carIcon.png",
      txt: "Sell Laptop",
    },
    {
      img: "/img/carIcon.png",
      txt: "Sell TV",
    },
    {
      img: "/img/carIcon.png",
      txt: "Sell Tablet",
    },
    {
      img: "/img/carIcon.png",
      txt: "Sell Desktop",
    },
    {
      img: "/img/carIcon.png",
      txt: "Sell Desktop",
    },
    {
      img: "/img/carIcon.png",
      txt: "Sell Desktop",
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
