const titleInput = document.getElementById("book-title");
const authorInput = document.getElementById("book-author");
const bookForm = document.getElementById("book-form");
const bookList = document.getElementById("book-list");

let books = [];
const storedBooks = JSON.parse(localStorage.getItem("books"));

if (storedBooks) {
  books = storedBooks;
}

function renderBook(book) {
  const newBook = document.createElement("li");
  const bookDetails = document.createElement("span");
  const actions = document.createElement("div");
  actions.classList.add("book-actions");

  const readBtn = document.createElement("button");
  readBtn.classList.add("read-btn");
  readBtn.textContent = book.read ? "Mark as unread" : "Mark as read";

  const deleteBtn = document.createElement("button");
  deleteBtn.classList.add("delete-btn");
  deleteBtn.textContent = "Remove";

  bookDetails.textContent = book.title + " by " + book.author;

  if (book.read) {
    newBook.classList.add("read");
  }

  actions.appendChild(readBtn);
  actions.appendChild(deleteBtn);
  newBook.appendChild(bookDetails);
  newBook.appendChild(actions);
  bookList.appendChild(newBook);

  readBtn.addEventListener("click", function () {
    book.read = !book.read;
    saveBooks();
    renderBooks();
  });

  deleteBtn.addEventListener("click", function (event) {
    books = books.filter(function (currentBook) {
      return currentBook.id !== book.id;
    });
    renderBooks();
    saveBooks();
  });
}

function renderBooks() {
  bookList.innerHTML = "";
  books.forEach(renderBook);
}

function saveBooks() {
  localStorage.setItem("books", JSON.stringify(books));
}

renderBooks();

bookForm.addEventListener("submit", function (event) {
  event.preventDefault();

  const title = titleInput.value.trim();
  const author = authorInput.value.trim();

  if (title === "" || author === "") {
    return;
  }

  const book = {
    id: Date.now(),
    title: title,
    author: author,
    read: false,
  };

  books.push(book);
  saveBooks();

  renderBooks();

  titleInput.value = "";
  authorInput.value = "";
});
