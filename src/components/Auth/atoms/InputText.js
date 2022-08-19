import React from "react";

const InputText = ({ labelText, labelFor, inputType, inputId }) => {
  return (
    <div className="input-row">
      <dt>
        <label className="label" for={labelFor}>
          {labelText}
        </label>
      </dt>
      <dd>
        <input type={inputType} id={inputId} />
      </dd>
    </div>
  );
};

export default InputText;
