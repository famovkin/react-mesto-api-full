import React from "react";
import success from "../images/success.png";
import failure from "../images/failure.png";
import Popup from "./Popup";

function InfoToolTip({ isOpen, onClose, ...props }) {
  return (
    <Popup
      isOpen={isOpen}
      name="info"
      onClose={onClose}
      modForContainer="popup__container_type_info"
    >
      <img
        className="popup__info-image"
        src={props.isSuccess ? success : failure}
        alt="Галочка"
      />
      <h2 className="popup__title popup__title_type_info">
        {props.isSuccess
          ? "Вы успешно зарегистрировались!"
          : "Что-то пошло не так! Попробуйте ещё раз"}
      </h2>
    </Popup>
  );
}

export default InfoToolTip;
