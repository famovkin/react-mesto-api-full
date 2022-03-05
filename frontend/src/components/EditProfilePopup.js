import React, { useContext, useEffect } from "react";
import PopupWithForm from "./PopupWithForm";
import { CurrentUserContext } from "../contexts/CurrentUserContext";
import InputWithError from "./InputWithError";
import useFormAndValidation from "../hooks/useFormAndValidation";

function EditProfilePopup({ isOpen, onClose, onUpdateUser, isLoading }) {
  const currentUser = useContext(CurrentUserContext);
  const { handleChange, values, setValues, errors, isFormValid, resetForm } =
    useFormAndValidation();

  useEffect(() => {
    resetForm();
    setValues({ name: currentUser.name, job: currentUser.about });
  }, [currentUser, isOpen, setValues, resetForm]);

  function handleSubmit(e) {
    e.preventDefault();
    onUpdateUser({ name: values["name"], job: values["job"] });
  }

  return (
    <PopupWithForm
      name="edit"
      title="Редактировать профиль"
      textSubmitBtn="Сохранить"
      textLoader="Сохранение..."
      isLoading={isLoading}
      isOpen={isOpen}
      onClose={onClose}
      onSubmit={handleSubmit}
      isFormValid={isFormValid}
    >
      <InputWithError
        value={values["name"] || ""}
        onChange={handleChange}
        isInvalid={errors["name"] ? true : false}
        errorText={errors["name"]}
        name="name"
        type="text"
        placeholder="Имя"
        minLength="2"
        maxLength="40"
      />
      <InputWithError
        value={values["job"] || ""}
        onChange={handleChange}
        isInvalid={errors["job"] ? true : false}
        errorText={errors["job"]}
        name="job"
        type="text"
        placeholder="Профессиональная деятельность"
        minLength="2"
        maxLength="200"
      />
    </PopupWithForm>
  );
}

export default EditProfilePopup;
