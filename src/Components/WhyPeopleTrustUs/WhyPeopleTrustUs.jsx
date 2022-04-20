import React from "react";
import "./WPTU.css";
const WhyPeopleTrustUs = () => {
  const Steps = [
    {
      stepImg: "/img/icon-tick.svg",
      stepTitle: "One-stop Solution",
      stepTxt: "Sell, buy, repair or accessorize your smartphone",
    },
    {
      stepImg: "/img/icon-tick.svg",

      stepTitle: "One-stop Solution",
      stepTxt: "Sell, buy, repair or accessorize your smartphone",
    },
    {
      stepImg: "/img/icon-tick.svg",

      stepTitle: "One-stop Solution",
      stepTxt: "Sell, buy, repair or accessorize your smartphone",
    },
    {
      stepImg: "/img/icon-tick.svg",

      stepTitle: "One-stop Solution",
      stepTxt: "Sell, buy, repair or accessorize your smartphone",
    },
  ];
  return (
    <div className="WPTU_div">
      <div className="container">
        <div className="WPTU_Area1_body">
          <div className="WPTU_Area1_head">Why People Trust Us</div>
          <div className="WPTU_Area">
            <div className="WPTU_Area1">
              <div className="WPTU_Area1_Body_steps">
                {Steps.map((data) => (
                  <div className="WPTU_Area1_Body_step1_cont">
                    <img
                      src={data.stepImg}
                      className="WPTU_Area1_Body_step1_cont_icon"
                    />
                    <div className="WPTU_Area1_Body_step1_cont_txt_div">
                      <div className="WPTU_Area1_Body_step1_cont_txt_div_title">
                        {data.stepTitle}
                      </div>
                      <div className="WPTU_Area1_Body_step1_cont_txt_div_para">
                        {data.stepTxt}
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            <div className="WPTU_Area2">
              <img src="/img/why_us_grid.png" alt="" className="WPTU_img1" />
              <img src="/img/why_us_img2.png" alt="" className="WPTU_img2" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WhyPeopleTrustUs;
