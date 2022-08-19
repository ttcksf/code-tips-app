import React from "react";

const InputFormHeader = ({ title, desc }) => {
  return (
    <div className="input-header">
      <h1>{title}</h1>
      <p>{desc}</p>
    </div>
  );
};

export default InputFormHeader;
