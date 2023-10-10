"use strict";
const library = {
    books: [],
    addBook(book) {
        this.books.push(book);
        console.log(`${book.title} by ${book.author} has been added to the library.`);
    },
    removeBook(isbn) {
        const index = this.books.findIndex((book) => book.isbn === isbn);
        if (index !== -1) {
            const removedBook = this.books.splice(index, 1)[0];
            console.log(`${removedBook.title} by ${removedBook.author} has been removed from the library.`);
        }
        else {
            console.log(`Book with ISBN ${isbn} is not found in the library.`);
        }
    },
    checkoutBook(isbn) {
        const book = this.books.find((book) => book.isbn === isbn);
        if (book) {
            if (book.available) {
                book.available = false;
                console.log(`${book.title} has been checked out.`);
            }
            else {
                console.log(`${book.title} is already checked out.`);
            }
        }
        else {
            console.log(`Book with ISBN ${isbn} is not found in the library.`);
        }
    },
    returnBook(isbn) {
        const book = this.books.find((book) => book.isbn === isbn);
        if (book) {
            if (!book.available) {
                book.available = true;
                console.log(`${book.title} has been returned.`);
            }
            else {
                console.log(`${book.title} is already available in the library.`);
            }
        }
        else {
            console.log(`Book with ISBN ${isbn} is not found in the library.`);
        }
    },
    listBooks() {
        if (this.books.length === 0) {
            console.log("The library is empty.");
        }
        else {
            console.log("Books in the library:");
            this.books.forEach((book) => {
                console.log(`${book.title} by ${book.author} (ISBN: ${book.isbn}) - ${book.available ? "Available" : "Checked Out"}`);
            });
        }
    },
};
library.addBook({
    title: "The Hobbit",
    author: "J.R.R. Tolkien",
    isbn: "9780547928227",
    available: false,
});
library.addBook({
    title: "Harry Potter and the Philosopher's Stone",
    author: "J.K. Rowling",
    isbn: "9780747532743",
    available: false,
});
library.addBook({
    title: "The Hunger Games",
    author: "Suzanne Collins",
    isbn: "9780439023481",
    available: true,
});
library.addBook({
    title: "percy jackson and the lightning thief",
    author: "Rick Riordan",
    isbn: "9780786838653",
    available: true,
});
library.listBooks();
library.checkoutBook("9780547928227");
library.checkoutBook("9780439023481");
library.returnBook("9780547928227");
library.listBooks();
