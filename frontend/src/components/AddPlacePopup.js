import React, { useEffect } from "react";
import PopupWithForm from "./PopupWithForm";
import InputWithError from "./InputWithError";
import useFormAndValidation from "../hooks/useFormAndValidation";

function AddPlacePopup({ isOpen, onClose, onAddPlace, isLoading }) {
  const { handleChange, values, errors, isFormValid, resetForm } =
    useFormAndValidation();

  function handleSubmit(e) {
    e.preventDefault();
    onAddPlace({ name: values["place-name"], link: values["place-link"] });
  }

  useEffect(() => resetForm(), [isOpen, resetForm]);

  return (
    <PopupWithForm
      onSubmit={handleSubmit}
      name="add"
      title="Новое место"
      textSubmitBtn="Создать"
      textLoader="Сохранение..."
      isLoading={isLoading}
      isOpen={isOpen}
      onClose={onClose}
      isFormValid={isFormValid}
    >
      <InputWithError
        value={values["place-name"] || ""}
        isInvalid={errors["place-name"] ? true : false}
        errorText={errors["place-name"]}
        onChange={handleChange}
        type="text"
        name="place-name"
        placeholder="Название"
        minLength="2"
        maxLength="30"
      />
      <InputWithError
        value={values["place-link"] || ""}
        isInvalid={errors["place-link"] ? true : false}
        errorText={errors["place-link"]}
        onChange={handleChange}
        type="url"
        name="place-link"
        placeholder="Ссылка на картинку"
      />
    </PopupWithForm>
  );
}

export default AddPlacePopup;
