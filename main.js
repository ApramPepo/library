let myLibrary = [];

function book(title, author, page, isRead, Year) {
    this.title = title;
    this.author = author;
    this.page = page;
    this.isRead = isRead;
    this.Year = Year;
}

function createBook(title, author, page, isRead, Year) {
    return {
        title,
        author,
        page,
        isRead,
        Year
    };
}


function addBookToLibrary(book) {
    myLibrary.push(book);
}

function displayBooks() {
    myLibrary.forEach(
        (book, index) => {
            const card = document.createElement('div');
            card.textContent = `${book.title} by ${book.author}, ${book.page}, ${book.Year}, Read: ${book.isRead}`;
            document.body.appendChild(card);
        }
    );
}