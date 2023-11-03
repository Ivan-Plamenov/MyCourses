class LibraryCollection {
  constructor(capacity) {
    this.capacity = capacity;
    this.books = [];
  }

  addBook(bookName, bookAuthor) {
    if (this.books.length >= this.capacity) {
      throw new Error("Not enough space in the collection.");
    }

    this.books.push({
      bookName,
      bookAuthor,
      paid: false,
    });

    return `The ${bookName}, with an author ${bookAuthor}, collect.`;
  }

  payBook(bookName) {
    const book = this.books.find((b) => b.bookName === bookName);
    if (!book) {
      throw new Error(`${bookName} is not in the collection.`);
    }
    if (book.paid) {
      throw new Error(`${bookName} has already been paid.`);
    }

    book.paid = true;
    return `${bookName} has been successfully paid.`;
  }

  removeBook(bookName) {
    const bookIndex = this.books.findIndex((b) => b.bookName === bookName);
    if (bookIndex === -1) {
      throw new Error("The book, you're looking for, is not found.");
    }
    if (!this.books[bookIndex].paid) {
      throw new Error(
        `${bookName} need to be paid before removing from the collection.`
      );
    }

    this.books.splice(bookIndex, 1);
    return `${bookName} remove from the collection.`;
  }

  getStatistics(bookAuthor) {
    let resultBooks;

    if (bookAuthor) {
      resultBooks = this.books.filter((b) => b.bookAuthor === bookAuthor);
      if (resultBooks.length === 0) {
        throw new Error(`${bookAuthor} is not in the collection.`);
      }
    } else {
      resultBooks = [...this.books];
    }

    resultBooks.sort((a, b) => a.bookName.localeCompare(b.bookName));

    let result = [];
    if (!bookAuthor) {
      result.push(
        `The book collection has ${
          this.capacity - this.books.length
        } empty spots left.`
      );
    }
    resultBooks.forEach((b) => {
      result.push(
        `${b.bookName} == ${b.bookAuthor} - ${
          b.paid ? "Has Paid" : "Not Paid"
        }.`
      );
    });

    return result.join("\n");
  }
}
