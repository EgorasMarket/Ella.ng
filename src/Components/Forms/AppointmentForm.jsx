import React, { useState } from "react";
import { connect } from "react-redux";

import {
  TxtFieldInputTxt,
  TxtFieldInputNumber,
  TxtFieldInputDate,
  BasicSelect,
  BasicSelectState
} from "../TextFields/TxtFieldInput";
import NaijaStates from 'naija-state-local-government';
import CloseIcon from "@mui/icons-material/Close";
import "./Forms.css";
import { FunctionButton } from "../Buttons/Button";
import { submitItemSpecFull } from "../../actions/itemSpec";
const AppointmentForm = ({onClick, submitItemSpecFull}) => {

  const [appointmentDate, setAppointmentDate] = useState('')
  const [sellData, setSellData] = useState({
    id: localStorage.getItem("productID"),
    fullname: "",
    phoneNumber: "",
    emailAddress: "",
    stateLocation: "",
    // itemState: "",
    address: "",
    // appointmentDate: "",
    closestBranch: ""
  });
  const { 
    id,
    fullname,
    phoneNumber,
    emailAddress,
    stateLocation,
    // itemState,
    address,
    // appointmentDate,
    closestBranch
   } = sellData;
  const allStates = NaijaStates.all();
  


  const handleChange = (e) => {
    // console.log(e.target);
    if (e.target === undefined) {
      // console.log(e.toISOString().substring(0, 10));
      setAppointmentDate(e.toISOString().substring(0, 10))
    } else {
      setSellData({ ...sellData, [e.target.name]: e.target.value });
    }
    // setSellData({ ...sellData, u: e });
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


  const submitData = async (e) => {
    // alert('ok')
    console.log( id,
      fullname,
      phoneNumber,
      emailAddress,
      stateLocation,
      // itemState,
      address,
      appointmentDate,
      closestBranch
      );

      if (fullname === '' || phoneNumber === '' || stateLocation === '' || address === '' || appointmentDate === '' || closestBranch === '') {
        console.log("Please supply all fields");
      } else {
        if (navigator.onLine) {
            let res3 = await submitItemSpecFull(
              id,
              fullname,
              phoneNumber,
              emailAddress,
              stateLocation,
              // itemState,
              address,
              appointmentDate,
              closestBranch
            );

            console.log(res3);

            if (res3.data.success === true) {
              // setAppointmentDiv(true);
              console.log('Submitted successfully');
              // localStorage.setItem("productID", res3.data.entryId);
              localStorage.removeItem("productID");
            } else {
              console.log("Something went wrong, try again later.");
            }
        } else {
          console.log('Please check your internet connection');
        }
        
      }

  };


  return (
    <div className="appointment_formDiv">
      <div className="book_an_appointment_head">
        <div className="appointment_formTitle">Book an appointment</div>
        <CloseIcon className="close_appointment_icon" onClick={onClick} />
      </div>

      <div className="appointment_form_input">
        <TxtFieldInputTxt
          className="appointment_input_area"
          label="Full Name*"
          type="text"
          name='fullname'
          value={fullname}
          onChange={handleChange}
        />
        <TxtFieldInputTxt
          className="appointment_input_area"
          label="Email address*"
          type="email"
          name='emailAddress'
          value={emailAddress}
          onChange={handleChange}
        />
        <TxtFieldInputNumber
          className="appointment_input_area"
          label="Phone Number*"
          type="number"
          name='phoneNumber'
          value={phoneNumber}
          onChange={handleChange}
        />
        <BasicSelectState
          className="appointment_input_area"
          labelId="Select State*"
          label="Select State*"
          onChange={handleChange}
          value={stateLocation}
          name="stateLocation"
          menuItem={allStates}
        />
        <TxtFieldInputTxt
          className="appointment_input_area"
          label="Address*"
          type="text"
          name='address'
          value={address}
          onChange={handleChange}
        />
        <BasicSelect
          className="appointment_input_area"
          labelId="Choose Nearest Branch*"
          label="Choose Nearest Branch*"
          onChange={handleChange}
          value={closestBranch}
          name="closestBranch"
          menuItem={menuItem}
        />

        <TxtFieldInputDate
          className="appointment_input_area"
          label="Appointment Date"
          type='date'
          name='appointmentDate'
          value={appointmentDate}
          onChange={handleChange}
        />
      </div>
      <div className="button_div">
        <FunctionButton txt="Submit details" click={submitData} />
      </div>
    </div>
  );
};

// export default AppointmentForm;

export default connect(null, { submitItemSpecFull })(AppointmentForm);
