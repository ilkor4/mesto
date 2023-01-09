// Переменные (Открытие/Закрытие попапа для редактирование профиля)
const buttonEditProfile = document.querySelector('.profile__edit-button');
const nameProfileElement = document.querySelector('.profile__name');
const signatureProfileElement = document.querySelector('.profile__signature');
const popupEditElement = document.querySelector('.popup_type_edit');
const buttonsCloseElement = document.querySelectorAll('.popup__close-button');
const formEditElement = popupEditElement.querySelector('.form');
const inputNameEditPopup = popupEditElement.querySelector('.form__input_type_name');
const inputSignatureElement = popupEditElement.querySelector('.form__input_type_signature');
// Переменные (Открытие/Закрытие попапа для добавления карточек)
const popupAddElement = document.querySelector('.popup_type_add');
const popupListElement = Array.from(document.querySelectorAll('.popup'));
const cardsAddPopup = document.querySelector('.elements');
const formAddElement = popupAddElement.querySelector('.form');
const inputNameAddPopup = formAddElement.querySelector('.form__input_type_name');
const inputLinkElement = formAddElement.querySelector('.form__input_type_link');
const buttonAddProfile = document.querySelector('.profile__add-button');
// Переменные (Открытие/Закрытие попапа для просмотра фото)
const photoPopupElement = document.querySelector('.popup_type_photo');
const imagePhoptoPopupElement = photoPopupElement.querySelector('.popup__image');
const titlePhotoPopupElement = photoPopupElement.querySelector('.popup__title');
// Переменная (Выбор темплэйта)
const templateSelector = document.querySelector('#card');
// Переменная (Псевдомассив форм)
const formListElement = document.querySelectorAll('.form')
// Массив (Исходные карточки)
const initialCards = [
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
// Массив (Данные для валидации)
const validationConfig = {
  inputSelector: '.form__input',
  submitButtonSelector: '.form__save-button',
  inactiveButtonClass: 'form__save-button_disabled',
  inputErrorClass: 'form__input_type_error',
  errorClass: 'form__input-error_active'
}
export{ initialCards, validationConfig, templateSelector, formListElement, buttonEditProfile, nameProfileElement, signatureProfileElement, popupEditElement, buttonsCloseElement, formEditElement, inputNameEditPopup, inputSignatureElement, popupAddElement, popupListElement, cardsAddPopup, formAddElement, inputNameAddPopup, inputLinkElement, buttonAddProfile, photoPopupElement, imagePhoptoPopupElement, titlePhotoPopupElement }
