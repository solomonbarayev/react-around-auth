import React, { useEffect } from 'react';
import PopupWithForm from './PopupWithForm';
import successfulIcon from '../images/icons/successful_icon.svg';
import unsuccessfulIcon from '../images/icons/unsuccessful_icon.svg';

const InfoTooltip = ({ isOpen, onClose, type }) => {
  const success = type === 'successful';

  //Effect to close the popup after 3 seconds
  useEffect(() => {
    if (isOpen) {
      const timer = setTimeout(() => {
        onClose();
      }, 2500);
      return () => clearTimeout(timer);
    }
  }, [isOpen]);

  return (
    <PopupWithForm
      name="tooltip"
      title=""
      isOpen={isOpen}
      onClose={onClose}
      className="tooltip"
    >
      <img
        src={success ? successfulIcon : unsuccessfulIcon}
        className="tooltip__image"
      />
      <h2 className="tooltip__text">
        {success
          ? 'Success! You have now been registered.'
          : 'Oops, something went wrong! Please try again.'}
      </h2>
    </PopupWithForm>
  );
};

export default InfoTooltip;
