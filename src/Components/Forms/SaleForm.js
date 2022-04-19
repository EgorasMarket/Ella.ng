import React from "react";
import { FunctionButton } from "../Buttons/Button";
import "./Forms.css";
import Demo from "./Demo";
export const SaleForm = () => {
  const Services = [
    { title: "Mobile Phone", year: 1994 },
    { title: "Laptop", year: 1972 },
    { title: "Tablet", year: 1972 },
    { title: "Desktop", year: 1972 },
    { title: "Gaming Consoles", year: 1972 },
    { title: "Smartwatch", year: 1972 },
    { title: "Television", year: 1972 },
    { title: "Smart Speaker", year: 1972 },
    { title: "DSLR Camera", year: 1972 },
    { title: "Earbuds", year: 1972 },
    { title: "Cars", year: 1972 },
  ];
  const Brands = [
    { title: "Apple", year: 1994 },
    { title: "Xiaomi", year: 1972 },
    { title: "Samsung", year: 1972 },
    { title: "Vivo", year: 1972 },
    { title: "Oppo", year: 1972 },
    { title: "Lenovo", year: 1972 },
    { title: "Realme", year: 1972 },
    { title: "Huawei", year: 1972 },
    { title: "Infinix", year: 1972 },
    { title: "Tecno", year: 1972 },
    { title: "Nokia", year: 1972 },
  ];
  const Model = [
    { title: " Apple iPhone 5", year: 1994 },
    { title: "Apple iPhone 5s", year: 1972 },
    { title: "Apple iPhone 5c", year: 1972 },
    { title: "Apple iPhone 6", year: 1972 },
    { title: "Apple iPhone 7", year: 1972 },
    { title: "Apple iPhone 8 Plus", year: 1972 },
    { title: "Apple iPhone 8 Plus", year: 1972 },
    { title: "Apple iPhone 8 Plus", year: 1972 },
    { title: "Apple iPhone 8 Plus", year: 1972 },
    { title: "Apple iPhone 8 Plus", year: 1972 },
    { title: "Apple iPhone 8 Plus", year: 1972 },
  ];

  return (
    <div className="saleFormDiv">
      <div className="saleFormHeading">
        <div className="saleFormHeadingTab">Sell</div>
      </div>
      <div className="salesInputArea">
        <Demo placeHolder="Select Service" options={Services} />
        <Demo placeHolder="Select Brand" options={Brands} />
        <Demo placeHolder="Select Model" options={Model} />

        <FunctionButton txt="Sell Now" />
      </div>
    </div>
  );
};
