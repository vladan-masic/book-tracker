const titleInput = document.getElementById("book-title");
const authorInput = document.getElementById("book-author");
const bookForm = document.getElementById("book-form");
const bookList = document.getElementById("book-list");

bookForm.addEventListener("submit", function (event) {
  event.preventDefault();

  const title = titleInput.value.trim();
  const author = authorInput.value.trim();

  if (title === "" || author === "") {
    return;
  }

  const newBook = document.createElement("li");
  const deleteBtn = document.createElement("button");
  deleteBtn.textContent = "Remove";

  newBook.textContent = title + " by " + author;
  newBook.appendChild(deleteBtn);
  bookList.appendChild(newBook);

  titleInput.value = "";
  authorInput.value = "";

  deleteBtn.addEventListener("click", function (event) {
    newBook.removeChild();
  });
});
