import React from "react";
import "./SearchBar.css";
export const SearchBar = (props) => {
  return (
    <div className="header_input_area">
      <input
        type="search"
        className="searchInput"
        placeholder={props.placeHolder}
      />
    </div>
  );
};
