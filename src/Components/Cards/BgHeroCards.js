import React from "react";
import "./Cards.css";
import WaveAnimation from "../WaveAnimation/WaveAnimation";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
const responsive = {
  desktop: {
    // the naming can be any, depends on you.
    breakpoint: { max: 4000, min: 0 },
    items: 1,
  },
};
const BgHeroCards = () => {
  const BgHeroCards = [
    {
      key: "1a",
      id: "1",
      className: "hero_card_cont1",
      img: "/img/bannerImages/phones_piled_image.png",
      BgTitle: "Looking for your next phone?",
      BgPara: "Free Pickup | Instant Payment",
    },
    {
      key: "2a",
      id: "2",
      className: "hero_card_cont2",
      img: "/img/bannerImages/hero_card_cars.png",
      BgTitle: "Looking for your next phone?",
      BgPara: "Free Pickup | Instant Payment",
    },
    {
      key: "3a",
      id: "3",
      className: "hero_card_cont3",
      img: "/img/bannerImages/hero_card_cars.png",
      BgTitle: "Looking for your next phone?",
      BgPara: "Free Pickup | Instant Payment",
    },
    {
      key: "4a",
      id: "4",
      className: "hero_card_cont4",
      img: "/img/bannerImages/phones_piled_image.png",
      BgTitle: "Looking for your next phone?",
      BgPara: "Free Pickup | Instant Payment",
    },
  ];
  return (
    <div className="hero_cards">
      <Carousel
        responsive={responsive}
        // className="caroCard"
        autoPlaySpeed={5000}
        showDots={false}
        autoPlay={true}
        infinite={true}
      >
        {BgHeroCards.map((data) => (
          <div className={data.className} key={data.key}>
            <div className="hero_card_area">
              <div className="hero_card_area1">
                <div className="hero_card_area1_title">{data.BgTitle}</div>
                <div className="hero_card_area1_para">{data.BgPara}</div>
              </div>
              <div className="hero_card_area2">
                <img src={data.img} alt="..." className="hero_card_img" />
              </div>
            </div>
            <WaveAnimation />
          </div>
        ))}
      </Carousel>
    </div>
  );
};

export default BgHeroCards;
