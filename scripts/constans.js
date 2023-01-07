// Переменные (Открытие/Закрытие попапа для редактирование профиля)
const profileEditButtonElement = document.querySelector('.profile__edit-button');
const profileNameElement = document.querySelector('.profile__name');
const profileSignatureElement = document.querySelector('.profile__signature');
const editPopupElement = document.querySelector('.popup_type_edit');
const popupCloseButtonsElement = document.querySelectorAll('.popup__close-button');
const editFormElement = editPopupElement.querySelector('.form');
const formInputNameElement = editFormElement.querySelector('.form__input_type_name');
const formInputSignatureElement = editFormElement.querySelector('.form__input_type_signature');
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
// Массив (Данные для выключения кнопки)
const disableButtonConfig = {
  formSelector: '.form',
  saveButtonSelector: '.form__save-button',
}

export{initialCards, validationConfig, templateSelector, profileEditButtonElement, profileNameElement, profileSignatureElement, popupCloseButtonsElement, editFormElement, formInputNameElement, formInputSignatureElement, addPopupElement, popupList, addPopupCardsElement, addFormElement, addFormInputNameElemeent, addFormInputLinkElement, profileAddButtonElement, photoPopupElement, photoPopupImageElement, photoPopupTitleElement, editPopupElement, disableButtonConfig, formListElement};
