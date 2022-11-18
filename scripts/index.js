// Открытие/Закрытие попапа
let editButton = document.querySelector('.profile__edit-button');
let formElement = document.querySelector('.popup');
let closeButton = formElement.querySelector('.popup__close-button');
let inputName = formElement.querySelector('.popup__input-name')
let profileName = document.querySelector('.profile__name');
let inputSignature = formElement.querySelector('.popup__input-signature');
let profileSignature = document.querySelector('.profile__signature');

function openPopup () { // Функция открытия попапа
  formElement.classList.add('popup_opened');
  inputName.value = profileName.textContent;
  inputSignature.value = profileSignature.textContent;
};

function closePopup () { // Функция закрытия попапа
  formElement.classList.remove('popup_opened');
};

editButton.addEventListener('click', openPopup);
closeButton.addEventListener('click', closePopup);

// Редактирование профиля
let formContainer = formElement.querySelector('.popup__container');

function changeProfile(evt) { // Функция редактирования профиля
  evt.preventDefault();
  profileName.textContent = inputName.value;
  profileSignature.textContent = inputSignature.value;
  closePopup ();
};

formContainer.addEventListener('submit', changeProfile);
