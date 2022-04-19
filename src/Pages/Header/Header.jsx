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
            </div>
            {/* <SearchBar placeHolder="Start typing..." /> */}
            <LoginButton txt="Login" href="/login" />
          </div>
        </div>
      </section>
    </div>
  );
};

export default Header;
