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
    displayBooks();
}

function displayBooks() {
    const libraryDiv = document.getElementById('library');
    libraryDiv.innerHTML = '';

    myLibrary.forEach(
        (book, index) => {
            const card = document.createElement('div');
            card.className = 'card';
            card.innerHTML = `
            <h2>${book.title} by <i>${book.author}</i></h2>
            <p>${book.page} Pages</p>
            <p>Released in ${book.Year}</p>
            <p>Read? <strong>${book.isRead ? 'Yes' : 'No'}</strong></p>
            <button onclick="toggleRead(${index})">Toggle Read</button>
            <button onclick="removeBook(${index})">Remove</button>
            `;
            libraryDiv.appendChild(card);
        }
    );
}

function removeBook(index) {
    myLibrary.splice(index, 1);
    displayBooks();
}

const bookShelf = document.querySelector('.bookShelf')

bookShelf.addEventListener('submit', (e) => {
    e.preventDefault();
    const title = document.getElementById('title').value;
    const author = document.getElementById('author').value;
    const pages = document.getElementById('page').value;
    const year = document.getElementById('Year').value;
    const isRead = document.getElementById('isRead').value;

    const newBook = createBook(title, author, pages, isRead, year);
    addBookToLibrary(newBook);
});