// Открытие/Закрытие попапа и редактирование профиля
let editButton = document.querySelector('.profile__edit-button');
let profileName = document.querySelector('.profile__name');
let profileSignature = document.querySelector('.profile__signature');
let formElement = document.querySelector('.popup');
let closeButton = formElement.querySelector('.popup__close-button');
let formContainer = document.querySelector('.form');
let inputName = formContainer.querySelector('.form__input_type_name')
let inputSignature = formContainer.querySelector('.form__input_type_signature');

function openPopup () { // Функция открытия попапа
  formElement.classList.add('popup_opened');
  inputName.value = profileName.textContent;
  inputSignature.value = profileSignature.textContent;
};

function closePopup () { // Функция закрытия попапа
  formElement.classList.remove('popup_opened');
};

function changeProfile(evt) { // Функция редактирования профиля
  evt.preventDefault();
  profileName.textContent = inputName.value;
  profileSignature.textContent = inputSignature.value;
  closePopup ();
};

editButton.addEventListener('click', openPopup);
closeButton.addEventListener('click', closePopup);
formContainer.addEventListener('submit', changeProfile);
