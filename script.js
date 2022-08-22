function Book(title, author, pages, status) {
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.status = status;
}

function createDeleteButton() {
    let deleteButton = document.createElement("button");
    deleteButton.classList.add("delete");
    deleteButton.innerText = "delete";
    return deleteButton;
}

function addBookToLibrary(myLibrary, title, author, pages, status) {
    let newBook = new Book(title, author, pages, status);
    myLibrary.push(newBook);
    console.log(myLibrary);
}

function removeBookFromLibrary(myLibrary, deleteButton) {
    // let index = deleteButton.dataset.index;
    // myLibrary.slice(index, 1);
}

function displayEachBook(myLibrary, tableID) {
    let tableRef = document.getElementById(tableID);
    for (let i = myLibrary.length - 1; i < myLibrary.length; i++) {
        let newRow = tableRef.insertRow(0);
        let newCell = newRow.insertCell(0);
        newCell.append(myLibrary[i].title);
        let newCell2 = newRow.insertCell(1);
        newCell2.append(myLibrary[i].author);
        let newCell3 = newRow.insertCell(2);
        newCell3.append(myLibrary[i].pages);
        let newCell4 = newRow.insertCell(3);
        newCell4.append(myLibrary[i].status);
        deleteButton = createDeleteButton();
        let newCell5 = newRow.insertCell(4);
        newCell5.append(deleteButton);
        deleteButton.setAttribute("data-index", i);
    }
}

function displayEachBookAfterRemove(myLibrary, tableID) {
    let tableRef = document.getElementById(tableID);
    for (let i = 0; i < myLibrary.length; i++) {
        let newRow = tableRef.insertRow(0);
        let newCell = newRow.insertCell(0);
        newCell.append(myLibrary[i].title);
        let newCell2 = newRow.insertCell(1);
        newCell2.append(myLibrary[i].author);
        let newCell3 = newRow.insertCell(2);
        newCell3.append(myLibrary[i].pages);
        let newCell4 = newRow.insertCell(3);
        newCell4.append(myLibrary[i].status);
        deleteButton = createDeleteButton();
        let newCell5 = newRow.insertCell(4);
        newCell5.append(deleteButton);
        deleteButton.setAttribute("data-index", i);
    }
}

function main() {
    let title = document.getElementById('title');
    let author = document.getElementById('author');
    let pages = document.getElementById('pages');
    let status = document.getElementById('status');
    let submitButton = document.getElementById('submit-button');


    let myLibrary = [];

    addBookToLibrary(myLibrary, "Test Title1", "Test Author", "Test Pages", "Test Status");
    displayEachBook(myLibrary, 'cells');
    addBookToLibrary(myLibrary, "Test Title2", "Test Author", "Test Pages", "Test Status");
    displayEachBook(myLibrary, 'cells');
    addBookToLibrary(myLibrary, "Test Title3", "Test Author", "Test Pages", "Test Status");
    displayEachBook(myLibrary, 'cells');
    addBookToLibrary(myLibrary, "Test Title4", "Test Author", "Test Pages", "Test Status");
    displayEachBook(myLibrary, 'cells');

    
    let deleteButtons = document.querySelectorAll('button.delete');

    console.log(deleteButtons);

    submitButton.addEventListener("click", () => {
        if (title.value !== "" && author.value !== "" && pages.value !== "") {
            addBookToLibrary(myLibrary, title.value, author.value, pages.value, status.value);
            displayEachBook(myLibrary, 'cells')
        }
    })


    for (i = 0; i < deleteButtons.length; i++) {
        console.log(deleteButtons[i]);
        deleteButtons[i].addEventListener("click", () => {
            index = deleteButtons[i].dataset.index;
            console.log('working');
            //myLibrary.slice(0, 1);
            console.log(myLibrary);
            //removeBookFromLibrary(myLibrary, deleteButtons[i]);
            //for (i = 0; i < myLibrary.length; i++) {

            //}
            //displayEachBookAfterRemove(myLibrary, 'cells');
        })
    }
    

    

}

main();

/*
remove algo
user will click delete button (associate the dom element to the array index)
this will search the array for the location where the user clicked
it will utilize pop to remove the array element
it will refresh the page to display the current array to the user
that specific array element must have been removed and the other elements moved down in lieu
*/