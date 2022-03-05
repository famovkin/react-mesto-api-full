import React from "react";

function InputWithError({ name, isInvalid, errorText, ...props }) {
  return (
    <>
      <input
        className={`popup__input popup__input_type_${name} ${
          isInvalid ? "popup__input_type_error" : ""
        }`}
        name={name}
        id={`${name}-input`}
        {...props}
        required
      />
      <span
        className={`popup__error  ${
          isInvalid ? "popup__error_visible" : ""
        }`}
      >
        {errorText}
      </span>
    </>
  );
}

export default InputWithError;
