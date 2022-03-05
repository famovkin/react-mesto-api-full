import React, { useEffect } from "react";
import PopupWithForm from "./PopupWithForm";
import InputWithError from "./InputWithError";
import useFormAndValidation from "../hooks/useFormAndValidation";

function EditAvatarPopup({ isOpen, onClose, onUpdateAvatar, isLoading }) {
  const { handleChange, values, errors, isFormValid, resetForm } =
    useFormAndValidation();

  function handleSubmit(e) {
    e.preventDefault();
    onUpdateAvatar(values["avatar-link"]);
  }

  useEffect(() => resetForm(), [isOpen, resetForm]);

  return (
    <PopupWithForm
      onSubmit={handleSubmit}
      name="update-avatar"
      title="Обновить аватар"
      textSubmitBtn="Сохранить"
      textLoader="Сохранение..."
      isLoading={isLoading}
      isOpen={isOpen}
      onClose={onClose}
      isFormValid={isFormValid}
    >
      <InputWithError
        value={values["avatar-link"] || ""}
        onChange={handleChange}
        name="avatar-link"
        type="url"
        placeholder="Ссылка на аватар"
        isInvalid={errors["avatar-link"] ? true : false}
        errorText={errors["avatar-link"]}
      />
    </PopupWithForm>
  );
}

export default EditAvatarPopup;
