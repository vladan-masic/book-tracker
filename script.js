const titleInput = document.getElementById("book-title");
const authorInput = document.getElementById("book-author");
const bookForm = document.getElementById("book-form");
const bookList = document.getElementById("book-list");

bookForm.addEventListener("submit", function (event) {
  event.preventDefault();

  const title = titleInput.value;
  const author = authorInput.value;

  const newBook = document.createElement("li");
  newBook.textContent = title + " " + author;
  bookList.appendChild(newBook);
});
