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
  const bookDetails = document.createElement("span");
  const readBtn = document.createElement("button");
  readBtn.textContent = "Mark as read";
  const deleteBtn = document.createElement("button");
  deleteBtn.textContent = "Remove";

  bookDetails.textContent = title + " by " + author;
  newBook.appendChild(bookDetails);
  newBook.appendChild(readBtn);
  newBook.appendChild(deleteBtn);
  bookList.appendChild(newBook);

  titleInput.value = "";
  authorInput.value = "";

  readBtn.addEventListener("click", function () {
    newBook.classList.toggle("read");
    readBtn.textContent = "Unread";
  });

  deleteBtn.addEventListener("click", function (event) {
    newBook.remove();
  });
});
