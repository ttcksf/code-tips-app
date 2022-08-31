import React from "react";

const InputText = ({
  labelText,
  labelFor,
  inputType,
  inputId,
  inputName,
  onChange,
}) => {
  return (
    <div className="input-row">
      <dt>
        <label className="label" htmlFor={labelFor}>
          {labelText}
        </label>
      </dt>
      <dd>
        <input
          type={inputType}
          id={inputId}
          name={inputName}
          onChange={onChange}
        />
      </dd>
    </div>
  );
};

export default InputText;
