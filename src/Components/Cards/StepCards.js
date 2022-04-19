import React from "react";
import "./Cards.css";
export const StepCards = () => {
  const stepsDiv = [
    {
      icon: "/img/check_value_icon.svg",
      title: "Check the value of your asset.",
      txt: "Select your device & tell us about its current condition, and our advanced AI tech will tailor make the perfect price for you.",
    },
    {
      icon: "/img/schedule_for_inspection_icon.svg",

      title: "Schedule for Inspection.",
      txt: "Book an appointment for collateral inspection at home or the nearest Egoras branch.",
    },
    {
      icon: "/img/get_paid_instantly_icon.svg",

      title: "Get paid instantly.",
      txt: "We are determined to make sure you have access to sufficient funds immediately after inspection of your assets.",
    },
  ];
  return (
    <div className="StepsCardDiv">
      <div className="container">
        <div className="stepsDivArea">
          <div className="stepsDivAreaTitleCont">
            <div className="stepsDivAreaTitleContTitle">
              {" "}
              Sell Your Gadget in 3 Steps{" "}
            </div>
            <div className="stepsDivAreaTitleContPara">
              {" "}
              Book a free pickup from your home or work at a time slot as
              <br /> per your convenience
            </div>
          </div>
          <div className="stepsDivAreaBody">
            {stepsDiv.map((data) => (
              <div className="stepsDivAreaCont">
                <div className="stepsDivAreaContTitleCont">
                  <img src={data.icon} className="stepsDivAreaContTitleIcon" />
                  <div className="stepsDivAreaContTitleTxt">{data.title}</div>
                </div>
                <div className="stepsDivAreaContTxt">{data.txt}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};
