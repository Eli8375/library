let myLibrary = [];

function Book(title, author, pages, read) {
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.read = read;
    this.info = info = () => {
        console.log(`${this.title} by ${this.author}, ${this.pages} pages, ${read} yet`);
    }
}

function promptUserForBook() {

}

function addBookToLibrary(myLibrary, ) {
    let bookTitle = alert("Enter book title");
}

function displayEachBook() {
    for (let i = 0; i < myLibrary.length; i++) {
        
    }
}

const theHobbit = new Book('The Hobbit', 'J.R.R. Tolkien', '295', 'not read');
theHobbit.info();