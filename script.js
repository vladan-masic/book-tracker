const bookForm = document.getElementById("book-form");

bookForm.addEventListener("submit", function (event) {
  event.preventDefault();
  console.log("Form submitted");
});
