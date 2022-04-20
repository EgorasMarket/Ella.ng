import React from "react";
import "./BestOffers.css";
const BestOffers = () => {
  const BestOfferImg = [
    {
      img: "/img/Iphone13Banner.jpeg",
    },
    {
      img: "/img/LaptopBanner.jpeg",
    },
    {
      img: "/img/morePhones.jpeg",
    },
  ];

  return (
    <div className="BestOffersDiv">
      <div className="container">
        <div className="BestOffersDivArea">
          <div className="BestOffersDivArea_head">Best Offers</div>
          <div className="BestOffersDivArea_Cards_Area">
            {BestOfferImg.map((data) => (
              <div className="BestOffersDivArea_Cards_Area_Card1">
                <img
                  src={data.img}
                  alt=""
                  className="BestOffersDivArea_Cards_Area_Card1_img"
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default BestOffers;
