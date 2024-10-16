import React from "react";
import blem from "blem"
import "@components/Checkbox.scss";

const Checkbox = ({ id, checked, toggle, label }) => {
  const bem = blem("Form")
  return (
    <label htmlFor={id} className={bem("label", ["checkbox", id])}>
      <input
        checked={checked}
        className={bem("input", ["checkbox", id])}
        type="checkbox"
        name={id}
        id={id}
        onChange={toggle}
      />
      <span className={bem("label-text")}>{label}</span>
    </label>
  )
};
export default Checkbox;
