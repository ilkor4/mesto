// Переменные (Открытие/Закрытие попапа для редактирование профиля)
const profileEditButtonElement = document.querySelector('.profile__edit-button');
const profileNameElement = document.querySelector('.profile__name');
const profileSignatureElement = document.querySelector('.profile__signature');
const popupElement = document.querySelector('.popup_type_edit');
const popupCloseButtonElement = popupElement.querySelector('.popup__close-button');
const formElement = popupElement.querySelector('.form');
const formInputNameElement = formElement.querySelector('.form__input_type_name');
const formInputSignatureElement = formElement.querySelector('.form__input_type_signature');
// Переменные (Добавление карточек)
const cardElement = document.querySelector('.card');
let initialCards = [
  {
    name: 'Алтай',
    link: './images/elements/altai.jpg',
    alt: 'Горы Алтая'
  },
  {
    name: 'Байкал',
    link: './images/elements/baikal.jpg',
    alt: 'Озеро Байкал'
  },
  {
    name: 'Домбай',
    link: './images/elements/dombai.jpg',
    alt: 'Горный хребет Домбай'
  },
  {
    name: 'Эльбрус',
    link: './images/elements/elbrus.jpg',
    alt: 'Гора Эльбрус'
  },
  {
    name: 'Владивосток',
    link: './images/elements/vladivostok.jpg',
    alt: 'Город Владивосток'
  },
  {
    name: 'Волга',
    link: './images/elements/volga.jpg',
    alt: 'Река Волга'
  }
];
// Переменные (Открытие/Закрытие попапа для добавления карточек)
const addPopupElement = document.querySelector('.popup_type_add');
const addPopupCardsElement = document.querySelector('.elements')
const addPopupCloseButton = addPopupElement.querySelector('.popup__close-button');
const addFormElement = addPopupElement.querySelector('.form');
const addFormInputNameElemeent = addFormElement.querySelector('.form__input_type_name');
const addFormInputLinkElement = addFormElement.querySelector('.form__input_type_link');
const profileAddButtonElement = document.querySelector('.profile__add-button');
// Переменные (Открытие/Закрытие попапа для просмотра фото)
const photoPopupElement = document.querySelector('.popup_type_photo');
const photoPopupCloseButtonElement = photoPopupElement.querySelector('.popup__close-button');
const photoPopupImageElement = photoPopupElement.querySelector('.popup__image');
const photoPopupTitleElement = photoPopupElement.querySelector('.popup__title');


// Функция (Закрытия попапа)
function closePopup(popup) {
  popup.classList.remove('popup_opened');
};
// Функция (Открытия попапа)
function openPopup(popup) {
  popup.classList.add('popup_opened');
}
// Функция (Редактирование профиля)
function changeProfile(evt) {
  evt.preventDefault();
  profileNameElement.textContent = formInputNameElement.value;
  profileSignatureElement.textContent = formInputSignatureElement.value;
  closePopup(popupElement);
};
// Функция (Лайк карточки)
function likeCard(evt) {
  evt.target.classList.toggle('element__heart_type_active');
}
// Функция (Удаление карточки)
function deleteCard(evt) {
  evt.target.closest('.element').remove();
}
// Функция (Закрытие и очистка попапа)
function cleanPopup() {
  closePopup(photoPopupElement);
  photoPopupImageElement.removeAttribute('src');
  photoPopupImageElement.removeAttribute('alt');
  photoPopupTitleElement.textContent = '';
}
//  Функция (Открытие попапа карточки)
function openPhoto (evt) {
  openPopup(photoPopupElement);
  photoPopupImageElement.setAttribute('src', evt.target.getAttribute('src'));
  photoPopupImageElement.setAttribute('alt', evt.target.getAttribute('alt'));
  photoPopupTitleElement.textContent = evt.target.getAttribute('alt');
  photoPopupCloseButtonElement.addEventListener('click', cleanPopup);
}
// Функция (Добавление исходных карточек на страницу)
initialCards.forEach((item) => {
  const newCardElement = cardElement.content.cloneNode(true);
  newCardElement.querySelector('.element__title').textContent = item.name;
  const newCardElementImage = newCardElement.querySelector('.element__image');
  newCardElementImage.setAttribute('src', item.link);
  newCardElementImage.setAttribute('alt', item.alt);
  newCardElementImage.addEventListener('click', openPhoto);
  newCardElement.querySelector('.element__heart').addEventListener('click', likeCard);
  newCardElement.querySelector('.element__delete-button').addEventListener('click', deleteCard);;
  addPopupCardsElement.append(newCardElement);
  });


// Обработчик события открытия попапа для редактирования профиля
profileEditButtonElement.addEventListener('click',() => {
  openPopup(popupElement);
  formInputNameElement.value = profileNameElement.textContent;
  formInputSignatureElement.value = profileSignatureElement.textContent;
});
// Обработчик события открытия попапа для добавления карточек
profileAddButtonElement.addEventListener('click',() => {
  openPopup(addPopupElement);
  addFormInputNameElemeent.value = '';
  addFormInputLinkElement.value = '';
});
// Обработчик события закрытия попапа для редактирования профиля
popupCloseButtonElement.addEventListener('click', () => { closePopup(popupElement); });
// Обработчик события закрытия попапа для добавления карточек
addPopupCloseButton.addEventListener('click', () => { closePopup(addPopupElement); });
// Обработчик события изменения профиля
formElement.addEventListener('submit', changeProfile);

// Обработчик события добавления новой карточки
addFormElement.addEventListener('submit',(evt) => {
  evt.preventDefault();
  initialCards.unshift({
    name: addFormInputNameElemeent.value,
    link: addFormInputLinkElement.value,
    alt: addFormInputNameElemeent.value
  });
  const newCardElement = cardElement.content.cloneNode(true);
  newCardElement.querySelector('.element__title').textContent = initialCards[0].name;
  const newCardElementImage = newCardElement.querySelector('.element__image');
  newCardElementImage.setAttribute('src', initialCards[0].link);
  newCardElementImage.setAttribute('alt', initialCards[0].alt);
  newCardElementImage.addEventListener('click', openPhoto);
  newCardElement.querySelector('.element__heart').addEventListener('click', likeCard);
  newCardElement.querySelector('.element__delete-button').addEventListener('click', deleteCard);
  addPopupCardsElement.prepend(newCardElement);
  closePopup(addPopupElement);
});

