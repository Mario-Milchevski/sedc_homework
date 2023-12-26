const titleInput = document.getElementById('titleInput');
const authorInput = document.getElementById('authorInput');
let container = document.getElementById('container');


const books = [
    { title: 'Mockingjay', author: 'Suzanne', readingStatus: true },
    { title: 'The Robots', author: 'Isac', readingStatus: false },
    { title: 'To kill a mockingbird', author: 'Harper Lee', readingStatus: false },
    { title: 'The Great Gatsby', author: 'Scott Fitzgerald', readingStatus: false },
    { title: 'The Bible', author: '40 authors', readingStatus: false },
];



class Book {
    constructor(title, author, readingStatus) {
        this.title = title;
        this.author = author;
        this.readingStatus = readingStatus;

    }
    returnInfo(readingStatus) {
        if (!readingStatus) {
            return (`Already read ${this.title} by ${this.author}`);
        } else {
            return (`You still need to read ${this.title} by ${this.author}`)
        };

    }
}

let button = document.getElementById('btn');

function handleEnterKey(event) {
    // If the user presses the "Enter" key on the keyboard
    if (event.key === "Enter") {
        event.preventDefault();
        button.click(); // Trigger the click event on the button
    }
}
// Add the event listener to both titleInput and authorInput
titleInput.addEventListener("keypress", handleEnterKey);
authorInput.addEventListener("keypress", handleEnterKey);


button.addEventListener('click', function () {

    const titleValue = titleInput.value.toLowerCase();
    const authorValue = authorInput.value.toLowerCase();

    const foundBook = books.find(book => book.title.toLowerCase() === titleValue || book.author.toLowerCase() === authorValue);


        // Print book information to the console
        if (foundBook) {
            // update container innerHTML with book information
            container.innerHTML = foundBook.readingStatus
                ? `We found the book in the libary.<br>Already read <b>${foundBook.title}</b> by <b>${foundBook.author}</b>`
                : `We found the book in the libary.<br> You still need to read <b>${foundBook.title}</b> by <b>${foundBook.author}</b>`;
        } else {
            container.innerHTML = 'Book not found in the library.';

    const newBook = new Book(titleValue, authorValue, false);
};
});


