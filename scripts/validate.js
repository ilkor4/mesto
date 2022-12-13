// Функция (Показ ошибки)
const showInputError = (formElement, inputElement, errorMessage, selectorList) => {
  const errorElement = formElement.querySelector(`.${inputElement.id}-error`);

  inputElement.classList.add(selectorList.inputErrorClass);
  errorElement.classList.add(selectorList.errorClass);
  errorElement.textContent = errorMessage;
};
// Функция (Скрытие ошибки)
const closeInputError = (formElement, inputElement, selectorList) => {
  const errorElement = formElement.querySelector(`.${inputElement.id}-error`);

  inputElement.classList.remove(selectorList.inputErrorClass);
  errorElement.classList.remove(selectorList.errorClass);
  errorElement.textContent = '';
};
// Функция (Проверка валидности)
const isValid = (formElement, inputElement, selectorList) => {
  if (!inputElement.validity.valid) {
    showInputError(formElement, inputElement, inputElement.validationMessage, selectorList);
  } else {
    closeInputError(formElement,inputElement, selectorList);
  };
};
// Функция(Добавление обработчиков)
const setEventListeners = (formElement, selectorList) => {
  const inputList = Array.from(formElement.querySelectorAll(selectorList.inputSelector));
  const buttonElement = formElement.querySelector(selectorList.submitButtonSelector);

  inputList.forEach((inputElement) => {
    inputElement.addEventListener('input', () => {
      isValid(formElement, inputElement, selectorList);
      toggleButtonState(inputList, buttonElement, selectorList);
    });
  });
};
// Функция (Проверка всех полей)
const hasInvalidInput = (inputList) => {
  return inputList.some((inputElement) => {
    return !inputElement.validity.valid;
  });
}

// Функция (Изменение кнопки submit)
const toggleButtonState = (inputList, buttonElement, selectorList) => {
  if (hasInvalidInput(inputList)) {
    buttonElement.classList.add(selectorList.inactiveButtonClass);
  } else {
    buttonElement.classList.remove(selectorList.inactiveButtonClass);
  }
}

// Функция (Включение валидации)
const enableValidation = (selectorList) => {
  const formListElement  = Array.from(document.querySelectorAll(selectorList.formSelector));

  formListElement.forEach((formElement) => {
    setEventListeners(formElement, selectorList);
  });
};

enableValidation({
  formSelector: '.form',
  inputSelector: '.form__input',
  submitButtonSelector: '.form__save-button',
  inactiveButtonClass: 'form__save-button_disabled',
  inputErrorClass: 'form__input_type_error',
  errorClass: 'form__input-error_active'
});
