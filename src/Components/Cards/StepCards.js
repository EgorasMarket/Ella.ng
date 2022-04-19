import React from "react";
import "./Cards.css";
export const StepCards = () => {
  const stepsDiv = [
    {
      icon: "",
      title: "Check Price",
      txt: "Select your device & tell us about its current condition, and our advanced AI tech will tailor make the perfect price for you.",
    },
    {
      icon: "",
      title: "Schedule Pickup",
      txt: "Book a free pickup from your home or work at a time slot as per your convenience",
    },
    {
      icon: "",
      title: "Get paid instantly",
      txt: "Did we mention you get paid as soon as our executive picks up your device? It’s instant & secure payment all the way!",
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
                <div
                  className="stepsDivAreaCon
                tTitleCont"
                >
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
