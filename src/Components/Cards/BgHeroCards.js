import React from "react";
import "./Cards.css";
import WaveAnimation from "../WaveAnimation/WaveAnimation";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import SaleForm from "../Forms/SaleForm";
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
      BgTitle: "Looking for a place to sell your phone?",
      BgPara: "Instant Payment",
    },
    {
      key: "2a",
      id: "2",
      className: "hero_card_cont2",
      img: "/img/bannerImages/generator_png.png",
      BgTitle: "Sell your generator at the best price.",
      BgPara: "Instant Payment",
    },
    {
      key: "3a",
      id: "3",
      className: "hero_card_cont3",
      img: "/img/bannerImages/fridge_group.png",
      BgTitle: "Sell your refrigerator at the best price.",
      BgPara: "Instant Payment",
    },
    {
      key: "4a",
      id: "4",
      className: "hero_card_cont4",
      img: "/img/bannerImages/laptop_group.png",
      BgTitle: "Looking for a place to sell your Laptop?",
      BgPara: "Instant Payment",
    },
  ];
  return (
    <div className="hero_cards">
      <Carousel
        responsive={responsive}
        className="hero_carousel"
        showDots={false}
        infinite={true}
        autoPlaySpeed={10000}
        // customTransition="all .5"
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
            <img src="/img/banner-bg.png" className="banner-bg" />
          </div>
        ))}
      </Carousel>
      <div className="hero_scroll_cards">
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
            <img src="/img/banner-bg.png" className="banner-bg" />
          </div>
        ))}
      </div>
    </div>
  );
};

export default BgHeroCards;
