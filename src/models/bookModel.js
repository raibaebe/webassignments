
let books = [];

module.exports = {
  getBooks: () => books,
  addBook: (book) => {
    books.push(book);
    return book;
  },
  updateBook: (id, updatedBook) => {
    const index = books.findIndex(book => book.id === id);
    if (index !== -1) {
      books[index] = { ...books[index], ...updatedBook };
      return books[index];
    }
    return null;
  },
  deleteBook: (id) => {
    const index = books.findIndex(book => book.id === id);
    if (index !== -1) {
      const deletedBook = books.splice(index, 1);
      return deletedBook[0];
    }
    return null;
  }
};