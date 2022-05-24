/* eslint-disable no-unused-vars */
import BookView from './Book.js';

const BOOKS_LIST_ID = 'books-list';
const BOOK_BASE_ID = 'book';

export default class BooksListView{
  constructor(booksSectionId, books, removeBookCallback){
    this.booksSectionElem = document.getElementById(booksSectionId);
    this.books = books;
    this.removeBookCallback = removeBookCallback;
    }
  render() {
      const booksListElem = document.createElement('ul');
      booksListElem.id = BOOKS_LIST_ID;
      this.books.forEach((book) => {
        const bookView = new BookView(book, this.removeBookCallback);
        const bookElem = bookView.createElem();
        booksListElem.appendChild(bookElem);
      });
      this.booksSectionElem.appendChild(booksListElem);
    }
    addBook(newBook) {
      const bookView = new BookView(newBook, this.removeBookCallback);
      const newBookElem = bookView.createElem();
      const booksListElem = document.getElementById(BOOKS_LIST_ID);
    
      booksListElem.appendChild(newBookElem);
    }
    
    removeBookById(bookId) {
      const bookElem = document.getElementById(`${BOOK_BASE_ID}-${bookId}`);
      bookElem.remove();
    }
}


