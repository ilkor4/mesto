import { initialCards, validationConfig, templateSelector, editPopupElement, profileEditButtonElement, profileNameElement, profileSignatureElement, popupCloseButtonsElement, editFormElement, formInputNameElement, formInputSignatureElement, addPopupElement, popupList, addPopupCardsElement, addFormElement, addFormInputNameElemeent, addFormInputLinkElement, profileAddButtonElement, photoPopupElement, photoPopupImageElement, photoPopupTitleElement, disableButtonConfig, formListElement } from "./constans.js";
import { Card } from "./Card.js";
import { FormValidator } from "./FormValidator.js";

// Функция (Закрытия попапа)
function closePopup(popup) {
  popup.classList.remove('popup_opened');

  document.removeEventListener('keydown', closePopupByEsc);
};
// Функция (Открытия попапа)
function openPopup(popup) {
  popup.classList.add('popup_opened');

  document.addEventListener('keydown', closePopupByEsc);
}
// Функция (Редактирование профиля)
function changeProfile(evt) {
  evt.preventDefault();

  profileNameElement.textContent = formInputNameElement.value;
  profileSignatureElement.textContent = formInputSignatureElement.value;

  closePopup(editPopupElement);
};
// Функция (Рендеринг карточки)
function renderCard(templateSelector, data, itemContainer, openPhotoFunction) {
  const card = new Card (data, templateSelector, openPhotoFunction);

  const cardElement = card.generateCard();

  itemContainer.prepend(cardElement);
}
// Функция (Открытие попапа с фото)
const openPhoto = (evt) => {
  openPopup(photoPopupElement);

  photoPopupImageElement.setAttribute('src', evt.target.getAttribute('src'));
  photoPopupImageElement.setAttribute('alt', evt.target.getAttribute('alt'));
  photoPopupTitleElement.textContent = evt.target.getAttribute('alt');
}
// Функция (Закрытие попапа на оверлэй)
function closePopupByOverlayClick(evt) {
  if (evt.target === evt.currentTarget) {
    closePopup(evt.target);
}
};
// Функция (Выключение кнопки при открытии попапа)
function disableSubmitButton(popup, disableButtonConfig) {
  const formElement  = popup.querySelector(disableButtonConfig.formSelector);
  const buttonSubmitElement = formElement.querySelector(disableButtonConfig.saveButtonSelector);
  const formValidator = new FormValidator(validationConfig, formElement);

  formValidator._disableButtonState(buttonSubmitElement);
};
// Функция (Закрытие попапа на esc)
const closePopupByEsc = (evt) => {
  if (evt.key === 'Escape') {
    const openPopup = document.querySelector('.popup_opened');

    closePopup(openPopup);
  }
};
// Функция (Создание исходных карточек)
initialCards.forEach((data) => renderCard (templateSelector, data , addPopupCardsElement, openPhoto));
// Функция (Включение валидации)
formListElement.forEach((formElement) => {
  const formValidator = new FormValidator(validationConfig, formElement);

  formValidator.enableValidation();
});

// Обработчик события открытия попапа для редактирования профиля
profileEditButtonElement.addEventListener('click',() => {
  openPopup(editPopupElement);

  formInputNameElement.value = profileNameElement.textContent;
  formInputSignatureElement.value = profileSignatureElement.textContent;
});
// Обработчик события открытия попапа для добавления карточек
profileAddButtonElement.addEventListener('click',() => {
  openPopup(addPopupElement);

  disableSubmitButton(addPopupElement, disableButtonConfig);

  addFormElement.reset();
});
// Обработчик события изменения профиля
editFormElement.addEventListener('submit', changeProfile);
// Обработчик события добавления новой карточки
addFormElement.addEventListener('submit',(evt) => {
  evt.preventDefault();
  renderCard(templateSelector, {
    name: addFormInputNameElemeent.value,
    link: addFormInputLinkElement.value,
    alt: addFormInputNameElemeent.value
  }, addPopupCardsElement, openPhoto);
  closePopup(addPopupElement);
});
// Обработчик событития для закрытия попапов
popupCloseButtonsElement.forEach((button) => {
  const popup = button.closest('.popup');
  button.addEventListener('click', () => closePopup(popup));
});
// Обработчик события для закрытия попапа через оверлэй
popupList.forEach((popup) => {
  popup.addEventListener('mousedown', (evt) => closePopupByOverlayClick(evt));
});

