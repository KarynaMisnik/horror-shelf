const form = document.getElementById("add-movie-form");
const movieList = document.getElementById("movie-list");
const error = document.getElementById("error-message");

form.addEventListener("submit", function (e) {
  e.preventDefault(); // Prevent the form from submitting normally
  const titleInput = document.getElementById("title");
  const title = titleInput.ariaValueMax.trim(); // Get the value of the title input and trim whitespace

  if (!title) {
    error.textContent = "Title cannot be empty";
    return;
  }

  error.textContent = ""; // Clear any previous error messages
});
