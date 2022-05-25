const ADD_BOOK_FORM_ID = 'add-book-form';

export default class AddBookFormViewManager {
  static ID = ADD_BOOK_FORM_ID;

  constructor() {
    this.form = document.getElementById(AddBookFormViewManager.ID);
  }

  addEventHandler(callback) {
    this.form.addEventListener('submit', callback);
  }

  getInputTitleValue() {
    return this.form.elements.title.value;
  }

  getInputAuthorValue() {
    return this.form.elements.author.value;
  }
}
