import React, { useState } from "react";
import {
  TxtFieldInputTxt,
  TxtFieldInputNumber,
  TxtFieldInputDate,
  BasicSelect,
} from "../TextFields/TxtFieldInput";
import CloseIcon from "@mui/icons-material/Close";
import "./Forms.css";
import { FunctionButton } from "../Buttons/Button";
const AppointmentForm = (props) => {
  const [sellData, setSellData] = useState({
    service: "",
    brand: "",
    model: "",
  });
  const { service, brand, model } = sellData;

  const handleChange = (e) => {
    // console.log(e);
    // setSellData({ ...sellData, u: e });
    setSellData({ ...sellData, [e.target.name]: e.target.value });
  };
  const menuItem = [
    {
      value: "Mobile Phone",
    },
    {
      value: "Laptop",
    },
    {
      value: "Desktop Computer",
    },
    {
      value: "Television",
    },
    {
      value: "Tablet",
    },
    {
      value: "Home Theater",
    },
    {
      value: "Refrigerator",
    },
    {
      value: "Generator",
    },
    {
      value: "Gaming consoles",
    },
  ];

  return (
    <div className="appointment_formDiv">
      <div className="book_an_appointment_head">
        <div className="appointment_formTitle">Book an appointment</div>
        <CloseIcon className="close_appointment_icon" onClick={props.onClick} />
      </div>

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
        <BasicSelect
          className="appointment_input_area"
          labelId="Select State*"
          label="Select State*"
          onChange={handleChange}
          value={service}
          name="service"
          menuItem={menuItem}
        />
        <TxtFieldInputTxt
          className="appointment_input_area"
          label="Address*"
          type="text"
        />
        <BasicSelect
          className="appointment_input_area"
          labelId="Choose Nearest Branch*"
          label="Choose Nearest Branch*"
          onChange={handleChange}
          value={service}
          name="service"
          menuItem={menuItem}
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
