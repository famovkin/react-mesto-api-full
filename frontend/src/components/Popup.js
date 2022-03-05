import React, { useEffect } from "react";
import closeButton from "../images/close_icon.svg";

function Popup({
  isOpen,
  name,
  onClose,
  modForContainer,
  children,
  containerForImage,
}) {
  useEffect(() => {
    if (!isOpen) return;

    const closeByEscape = (e) => {
      if (e.key === "Escape") {
        onClose();
      }
    };

    document.addEventListener("keydown", closeByEscape);
    return () => document.removeEventListener("keydown", closeByEscape);
  }, [isOpen, onClose]);

  const handleOverlay = (e) => {
    if (e.target === e.currentTarget) {
      onClose();
    }
  };

  return (
    <div
      className={`popup ${isOpen ? "popup_opened" : ""} popup_type_${name}`}
      onClick={handleOverlay}
    >
      <div
        className={
          containerForImage || `popup__container ${modForContainer || ""}`
        }
      >
        {children}
        <button className="popup__close-button" type="button" onClick={onClose}>
          <img className="popup__close-image" src={closeButton} alt="Крестик" />
        </button>
      </div>
    </div>
  );
}

export default Popup;
