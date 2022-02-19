class LibraryCollection {
  constructor(capacity) {
    this.capacity = Number(capacity);
    this.books = [];
  }

  addBook(bookName, bookAuthor) {
    if (this.books.length == this.capacity) {
      throw new Error("Not enough space in the collection.");
    }
    let book = {
      bookName,
      bookAuthor,
      payed: false,
    };
    this.books.push(book);
    return `The ${bookName}, with an author ${bookAuthor}, collect.`;
  }
  payBook(bookName) {
    let serchedBook = this.books.find((x) => x.bookName == bookName);
    if (serchedBook == undefined) {
      throw new Error(`${bookName} is not in the collection.`);
    }
    if (serchedBook.payed == true) {
      throw new Error(`${bookName} has already been paid.`);
    }
    serchedBook.payed = true;
    return `${bookName} has been successfully paid.`;
  }
  removeBook(bookName) {
    let serchedBook = this.books.find((x) => x.bookName == bookName);

    if (serchedBook == undefined) {
      throw new Error("The book, you're looking for, is not found.");
    }
    if (serchedBook.payed == false) {
      throw new Error(
        `${bookName} need to be paid before removing from the collection.`
      );
    }
    let serchedBookIndex = this.books.indexOf((x) => x.bookName == bookName);
    this.books.splice(serchedBookIndex, 1);
    return `${bookName} remove from the collection.`;
  }
  getStatistics(bookAuthor) {
    if (bookAuthor != undefined) {
      let serchedAuthor = this.books.find((x) => x.bookAuthor == bookAuthor);

      if (serchedAuthor == undefined) {
        throw new Error(`${bookAuthor} is not in the collection.`);
      }

      return `${serchedAuthor.bookName} == ${serchedAuthor.bookAuthor} - ${
        serchedAuthor.payed == true ? "Has Paid." : "Not Paid."
      }`;
    } else {
      let result = [];
      let emptySlots = this.capacity - this.books.length;
      result.push(`The book collection has ${emptySlots} empty spots left.`);
      let sorted = this.books.sort((a, b) =>
        a.bookName.localeCompare(b.bookName)
      );

      sorted.forEach((x) =>
        result.push(
          `${x.bookName} == ${x.bookAuthor} - ${
            x.payed == true ? "Has Paid." : "Not Paid."}`
        )
      );
      return result.join("\n");
    }
  }
}
const library = new LibraryCollection(5)
library.addBook('Don Quixote', 'Miguel de Cervantes');
library.payBook('Don Quixote');
library.addBook('In Search of Lost Time', 'Marcel Proust');
library.addBook('Ulysses', 'James Joyce');
console.log(library.getStatistics());

