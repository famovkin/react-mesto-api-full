import React from "react";
import Popup from "./Popup";
import Form from "./Form";

function PopupWithForm({ isOpen, name, onClose, ...props }) {
  function handleSubmit(e) {
    props.onSubmit(e);
  }

  return (
    <Popup isOpen={isOpen} name={name} onClose={onClose}>
      <Form
        handleSubmit={handleSubmit}
        name={name}
        title={props.title}
        isLoading={props.isLoading}
        textLoader={props.textLoader}
        textSubmitBtn={props.textSubmitBtn}
        isFormValid={props.isFormValid}
      >
        {props.children}
      </Form>
    </Popup>
  );
}

export default PopupWithForm;
