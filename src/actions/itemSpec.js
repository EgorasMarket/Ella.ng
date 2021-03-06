import axios from "axios";
// import { setAlert } from "./alert";

import {
  //   FETCH_CART,
  //   ADD_TO_CART,
  //   UPDATE_CART,
  //   REMOVE_CART,
  API_URL2 as api_url2,
  //   API_URL3 as api_url3,
} from "./types";

export const submitItemSpec =
  (service, brand, model, itemState) => async (dispatch) => {
    //   // console.log(payload1, pin);
    const config = {
      headers: {
        "Content-Type": "application/json",
      },
    };

    try {
      const payload = JSON.stringify({ service, brand, model, itemState });

      // console.log(payload);

      let res6 = await axios.post(
        api_url2 + "/v1/outrightSell/submit/outright/sell/part",
        payload,
        config
      );

      // // console.log(res6);

      return {
        success: true,
        data: res6.data,
        // address: walletAddress
      };
    } catch (error) {
      // console.log(error.response);
      //   // console.log(error.response);

      return {
        success: false,
        data: error.response,
      };
    }
  };

export const submitItemSpecFull =
  (
    id,
    fullname,
    phoneNumber,
    emailAddress,
    stateLocation,
    // itemState,
    address,
    appointmentDate,
    closestBranch
  ) =>
  async (dispatch) => {
    //   // console.log(payload1, pin);
    const config = {
      headers: {
        "Content-Type": "application/json",
      },
    };

    try {
      const payload = JSON.stringify({
        id,
        fullname,
        phoneNumber,
        emailAddress,
        stateLocation,
        // itemState,
        address,
        appointmentDate,
        closestBranch,
      });

      // console.log(payload);

      let res6 = await axios.post(
        api_url2 + "/v1/outrightSell/submit/outright/sell",
        payload,
        config
      );

      // // console.log(res6);

      return {
        success: true,
        data: res6.data,
        // address: walletAddress
      };
    } catch (error) {
      // console.log(error.response);
      return {
        success: false,
        data: error.response,
      };
    }
  };
