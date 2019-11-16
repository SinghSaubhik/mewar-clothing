import React from "react";
import "./form-input.styles.scss";

const FormInput = ({ handleChange, label, value, ...otherProps }) => (
  <div className="group">
    <input className="form-input" onChange={handleChange} {...otherProps} />
    {label ? <label> {label}</label> : null}
  </div>
);

export default FormInput;
