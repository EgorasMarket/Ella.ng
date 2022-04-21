import React, { useState } from "react";
import { connect } from "react-redux";
import {
  SuccessModal,
  ErrorModal,
  CautionModal,
} from "../Modal/Success_Error_Component";
import {
  TxtFieldInputTxt,
  TxtFieldInputNumber,
  TxtFieldInputDate,
  BasicSelect,
  BasicSelectState,
} from "../TextFields/TxtFieldInput";
import NaijaStates from "naija-state-local-government";
import CloseIcon from "@mui/icons-material/Close";
import "./Forms.css";
import { FunctionButton } from "../Buttons/Button";
import { submitItemSpecFull } from "../../actions/itemSpec";
const AppointmentForm = ({ onClick, submitItemSpecFull }) => {
  const [appointmentDate, setAppointmentDate] = useState("");
  const [successModal, setSuccessModal] = useState(false);
  const [errorModal, setErrorModal] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");
  const [CautionModal, setCautionModal] = useState(false);
  const [sellData, setSellData] = useState({
    id: localStorage.getItem("productID"),
    fullname: "",
    phoneNumber: "",
    emailAddress: "",
    stateLocation: "",
    // itemState: "",
    address: "",
    // appointmentDate: "",
    closestBranch: "",
  });
  const closeErrorDiv = () => {
    setErrorModal(false);
  };
  const PageReload = () => {
    window.location.reload();
  };

  const {
    id,
    fullname,
    phoneNumber,
    emailAddress,
    stateLocation,
    // itemState,
    address,
    // appointmentDate,
    closestBranch,
  } = sellData;
  const allStates = NaijaStates.all();

  const handleChange = (e) => {
    // console.log(e.target);
    if (e.target === undefined) {
      // console.log(e.toISOString().substring(0, 10));
      setAppointmentDate(e.toISOString().substring(0, 10));
    } else {
      setSellData({ ...sellData, [e.target.name]: e.target.value });
    }
    // setSellData({ ...sellData, u: e });
  };
  const LocationList = [
    {
      value: "No 25 Clemedy Plaze, Aba Express Way, PH",
      label: "No 25 Clemedy Plaze, Aba Express Way, PH",
    },
    {
      value: "No 282 Aba Road by Rumuokwurushi Junction, PH",
      label: "No 282 Aba Road by Rumuokwurushi Junction, PH",
    },
    {
      value: "Kilometer Oro-owo, 7 Ikwerre Rd, Rumueme, Port Harcourt",
      label: "Kilometer Oro-owo, 7 Ikwerre Rd, Rumueme, Port Harcourt",
    },
  ];
  const menuItem = [
    {
      value: "Rumukwrushi HQ",
    },
    {
      value: "Agip Branch",
    },
    {
      value: "Oyigbo Branch",
    },
  ];

  const submitData = async (e) => {
    // alert('ok')
    console.log(
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

    if (
      fullname === "" ||
      phoneNumber === "" ||
      stateLocation === "" ||
      address === "" ||
      appointmentDate === "" ||
      closestBranch === ""
    ) {
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
          setSuccessModal(true);
          // setAppointmentDiv(true);
          console.log("Submitted successfully");
          // localStorage.setItem("productID", res3.data.entryId);
          localStorage.removeItem("productID");
        } else {
          setErrorModal(true);
          setSuccessModal(false);
          console.log(res3.data.message);
          setErrorMessage(res3.data.message);
          setErrorModal(true);
          console.log("Something went wrong, try again later.");
        }
      } else {
        setSuccessModal(false);
        setErrorModal(true);
        setErrorMessage("Please check your internet connection");
        console.log("Please check your internet connection");
      }
    }
  };

  return (
    <>
      {successModal === true ? (
        <SuccessModal
          successMessage="Your appointment was booked successfully."
          click={PageReload}
        />
      ) : errorModal === true ? (
        <ErrorModal errorMessage={errorMessage} click={closeErrorDiv} />
      ) : (
        <div className="bookAppointmentDiv">
          <div className="appointment_formDiv">
            <div className="appointment_formTitle">Book an appointment</div>

            <div className="appointment_form_input">
              <TxtFieldInputTxt
                className="appointment_input_area"
                label="Full Name*"
                type="text"
                name="fullname"
                value={fullname}
                onChange={handleChange}
              />
              <div className="email_input">
                <TxtFieldInputTxt
                  className="appointment_input_area"
                  label="Email address"
                  type="email"
                  name="emailAddress"
                  value={emailAddress}
                  onChange={handleChange}
                />
                <span className="optional">Optional*</span>
              </div>

              <TxtFieldInputNumber
                className="appointment_input_area"
                label="Phone Number*"
                type="number"
                name="phoneNumber"
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
                name="address"
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
                type="date"
                name="appointmentDate"
                value={appointmentDate}
                onChange={handleChange}
              />
            </div>
            <div className="button_div">
              <FunctionButton txt="Submit details" click={submitData} />
            </div>
          </div>
        </div>
      )}
    </>
  );
};

// export default AppointmentForm;

export default connect(null, { submitItemSpecFull })(AppointmentForm);
