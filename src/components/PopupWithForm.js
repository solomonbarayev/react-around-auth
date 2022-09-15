import React from 'react';

const PopupWithForm = (props) => {
  return (
    <div
      className={`popup popup_type_${props.name} ${
        props.isOpen ? 'popup_opened' : ''
      }`}
    >
      <div className={`popup__container popup__container_type_${props.name}`}>
        <button
          className={`popup__close-button popup__close-button_type_${props.name}`}
          type="button"
          onClick={props.onClose}
        ></button>
        <h2 className={`popup__title popup__title_type_${props.name}`}>
          {props.title}
        </h2>
        <form
          action="submit"
          className="form popup__form"
          name={props.name}
          onSubmit={props.onSubmit}
        >
          {props.children}
          {!props.isTooltipOpen && (
            <fieldset className="form__fieldset">
              <button
                className={`form__button form__button_type_${props.name}`}
                type="submit"
              >
                {props.buttonText}
              </button>
            </fieldset>
          )}
        </form>
      </div>
    </div>
  );
};

export default PopupWithForm;
