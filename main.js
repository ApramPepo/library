let myLibrary = [];

function Book(title, author, page, isRead, Year) {
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