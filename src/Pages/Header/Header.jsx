import React, { useState, useEffect } from "react";
import SaleForm from "../../Components/Forms/SaleForm";
import MenuIcon from "@mui/icons-material/Menu";
import CloseIcon from "@mui/icons-material/Close";

import "../../Assets/Css/Header.css";
import HeaderMenu from "../../Components/HeaderMenu/HeaderMenu";
import { FunctionButton, LoginButton } from "../../Components/Buttons/Button";
// import { SearchBar } from "../../Components/SearchBar/SearchBar";
const Header = () => {
  const [hederMenu, setHeaderMenu] = useState(false);
  const [saleForm, setSaleForm] = useState(false);

  const ToggleHeaderMenu = () => {
    if (hederMenu === false) {
      setHeaderMenu(true);
    } else if (hederMenu === true) {
      setHeaderMenu(false);
    }
  };
  const ToggleSaleForm = () => {
    if (saleForm === false) {
      setSaleForm(true);
    } else if (saleForm === true) {
      setSaleForm(false);
    }
  };
  return (
    <div className="headerContainer">
      <section className="headerSection1">
        <div className="container">
          <div className="header_area">
            <div className="header_logo">
              <img src="/img/ella_logo.svg" alt="" className="header_img" />
            </div>
            {/* <SearchBar placeHolder="Start typing..." /> */}
            <div className="mobile_display_btns">
              <FunctionButton
                txt="Sell Now"
                className="sellNowDivOpenBtn"
                click={ToggleSaleForm}
              />
              <MenuIcon className="menu_icon" onClick={ToggleHeaderMenu} />
            </div>

            <div className="header_link_area">
              <a href="https://egoras.com/loan" className="header_link">
                Loan
              </a>
              <a href="https://egoras.com/savings" className="header_link">
                Buy Now
              </a>
              <a href="https://egoras.com/savings" className="header_link">
                Savings
              </a>
              <a href="https://egoras.com/about" className="header_link">
                Company
              </a>
              <span className="vl"></span>
              <LoginButton txt="Sell Now" href="/login" />
            </div>
          </div>
        </div>
      </section>

      {hederMenu === true ? <HeaderMenu onClick={ToggleHeaderMenu} /> : null}
      {saleForm === true ? (
        <div className="header_sale_form_div">
          <div className="header_sale-form_div_button">
            <FunctionButton
              icon={<CloseIcon className="header_sale_remove_icon" />}
              txt="close"
              className="header_sale_remove_btn"
              click={ToggleSaleForm}
            />
          </div>
          <SaleForm cssClass="header_sale_form" />
        </div>
      ) : null}
    </div>
  );
};

export default Header;
