import { validationConfig } from "./constans.js";
// Функция (Показ ошибки)
const showInputError = (formElement, inputElement, errorMessage, validationConfig) => {
  const errorElement = formElement.querySelector(`.${inputElement.id}-error`);

  inputElement.classList.add(validationConfig.inputErrorClass);
  errorElement.classList.add(validationConfig.errorClass);
  errorElement.textContent = errorMessage;
};
// Функция (Скрытие ошибки)
const hideInputError = (formElement, inputElement, validationConfig) => {
  const errorElement = formElement.querySelector(`.${inputElement.id}-error`);

  inputElement.classList.remove(validationConfig.inputErrorClass);
  errorElement.classList.remove(validationConfig.errorClass);
  errorElement.textContent = '';
};
// Функция (Проверка валидности)
const toggleInputErrorState = (formElement, inputElement, validationConfig) => {
  if (!inputElement.validity.valid) {
    showInputError(formElement, inputElement, inputElement.validationMessage, validationConfig);
  } else {
    hideInputError(formElement,inputElement, validationConfig);
  };
};
// Функция(Добавление обработчиков)
const setEventListeners = (formElement, validationConfig) => {
  const inputList = Array.from(formElement.querySelectorAll(validationConfig.inputSelector));
  const buttonElement = formElement.querySelector(validationConfig.submitButtonSelector);

  inputList.forEach((inputElement) => {
    inputElement.addEventListener('input', () => {
      toggleInputErrorState(formElement, inputElement, validationConfig);
      toggleButtonState(inputList, buttonElement, validationConfig);
    });
  });
};
// Функция (Проверка всех полей)
const hasInvalidInput = (inputList) => {
  return inputList.some((inputElement) => {
    return !inputElement.validity.valid;
  });
}
// Функция (Активация кнопки)
const enableButtonState = (buttonElement, validationConfig) => {
  buttonElement.classList.remove(validationConfig.inactiveButtonClass);
  buttonElement.removeAttribute('disabled');
}
// Функция (Выключения кнопки)
const disableButtonState = (buttonElement, validationConfig) => {
  buttonElement.classList.add(validationConfig.inactiveButtonClass);
  buttonElement.setAttribute('disabled', true);
}

// Функция (Изменение кнопки submit)
const toggleButtonState = (inputList, buttonElement, validationConfig) => {
  if (hasInvalidInput(inputList)) {
    disableButtonState(buttonElement, validationConfig);
  } else {
    enableButtonState(buttonElement, validationConfig);
  }
}

// Функция (Включение валидации)
const enableValidation = (validationConfig) => {
  const formListElement  = document.querySelectorAll(validationConfig.formSelector);

  formListElement.forEach((formElement) => {
    setEventListeners(formElement, validationConfig);
  });
};

enableValidation(validationConfig);
