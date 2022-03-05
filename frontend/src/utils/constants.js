export const config = {
  formSelector: ".popup__form",
  inputSelector: ".popup__input",
  submitButtonSelector: ".popup__button",
  inactiveButtonClass: "popup__button_disabled",
  inputErrorClass: "popup__input_type_error",
  errorClass: "popup__error_visible",
};

export const popupEditOpenBtn = document.querySelector(".profile__edit-button");
export const popupAddOpenBtn = document.querySelector(".profile__add-button");
export const ESC_CODE = "Escape";
export const formAdd = document.querySelector(".popup__form_type_add");
export const formEdit = document.querySelector(".popup__form_type_edit");
export const formUpdateAvatar = document.querySelector(
  ".popup__form_type_update-avatar"
);
export const nameInput = formEdit.querySelector(".popup__input_type_name");
export const jobInput = formEdit.querySelector(".popup__input_type_job");
export const editPopupSubmitBtn = formEdit.querySelector(".popup__button");
export const formConfirm = document.querySelector(".popup__form_type_confirm");
export const confirmPopupBtn = formConfirm.querySelector(".popup__button");
export const addPopupSubmitBtn = formAdd.querySelector(".popup__button");
export const updateAvatarSubmitBtn =
  formUpdateAvatar.querySelector(".popup__button");
export const updateAvatarButton = document.querySelector(
  ".profile__avatar-edit-button"
);
export const profileAvatar = document.querySelector(".profile__avatar-image");
export const popupError = document.querySelector(".popup_type_error");
export const popupErrButtonOk = popupError.querySelector(".popup__button");
