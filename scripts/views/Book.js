import createElem from '../utils/createElem.utils.js';

export default class BookView{
    constructor(book, removeCallback){
        this.book = book;
        this.removeCallback = removeCallback;
    }

createElem() {
    const { id, title, author } = this.book;
    const bookItem = document.createElement('li');
    bookItem.id = `${BOOK_BASE_ID}-${id}`;
    bookItem.innerHTML = `
      <h2>${title}</h2>
      <p>${author}</p>
    `;
    const removeBtn = createElem({
      tag: 'button',
      text: 'Remove',
    });
    removeBtn.type = 'button';
    removeBtn.addEventListener('click', () => { this.removeBookCallback(id); });
    bookItem.appendChild(removeBtn);
    return bookItem;
  }
}



