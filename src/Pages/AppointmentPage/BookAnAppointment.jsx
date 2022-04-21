import React from "react";
import "../../Assets/Css/BookAnAppointment.css";
import AppointmentForm from "../../Components/Forms/AppointmentForm";
const BookAnAppointment = (props) => {
  return (
    <div className="bookAppointmentDiv">
      <div className="bookAppointmentDiv_Area" onClick={props.onClick}></div>
      <AppointmentForm onClick={props.onClick} />
    </div>
  );
};

export default BookAnAppointment;
