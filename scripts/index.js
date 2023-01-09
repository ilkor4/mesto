import { initialCards, validationConfig, templateSelector, formListElement, buttonEditProfile, nameProfileElement, signatureProfileElement, popupEditElement, buttonsCloseElement, formEditElement, inputNameEditPopup, inputSignatureElement, popupAddElement, popupListElement, cardsAddPopup, formAddElement, inputNameAddPopup, inputLinkElement, buttonAddProfile, photoPopupElement, imagePhoptoPopupElement, titlePhotoPopupElement } from './constans.js';
import { Card } from './Card.js';
import { FormValidator } from './FormValidator.js';

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

  nameProfileElement.textContent = inputNameEditPopup.value;
  signatureProfileElement.textContent = inputSignatureElement.value;

  closePopup(popupEditElement);
};
// Функция (Рендеринг карточки)
function renderCard(templateSelector, data, itemContainer, openPhotoFunction) {
  const card = new Card (data, templateSelector, openPhotoFunction);

  const cardElement = card.generateCard();

  itemContainer.prepend(cardElement);
}
// Функция (Открытие попапа с фото)
const openPhoto = (evt) => {
  imagePhoptoPopupElement.setAttribute('src', evt.target.getAttribute('src'));
  imagePhoptoPopupElement.setAttribute('alt', evt.target.getAttribute('alt'));
  titlePhotoPopupElement.textContent = evt.target.getAttribute('alt');

  openPopup(photoPopupElement);
}
// Функция (Закрытие попапа на оверлэй)
function closePopupByOverlayClick(evt) {
  if (evt.target === evt.currentTarget) {
    closePopup(evt.target);
}
};
// Функция (Закрытие попапа на esc)
const closePopupByEsc = (evt) => {
  if (evt.key === 'Escape') {
    const openPopup = document.querySelector('.popup_opened');

    closePopup(openPopup);
  }
};
// Функция (Создание исходных карточек)
initialCards.forEach((data) => renderCard (templateSelector, data , cardsAddPopup, openPhoto));
// Функция (Включение валидации)
formListElement.forEach((formElement) => {
  const formValidator = new FormValidator(validationConfig, formElement);

  formValidator.enableValidation();
});

// Обработчик события открытия попапа для редактирования профиля
buttonEditProfile.addEventListener('click',() => {
  openPopup(popupEditElement);

  inputNameEditPopup.value = nameProfileElement.textContent;
  inputSignatureElement.value = signatureProfileElement.textContent;
});
// Обработчик события открытия попапа для добавления карточек
buttonAddProfile.addEventListener('click',() => {
  openPopup(popupAddElement);

  formAddElement.reset();
});
// Обработчик события изменения профиля
formEditElement.addEventListener('submit', changeProfile);
// Обработчик события добавления новой карточки
formAddElement.addEventListener('submit',(evt) => {
  evt.preventDefault();
  renderCard(templateSelector, {
    name: inputNameAddPopup.value,
    link: inputLinkElement.value,
    alt: inputNameAddPopup.value
  }, cardsAddPopup, openPhoto);
  closePopup(popupAddElement);
});
// Обработчик событития для закрытия попапов
buttonsCloseElement.forEach((button) => {
  const popup = button.closest('.popup');
  button.addEventListener('click', () => closePopup(popup));
});
// Обработчик события для закрытия попапа через оверлэй
popupListElement.forEach((popup) => {
  popup.addEventListener('mousedown', (evt) => closePopupByOverlayClick(evt));
});

