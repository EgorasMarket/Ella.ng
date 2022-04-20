import React from "react";
import {
  TxtFieldInputTxt,
  TxtFieldInputNumber,
  TxtFieldInputDate,
  BasicSelect,
} from "../TextFields/TxtFieldInput";
import "./Forms.css";
import { FunctionButton } from "../Buttons/Button";
const AppointmentForm = () => {
  const inputTypes = [
    {
      type: "date",
      name: "date",
      label: "date",
    },
    {
      type: "number",
    },
    {
      type: "text",
    },
  ];
  return (
    <div className="appointment_formDiv">
      <div className="appointment_formTitle">Book an appointment</div>

      <div className="appointment_form_input">
        <TxtFieldInputTxt
          className="appointment_input_area"
          label="Full Name*"
          type="text"
        />
        <TxtFieldInputTxt
          className="appointment_input_area"
          label="Email address*"
          type="email"
        />
        <TxtFieldInputNumber
          className="appointment_input_area"
          label="Phone Number*"
          type="number"
        />
        <BasicSelect className="appointment_input_area" label="Select State*" />
        <TxtFieldInputTxt
          className="appointment_input_area"
          label="Address*"
          type="text"
        />
        <BasicSelect
          className="appointment_input_area"
          label="Choose Nearest Branch*"
        />

        <TxtFieldInputDate
          className="appointment_input_area"
          label="Appointment Date"
        />
      </div>
      <div className="button_div">
        <FunctionButton txt="Submit details" />
      </div>
    </div>
  );
};

export default AppointmentForm;
