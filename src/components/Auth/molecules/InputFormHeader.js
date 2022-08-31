import React from "react";

const InputFormHeader = ({ title, desc, descStyle }) => {
  return (
    <div className="input-header">
      <h1>{title}</h1>
      <p
        style={descStyle === "error" ? style.authFalseDesc : style.authTrueDesc}
      >
        {desc}
      </p>
    </div>
  );
};

const style = {
  authTrueDesc: {
    fontSize: "20px",
    margin: "0",
    color: "#4E4B66",
    whiteSpace: "pre-line",
  },
  authFalseDesc: {
    fontSize: "20px",
    margin: "0",
    color: "#EC1515",
    whiteSpace: "pre-line",
  },
};

export default InputFormHeader;
