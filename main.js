const form = document.getElementById("add-movie-form");
const movieList = document.getElementById("movie-list");

const apiKey = "f140947a704ad11a7204ba8cd7537d40";
const baseUrl = "https://api.themoviedb.org/3";

// Helper: fetch movie data from TMDb
async function fetchMovieData(title) {
  const url = `${baseUrl}/search/movie?api_key=${apiKey}&query=${encodeURIComponent(
    title
  )}`;
  const response = await fetch(url);
  const data = await response.json();
  return data.results[0]; // may be undefined
}

// Function: make a card editable
function makeEditable(card, title_p, img, editButton) {
  editButton.textContent = "Save";

  const input = document.createElement("input");
  input.value = title_p.textContent;

  card.replaceChild(input, title_p);

  editButton.onclick = async () => {
    const newTitle = input.value.trim();
    if (!newTitle) {
      alert("Title cannot be empty");
      return;
    }

    const movie = await fetchMovieData(newTitle);

    // Update title
    title_p.textContent = movie ? movie.title : newTitle;
    card.replaceChild(title_p, input);

    // Update poster
    if (movie && movie.poster_path) {
      img.src = `https://image.tmdb.org/t/p/w200${movie.poster_path}`;
      img.alt = movie.title + " poster";
    } else {
      img.src = "";
      img.alt = "No poster available";
    }

    editButton.textContent = "Edit";
    editButton.onclick = () => makeEditable(card, title_p, img, editButton);
  };
}

// Add movie on submit
form.addEventListener("submit", async function (e) {
  e.preventDefault();

  const titleInput = document.getElementById("title");
  const title = titleInput.value.trim();

  if (!title) {
    alert("Please enter a movie title.");
    return;
  }

  const movie = await fetchMovieData(title);

  const card = document.createElement("div");
  card.style.border = "1px solid #ccc";
  card.style.padding = "10px";
  card.style.margin = "10px";
  card.style.width = "200px";

  // Poster image
  const img = document.createElement("img");
  if (movie && movie.poster_path) {
    img.src = `https://image.tmdb.org/t/p/w200${movie.poster_path}`;
    img.alt = movie.title + " poster";
  } else {
    img.alt = "No poster available";
  }
  card.appendChild(img);

  // Title
  const title_p = document.createElement("p");
  title_p.textContent = movie ? movie.title : title;
  card.appendChild(title_p);

  // Edit button
  const editButton = document.createElement("button");
  editButton.textContent = "Edit";
  editButton.onclick = () => makeEditable(card, title_p, img, editButton);
  card.appendChild(editButton);

  // Delete button
  const deleteButton = document.createElement("button");
  deleteButton.textContent = "Delete";
  deleteButton.onclick = () => {
    if (confirm("Are you sure you want to delete this movie?")) {
      card.remove();
    }
  };
  card.appendChild(deleteButton);

  movieList.appendChild(card);

  // Clear input
  titleInput.value = "";
});
