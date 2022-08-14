let title = document.getElementById('title');
let author = document.getElementById('author');
let pages = document.getElementById('pages');
let status = document.getElementById('status');


let tbody = document.querySelector('.cells');
let newTD = document.createElement('td');
let newTR = document.createElement('tr');

//let newRow = tbody.append(newTR);

function Book(title, author, pages, status) {
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.status = status;
    this.info = info = () => {
        console.log(`${this.title} by ${this.author}, ${this.pages} pages, ${this.status} yet`);
    }
}



function addBookToLibrary(myLibrary, title, author, pages, status) {
    // if (title.value === '' || author.value === '') {
    //     return;
    // }
    // if (pages.value === typeof("")) {
    //     alert("Please enter a number for the pages field.");
    //     return;
    // }
    let newBook = new Book(title, author, pages, status);
    myLibrary.push(newBook);
    console.log(myLibrary);
}


function displayEachBook(myLibrary) {
    for (let i = 0; i < myLibrary.length; i++) {
        tbody.append(newTR);
        for (let j = 0; j < myLibrary.length; j++) {
            
            tbody.append(newTD)//.append(myLibrary[j].title);
            tbody.append(newTD)//.append(myLibrary[j].author);
            tbody.append(newTD)//.append(myLibrary[j].pages);
            
            // let newCell4 = newRow.append(newTD);
            // newCell4.innerText = myLibrary[j].pages;
            // let newCell5 = newRow.append(newTD);
            // newCell5.innerText = myLibrary[j].pages;
        }
    }
    
}

// const theHobbit = new Book('The Hobbit', 'J.R.R. Tolkien', '295', 'not read');
// myLibrary.push(theHobbit);


function main() {

    let myLibrary = [];




    
    addBookToLibrary(myLibrary, 'One more thing', 'some text', '522', 'read');
    addBookToLibrary(myLibrary, 'Something', 'different text', '321', 'read');
    addBookToLibrary(myLibrary, 'Another thing', 'some other text', '765', 'read');
    addBookToLibrary(myLibrary, 'One more thing', 'some text', '522', 'read');
    addBookToLibrary(myLibrary, 'Something', 'different text', '321', 'read');

    displayEachBook(myLibrary);

    
}

main()