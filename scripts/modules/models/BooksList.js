export default class BooksList {
  constructor(initialBooks) {
    this.books = initialBooks || [];
  }

  get getBooks() {
    return this.books;
  }

  push(newBook) {
    this.books.push(newBook);
  }

  remove(bookId) {
    this.books = this.books.filter((book) => book.id !== bookId);
  }
}
