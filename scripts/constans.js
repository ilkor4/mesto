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
const validationConfig = {
  formSelector: '.form',
  inputSelector: '.form__input',
  submitButtonSelector: '.form__save-button',
  inactiveButtonClass: 'form__save-button_disabled',
  inputErrorClass: 'form__input_type_error',
  errorClass: 'form__input-error_active'
}
