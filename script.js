const titleInput = document.getElementById("book-title");
const authorInput = document.getElementById("book-author");
const bookForm = document.getElementById("book-form");

bookForm.addEventListener("submit", function (event) {
  event.preventDefault();

  const title = titleInput.value;
  const author = authorInput.value;

  console.log(title);
  console.log(author);
});
