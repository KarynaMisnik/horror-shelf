const form = document.getElementById("add-movie-form");
const movieList = document.getElementById("movie-list");
const error = document.getElementById("error-message");

form.addEventListener("submit", function (e) {
  e.preventDefault(); // Prevent the form from submitting normally
  const titleInput = document.getElementById("title");
  const title = titleInput.value.trim(); // Get the value of the title input and trim whitespace
  const descriptionInput = document.getElementById("description");
  const description = descriptionInput.value;

  if (!title) {
    error.textContent = "Title cannot be empty";
    return;
  }

  error.textContent = ""; // Clear any previous error messages

  // Add movie
  const card = document.createElement("div");
  const title_p = document.createElement("p");
  const text_description = document.createElement("p");
  title_p.textContent = title;
  text_description.textContent = description;
  const editButton = document.createElement("button");
  editButton.textContent = "Edit";
  editButton.addEventListener("click", function () {});

  card.appendChild(title_p);
  card.appendChild(text_description);
  card.appendChild(editButton);
  movieList.appendChild(card);

  // Clear input
  titleInput.value = "";
  descriptionInput.value = "";
});
