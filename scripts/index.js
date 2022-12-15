// Переменные (Открытие/Закрытие попапа для редактирование профиля)
const profileEditButtonElement = document.querySelector('.profile__edit-button');
const profileNameElement = document.querySelector('.profile__name');
const profileSignatureElement = document.querySelector('.profile__signature');
const editPopupElement = document.querySelector('.popup_type_edit');
const popupCloseButtonsElement = document.querySelectorAll('.popup__close-button');
const formElement = editPopupElement.querySelector('.form');
const formInputNameElement = formElement.querySelector('.form__input_type_name');
const formInputSignatureElement = formElement.querySelector('.form__input_type_signature');
// Переменные (Добавление карточек)
const cardElement = document.querySelector('#card');
// Переменные (Открытие/Закрытие попапа для добавления карточек)
const addPopupElement = document.querySelector('.popup_type_add');
const popupList = Array.from(document.querySelectorAll('.popup'));
const addPopupCardsElement = document.querySelector('.elements');
const addFormElement = addPopupElement.querySelector('.form');
const addFormInputNameElemeent = addFormElement.querySelector('.form__input_type_name');
const addFormInputLinkElement = addFormElement.querySelector('.form__input_type_link');
const profileAddButtonElement = document.querySelector('.profile__add-button');
// Переменные (Открытие/Закрытие попапа для просмотра фото)
const photoPopupElement = document.querySelector('.popup_type_photo');
const photoPopupImageElement = photoPopupElement.querySelector('.popup__image');
const photoPopupTitleElement = photoPopupElement.querySelector('.popup__title');


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
// Функция (Лайк карточки)
function likeCard(evt) {
  evt.target.classList.toggle('element__heart_type_active');
}
// Функция (Удаление карточки)
function deleteCard(evt) {
  evt.target.closest('.element').remove();
}
//  Функция (Открытие попапа карточки)
function openPhoto (evt) {
  openPopup(photoPopupElement);
  photoPopupImageElement.setAttribute('src', evt.target.getAttribute('src'));
  photoPopupImageElement.setAttribute('alt', evt.target.getAttribute('alt'));
  photoPopupTitleElement.textContent = evt.target.getAttribute('alt');
}
// Функция (Создание новой карточки)
function createCard(template, item) {
  const newCardElement = template.content.cloneNode(true);
  newCardElement.querySelector('.element__title').textContent = item.name;
  const newCardElementImage = newCardElement.querySelector('.element__image');
  newCardElementImage.setAttribute('src', item.link);
  newCardElementImage.setAttribute('alt', item.alt);
  newCardElementImage.addEventListener('click', openPhoto);
  newCardElement.querySelector('.element__heart').addEventListener('click', likeCard);
  newCardElement.querySelector('.element__delete-button').addEventListener('click', deleteCard);
  return newCardElement;
}
// Функция (Рендеринг карточки)
function renderCard(template, item, itemContainer) {
  const newCardElement = createCard(template, item);
  itemContainer.prepend(newCardElement);
}
// Функция (Добавление исходных карточек на страницу)
initialCards.forEach((item) => renderCard(cardElement, item, addPopupCardsElement));
// Функция (Закрытие попапа на оверлэй)
function closePopupByOverlayClick(evt) {
  if (evt.target === evt.currentTarget) {
    closePopup(evt.target);
}
};
// Функция (Выключение кнопки при открытии попапа)
function disableSubmitButton(popup) {
  const buttonSubmitElement = popup.querySelector('.form__save-button');
  buttonSubmitElement.classList.add('form__save-button_disabled');
  buttonSubmitElement.setAttribute('disabled', 'true');
};

const closePopupByEsc = (evt) => {
  if (evt.key === 'Escape') {
    const openPopup = document.querySelector('.popup_opened');
    closePopup(openPopup);
  }
};

// Обработчик события открытия попапа для редактирования профиля
profileEditButtonElement.addEventListener('click',() => {
  openPopup(editPopupElement);
  formInputNameElement.value = profileNameElement.textContent;
  formInputSignatureElement.value = profileSignatureElement.textContent;
});
// Обработчик события открытия попапа для добавления карточек
profileAddButtonElement.addEventListener('click',() => {
  openPopup(addPopupElement);
  disableSubmitButton(addPopupElement);
  addFormElement.reset();
});
// Обработчик события изменения профиля
formElement.addEventListener('submit', changeProfile);
// Обработчик события добавления новой карточки
addFormElement.addEventListener('submit',(evt) => {
  evt.preventDefault();
  renderCard(cardElement, {
    name: addFormInputNameElemeent.value,
    link: addFormInputLinkElement.value,
    alt: addFormInputNameElemeent.value
  }, addPopupCardsElement);
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

