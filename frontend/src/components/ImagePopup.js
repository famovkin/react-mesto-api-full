import React from "react";
import Popup from "./Popup";

function ImagePopup({ isOpen, name, onClose, ...props }) {
  return (
    <Popup
      isOpen={props.selectedCard.link === "" ? false : isOpen}
      name="image"
      onClose={onClose}
      containerForImage="popup__image-container"
    >
      <img
        className="popup__image"
        src={props.selectedCard.link}
        alt={props.selectedCard.name}
      />
      <h2 className="popup__heading">{props.selectedCard.name}</h2>
    </Popup>
  );
}

export default ImagePopup;
