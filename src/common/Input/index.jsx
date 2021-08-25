import React from "react";
import "./input.css";

const Input = ({ label, type, name, placeholder, onChange, value }) => (
  <div className="input">
    <label htmlFor={name}>{label}</label>
    <input
      type={type}
      name={name}
      placeholder={placeholder}
      onChange={onChange}
      value={value}
    />
  </div>
);

export default Input;
