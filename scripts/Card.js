// Класс объекта карточки
class Card {
  constructor(data, templateSelector, openPhotoFunction) {
    this._title = data.name;
    this._imageLink = data.link;
    this._imageAlt = data.alt;
    this._templateSelector = templateSelector;
    this._openPhoto = openPhotoFunction;
  }
// Получить темплэйт
  _getTemplate() {
    const cardElement = document.querySelector(`#${this._templateSelector.id}`).content.children[0].cloneNode(true);

    return cardElement;
  }
  // Создать карточку
  generateCard() {
    this._element = this._getTemplate();

    this._setEventListeners();

    this._element.querySelector('.element__title').textContent = this._title;


    const imageElement = this._element.querySelector('.element__image');

    imageElement.setAttribute('src', this._imageLink);
    imageElement.setAttribute('alt', this._imageAlt);

    return this._element;
  }
  // Навесить слушатели
  _setEventListeners() {
    this._element.querySelector('.element__heart').addEventListener('click', () => this._likeCard());
    this._element.querySelector('.element__delete-button').addEventListener('click', () => this._deleteCard());
    this._element.querySelector('.element__image').addEventListener('click', this._openPhoto);
  }
  // Лайкнуть карточку
  _likeCard() {
    this._element.querySelector('.element__heart').classList.toggle('element__heart_type_active');
  }
  // Удалить карточку
  _deleteCard() {
    this._element.remove();
    this._element = null;
  }
}
 export { Card };
