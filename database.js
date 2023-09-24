import {Book} from './book.js';

export class Database {
    insert(title, author, pages, update) {
        let newBook = new Book(title, author, pages, update);
        this.library.push(newBook);
        // this.displaySubmission(title, author, pages, update);
    }
    delete(index) {
        this.library.splice(index, 1);
    }
    isEmpty() {
        if (this.library.length == 0) return true;
    }
    getSubmitButton() {
        return this.submitButton;
    }
    getDeleteButtons() {
        return this.dt;
    }
    /* displaySubmission(title, author, pages, update) {
        let newRow = this.tableRef.insertRow(0);
        newRow.insertCell().append(title);
        newRow.insertCell().append(author);
        newRow.insertCell().append(pages);
        newRow.insertCell().append(update);
        
        let deleteButton = document.createElement("button");
        deleteButton.classList.add("delete");
        deleteButton.innerText = "delete";

        newRow.insertCell().append(deleteButton);
        deleteButton.setAttribute("id", "delete");
        deleteButton.setAttribute("data-index", this.library.length - 1);
        this.deleteButtons.push(deleteButton);
    }
 */
    show() {
        let rows = document.querySelectorAll("tr.rows");
        if (rows.length != 0) {
            for (let i = 0; i < rows.length; i++) {
                rows[i].remove();
                this.deleteArray.splice(0, rows.length);
            }
        }
        for (let i = 0; i < this.library.length; i++) {
            let newRow = this.tableRef.insertRow(0);
            newRow.insertCell().append(this.library[i].title);
            newRow.insertCell().append(this.library[i].author);
            newRow.insertCell().append(this.library[i].pages);
            newRow.insertCell().append(this.library[i].update);
            newRow.setAttribute("class", "rows");
            let deleteButton = document.createElement("button");
            deleteButton.classList.add("delete");
            deleteButton.innerText = "delete";

            newRow.insertCell().append(deleteButton);
            deleteButton.setAttribute("id", "delete");
            deleteButton.setAttribute("data-index", i);
            this.deleteArray.push(deleteButton);
        }
        this.dt = document.querySelectorAll("#delete");
    }
    title = document.getElementById('title');
    author = document.getElementById('author');
    pages = document.getElementById('pages');
    update = document.getElementById('update');
    submitButton = document.getElementById('submit-button');
    tableRef = document.getElementById('cells');
    library = [];
    deleteArray = [];
    dt;
}
