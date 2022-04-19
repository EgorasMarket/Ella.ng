import React from "react";
import { RegButton } from "../Buttons/Button";
import "./SoundsGood.css";
const SoundsGood = () => {
  return (
    <div className="sounds_good_div">
      <div className="container">
        <div className="sounds_good_area">
          <div className="sounds_good_area_txt_cont">
            <div className="sounds_good_area_txt_cont_txt">Sounds Good?</div>
            <div className="sounds_good_area_txt_cont_button_div">
              <RegButton txt="Sell Now" className="soundsGoodBtn" href="#" />
            </div>
          </div>
          <img src="/img/video-dots.svg" alt="" className="card_dots" />
        </div>
      </div>
    </div>
  );
};

export default SoundsGood;
