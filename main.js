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
  const title_p = document.createElement("p"); // Create a <p> element for the title
  const text_description = document.createElement("p");
  title_p.textContent = title; // .textContent puts your movie title into that <p>
  text_description.textContent = description;
  const editButton = document.createElement("button");
  editButton.textContent = "Edit";
  const deleteButton = document.createElement("button");
  deleteButton.textContent = "Delete";
  editButton.addEventListener("click", function () {
    if (editButton.textContent === "Edit") {
      // Switch to edit mode: replace <p> with <input>
      const title_p = card.querySelector("p");
      const desc_p = card.querySelectorAll("p")[1];

      const titleInput = document.createElement("input");
      titleInput.value = title_p.textContent;

      const descInput = document.createElement("input");
      descInput.value = desc_p.textContent;

      card.replaceChild(titleInput, title_p);
      card.replaceChild(descInput, desc_p);

      editButton.textContent = "Save";
    } else {
      // Save mode: replace <input> with <p>
      const titleInput = card.querySelector("input");
      const descInput = card.querySelectorAll("input")[1];

      const newTitle_p = document.createElement("p");
      newTitle_p.textContent = titleInput.value;

      const newDesc_p = document.createElement("p");
      newDesc_p.textContent = descInput.value;

      card.replaceChild(newTitle_p, titleInput);
      card.replaceChild(newDesc_p, descInput);

      editButton.textContent = "Edit";
    }
  });

  deleteButton.addEventListener("click", function () {});

  card.appendChild(title_p);
  card.appendChild(text_description);
  card.appendChild(editButton);
  card.appendChild(deleteButton);
  movieList.appendChild(card);

  // Clear input
  titleInput.value = "";
  descriptionInput.value = "";
});
