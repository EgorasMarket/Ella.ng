import React, { useEffect, useCallback, useState } from "react";
import { connect } from "react-redux";
import { FunctionButton } from "../Buttons/Button";
import "./Forms.css";
import Demo from "./Demo";
import { TxtFieldInputTxt } from "../TextFields/TxtFieldInput";
import { submitItemSpec } from "../../actions/itemSpec";
import BookAnAppointment from "../../Pages/AppointmentPage/BookAnAppointment";
const SaleForm = ({ submitItemSpec }) => {
  const [sellData, setSellData] = useState({
    service: "",
    brand: "",
    model: "",
  });
  const [appointmentDiv, setAppointmentDiv] = useState(false);

  const { service, brand, model } = sellData;

  const handleChange = (e) => {
    console.log(e);
    // setSellData({ ...sellData, u: e });
    setSellData({ ...sellData, [e.target.name]: e.target.value });
  };

  const submitData = async (e) => {
    // alert('ok')

    if (service === "" || brand === "" || model === "") {
      console.log("Please supply all fields");
    } else {
      console.log(service, brand, model);

      let res3 = await submitItemSpec(service, brand, model);

      console.log(res3);

      if (res3.data.success === true) {
        setAppointmentDiv(true);
        localStorage.setItem("productID", res3.data.entryId);
      } else {
        console.log("Something went wrong, try again later.");
      }
    }
  };

  return (
    <div className="saleFormDiv">
      <div className="saleFormHeading">
        <div className="saleFormHeadingTab">Sell</div>
      </div>
      <div className="salesInputArea">
        <TxtFieldInputTxt
          label="Select Service"
          // options={Services}
          type="text"
          onChange={handleChange}
          value={service}
          name="service"
        />
        <TxtFieldInputTxt
          label="Select Brand"
          type="text"
          // options={Brands}
          onChange={handleChange}
          value={brand}
          name="brand"
        />
        <TxtFieldInputTxt
          label="Select Model"
          type="text"
          // options={Model}
          onChange={handleChange}
          value={model}
          name="model"
        />

        <FunctionButton txt="Sell Now" click={submitData} />
      </div>
      {appointmentDiv == true ? <BookAnAppointment /> : null}
    </div>
  );
};

const mapStateToProps = (state) => ({
  // isAuthenticated: state.auth.isAuthenticated,
});

export default connect(mapStateToProps, { submitItemSpec })(SaleForm);
