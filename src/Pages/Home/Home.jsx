import React from "react";
import BgHeroCards from "../../Components/Cards/BgHeroCards";
import SaleForm from "../../Components/Forms/SaleForm";
import { IconCards } from "../../Components/Cards/IconCards";
import { StepCards } from "../../Components/Cards/StepCards";
import WhyPeopleTrustUs from "../../Components/WhyPeopleTrustUs/WhyPeopleTrustUs";
import BestOffers from "../../Components/BestOffers/BestOffers";
import Logos from "../../Components/Logos/Logos";
import SoundsGood from "../../Components/SoundsGood/SoundsGood";
import "../../Assets/Css/Home.css";
const Home = () => {
  return (
    <div>
      <section className="hero_section">
        <BgHeroCards />
        <SaleForm cssClass="salesForm" />
      </section>
      <section className="iconsCardsSection">
        <IconCards />
      </section>
      <section className="StepsSection">
        <StepCards />
      </section>
      <section className="WPTU_Section">
        <WhyPeopleTrustUs />
      </section>
      <section className="Best_Offers_Section">
        <BestOffers />
      </section>
      <section className="partners_section">
        <Logos />
      </section>
      <section className="soundsGood_section">
        <SoundsGood />
      </section>
    </div>
  );
};

export default Home;
