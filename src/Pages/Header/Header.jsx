import React from "react";
import "../../Assets/Css/Header.css";
import { LoginButton } from "../../Components/Buttons/Button";
import { SearchBar } from "../../Components/SearchBar/SearchBar";
const Header = () => {
  return (
    <div className="headerContainer">
      <section className="headerSection1">
        <div className="container">
          <div className="header_area">
            <div className="header_logo">
              <img src="/img/ella_logo.svg" alt="" className="header_img" />
              <span className="poweredBy">Powered by Egoras.</span>
            </div>
            {/* <SearchBar placeHolder="Start typing..." /> */}
            <div className="header_link_area">
              <a href="#" className="header_link">
                Buy Now
              </a>
              <a href="#" className="header_link">
                Save Now
              </a>
              <a href="#" className="header_link">
                Support
              </a>
              <span className="vl"></span>
              <LoginButton txt="Sell Now" href="/login" />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Header;
