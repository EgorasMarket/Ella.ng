import React from "react";
import "./success_error_component_style.css";
import { FunctionButton } from "../Buttons/Button";
export const SuccessModal = ({ successMessage, click }) => {
  return (
    <div className="success_error_component">
      <div className="success_modal_div">
        <div className="success_modal_div_head">
          <img
            src="/img/succees_div_heading_icon.svg"
            alt=""
            className="success_modal_image"
          />
        </div>
        <div className="success_modal_div_body">{successMessage}</div>
        <div className="success_modal_button">
          <FunctionButton
            txt="Continue"
            className="success_btn"
            click={click}
          />
        </div>
      </div>
    </div>
  );
};
// ======================================================
// ======================================================
// ======================================================
// ======================================================
export const ErrorModal = ({ errorMessage, click }) => {
  return (
    <div className="success_error_component">
      <div className="error_modal_div">
        <div className="error_modal_div_head">
          <img
            src="/img/error_div_heading_icon.svg"
            alt=""
            className="error_modal_image"
          />
        </div>
        <div className="error_modal_div_body">{errorMessage}</div>
        <div className="error_modal_button">
          <FunctionButton txt="Try again" className="error_Btn" click={click} />
        </div>
      </div>
    </div>
  );
};
// ======================================================
// ======================================================
// ======================================================
// ======================================================
export const CautionModal = () => {
  return <div className="success_error_component"></div>;
};
