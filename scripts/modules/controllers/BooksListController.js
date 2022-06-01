import { getIdsFromElemsArray } from '../utils/id.utils.js';
import BooksListView from '../views/BooksListView.js';
import BooksListStorageController from './BooksListStorageController.js';
import Book from '../models/Book.js';
import BooksList from '../models/BooksList.js';

export default class BooksListController {
  constructor(booksSectionId, initialBooks) {
    this.booksListStorageController = new BooksListStorageController();
    const booksStored = this.booksListStorageController.getBooksData();
    const books = booksStored.length > 0
      ? [
        ...initialBooks,
        ...booksStored.filter(
          ({ id }) => !getIdsFromElemsArray(initialBooks).includes(id),
        ),
      ]
      : initialBooks;
    this.booksListView = new BooksListView(books, this.removeBook);
    this.booksList = new BooksList(books);
    this.booksSectionId = booksSectionId;
  }

  buildBooksList = () => {
    this.booksListView.render(this.booksSectionId);
  };

  addBook = ({ title, author }) => {
    const newBook = new Book(title, author);
    this.booksListView.renderNewBook(newBook);
    this.booksList.push(newBook);
    this.booksListStorageController.storeBooksData(this.booksList.getBooks);
  };

  removeBook = (bookId) => {
    this.booksListView.removeBookFromScreen(bookId);
    this.booksList.remove(bookId);
    this.booksListStorageController.storeBooksData(this.booksList.getBooks);
  };
}
