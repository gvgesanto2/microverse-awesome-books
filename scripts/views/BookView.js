import createNodeElem from '../utils/createElem.utils.js';

const BOOK_BASE_ID = 'book';

export default class BookView {
  static BASE_ID = BOOK_BASE_ID;

  constructor(book, removeCallback) {
    this.id = `${BookView.BASE_ID}-${book.id}`;
    this.book = book;
    this.removeCallback = removeCallback;
  }

  createElem() {
    const { id, title, author } = this.book;
    const bookItem = document.createElement('li');
    bookItem.id = this.id;
    bookItem.innerHTML = `
      <h2>${title}</h2>
      <p>${author}</p>
    `;
    const removeBtn = createNodeElem({
      tag: 'button',
      text: 'Remove',
    });
    removeBtn.type = 'button';
    removeBtn.addEventListener('click', () => { this.removeCallback(id); });
    bookItem.appendChild(removeBtn);
    return bookItem;
  }

  render(parentElemId) {
    const parentElem = document.getElementById(parentElemId);
    const bookElem = this.createElem();
    parentElem.appendChild(bookElem);
  }
}
