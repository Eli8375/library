import {Database} from './database.js';


function main() {
    let database = new Database();
    let buttons = document.querySelectorAll("button");
    for (let i = 0; i < buttons.length; i++) {
        buttons[i].addEventListener("click", () => {
            if (i == 0) {
                if (title.value != "" && author.value != "" && pages.value != "") {
                    database.insert(title.value, author.value, pages.value, update.value);
                    database.show();
                    console.log(database.library);
                }
            }
        })
    }

    document.addEventListener("click", (event) => {
        let deleteButton = event.target;
        if (deleteButton.classList.contains("delete")) {
            database.delete(deleteButton.getAttribute("data-index"));
            database.show();
            console.log(database.library);
        }
    })
}
main();