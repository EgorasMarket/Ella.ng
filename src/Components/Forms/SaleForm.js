import React, { useEffect, useCallback, useState } from "react";
import { connect } from "react-redux";
import { FunctionButton } from "../Buttons/Button";
import "./Forms.css";
import AppointmentForm from "./AppointmentForm";
import { TxtFieldInputTxt, BasicSelect } from "../TextFields/TxtFieldInput";
import LoadingIcons from "react-loading-icons";
import { submitItemSpec } from "../../actions/itemSpec";
// import BookAnAppointment from "../../Pages/AppointmentPage/BookAnAppointment";
const SaleForm = ({ submitItemSpec, cssClass }) => {
  const [sellData, setSellData] = useState({
    service: "",
    brand: "",
    model: "",
    itemState: "",
  });
  const [appointmentDiv, setAppointmentDiv] = useState(false);
  const [disable, setDisable] = React.useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const { service, brand, model, itemState } = sellData;
  useEffect(() => {
    if (service === "") {
      setDisable(true);
    }
    if (brand === "") {
      setDisable(true);
    }
    if (model === "") {
      setDisable(true);
    }
    if (itemState === "") {
      setDisable(true);
    } else {
      setDisable(false);
    }
  });
  const handleChange = (e) => {
    setSellData({ ...sellData, [e.target.name]: e.target.value });

    // if (service !== "" && brand !== "" && model !== "" && itemState !== "") {
    //   setDisable(true);
    //   console.log("Please supply all fields");
    // } else {
    //   setDisable(false);
    // }
    // if (service === "" || brand === "" || model === "" || itemState === "") {
    //   setDisable(true);
    //   console.log("Please supply all fields");
    // } else {
    //   setDisable(false);
    // }
  };

  const submitData = async (e) => {
    // alert('ok')
    setDisable(true);
    setIsLoading(true);
    if (service === "" || brand === "" || model === "" || itemState === "") {
      setDisable(true);
      // console.log("Please supply all fields");
    } else {
      // console.log(service, brand, model);
      setDisable(false);
      let res3 = await submitItemSpec(service, brand, model, itemState);

      // console.log(res3);

      if (res3.data.success === true) {
        setDisable(false);
        setIsLoading(false);
        setAppointmentDiv(true);
        localStorage.setItem("productID", res3.data.entryId);
      } else {
        setDisable(false);
        setIsLoading(false);
        // console.log("Something went wrong, try again later.");
      }
    }
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

  const itemCondition = [
    {
      value: "New",
    },
    {
      value: "Used",
    },
    {
      value: "Refubished",
    },
  ];

  return (
    <div className={`saleFormDiv ${cssClass}`}>
      <div className="saleFormHeading">
        <div className="saleFormHeadingTab">Sell</div>
      </div>
      <div className="salesInputArea">
        {/* <TxtFieldInputTxt
          label="Select Service"
          // options={Services}
          type="text"
          onChange={handleChange}
          value={service}
          name="service"
        /> */}
        <BasicSelect
          className="appointment_input_area"
          labelId="Select Service*"
          label="Select Service*"
          onChange={handleChange}
          value={service}
          name="service"
          menuItem={menuItem}
        />

        <TxtFieldInputTxt
          label="Input Brand*"
          type="text"
          // options={Brands}
          onChange={handleChange}
          value={brand}
          name="brand"
        />
        <TxtFieldInputTxt
          label="Input Model*"
          type="text"
          // options={Model}
          onChange={handleChange}
          value={model}
          name="model"
        />
        <BasicSelect
          className="appointment_input_area"
          labelId="Item Condition*"
          label="Item Condition*"
          onChange={handleChange}
          value={itemState}
          name="itemState"
          menuItem={itemCondition}
        />
        {isLoading ? (
          <FunctionButton
            txt={<LoadingIcons.ThreeDots height="20px" width="100%" />}
            click={submitData}
            disabled={disable}
          />
        ) : (
          <FunctionButton
            txt="Sell Now"
            click={submitData}
            disabled={disable}
          />
        )}
      </div>
      {appointmentDiv == true ? <AppointmentForm /> : null}
    </div>
  );
};

const mapStateToProps = (state) => ({
  // isAuthenticated: state.auth.isAuthenticated,
});

export default connect(mapStateToProps, { submitItemSpec })(SaleForm);
