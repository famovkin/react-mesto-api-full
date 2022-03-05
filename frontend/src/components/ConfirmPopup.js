import React from "react";
import PopupWithForm from "./PopupWithForm";

function ConfirmPopup({ isOpen, onClose, onSubmit, isLoading }) {
  function handleSubmit(e) {
    e.preventDefault();
    onSubmit();
  }

  return (
    <PopupWithForm
      onSubmit={handleSubmit}
      isOpen={isOpen}
      onClose={onClose}
      isLoading={isLoading}
      name="confirm"
      title="Вы уверены?"
      textSubmitBtn="Да"
      textLoader="Удаляем..."
      isFormValid={true}
    />
  );
}

export default ConfirmPopup;
