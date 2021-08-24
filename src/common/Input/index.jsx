import React from "react";
import "./input.css";

const Input = ({ label, type, name, placeholder, onChange }) => (
  <div className="input">
    <label htmlFor={label}>{label}</label>
    <input
      type={type}
      name={name}
      placeholder={placeholder}
      onChange={onChange}
    />
  </div>
);

export default Input;
