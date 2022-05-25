import initialBooks from './data/books.data.js';
import BooksListController from './controllers/BooksListController.js';
import AddBookFormController from './controllers/AddBookFormController.js';

const BOOKS_SECTION_ID = 'books';

const booksListController = new BooksListController(BOOKS_SECTION_ID, initialBooks);
booksListController.buildBooksList();
const addBookFormController = new AddBookFormController(booksListController);
addBookFormController.init();
