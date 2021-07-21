const page = document.querySelector('body');
import {isEscKeyDown} from './utils.js';
const successMessage = document.querySelector('#success').content.querySelector('.success');
const successButton = successMessage.querySelector('.success__button');
const errorMessage = document.querySelector('#error').content.querySelector('.error');
const errorButton = errorMessage.querySelector('.error__button');

const closeSuccessMessageEsc = (evt) => {
  if (isEscKeyDown(evt)) {
    successMessage.remove();
    document.removeEventListener('keydown', closeSuccessMessageEsc);
  }
};

const closeSuccessMessageClick = (evt) => {
  if (evt.target.classList.contains('success')) {
    successMessage.remove();
  }
};

const closeErrorMessageEsc = (evt) => {
  if (isEscKeyDown(evt)) {
    errorMessage.remove();
    document.removeEventListener('keydown', closeErrorMessageEsc);
  }
};

const closeErrorMessageClick = (evt) => {
  if (evt.target.classList.contains('error')) {
    errorMessage.remove();
  }
};

const closeSuccessMessage = () => {
  successMessage.remove();
  document.removeEventListener('keydown', closeSuccessMessageEsc);
  document.removeEventListener('click', closeSuccessMessageClick);
};

const showSuccessMessage = () => {
  page.append(successMessage);
  successButton.addEventListener('click', closeSuccessMessage);
  document.addEventListener('keydown', closeSuccessMessageEsc);
  document.addEventListener('click', closeSuccessMessageClick);
};

const closeErrorMessage = () => {
  errorMessage.remove();
  document.removeEventListener('keydown', closeErrorMessageEsc);
  document.removeEventListener('click', closeErrorMessageClick);
};

const showErrorMessage = () => {
  page.append(errorMessage);
  errorButton.addEventListener('click', closeErrorMessage);
  document.addEventListener('keydown', closeErrorMessageEsc);
  document.addEventListener('click', closeErrorMessageClick);
};

export {showSuccessMessage, showErrorMessage};
