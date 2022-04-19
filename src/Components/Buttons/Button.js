import React from "react";
import "./Buttons.css";
export const LoginButton = (props) => {
  return (
    <>
      <a href={props.href}>
        <button className="LoginBtn">{props.txt}</button>
      </a>
    </>
  );
};
export const SignUpButton = (props) => {
  return (
    <>
      <a href={props.href}>
        <button className="LoginBtn">{props.txt}</button>
      </a>
    </>
  );
};
export const FunctionButton = (props) => {
  return (
    <>
      <button className="LoginBtn" onClick={props.click}>
        {props.txt}
      </button>
    </>
  );
};
export const RegButton = (props) => {
  return (
    <>
      <a href={props.href}>
        <button className="LoginBtn">{props.txt}</button>
      </a>
    </>
  );
};
