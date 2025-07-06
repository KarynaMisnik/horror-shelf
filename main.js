const form = document.getElementById("add-movie-form");
const movieList = document.getElementById("movie-list");

const apiKey = "f140947a704ad11a7204ba8cd7537d40"; // 🔑 Replace this with your TMDb API key
const baseUrl = "https://api.themoviedb.org/3";

async function fetchMovieData(title) {
  const url = `${baseUrl}/search/movie?api_key=${apiKey}&query=${encodeURIComponent(
    title
  )}`;
  const response = await fetch(url);
  const data = await response.json();
  return data.results[0]; // get first result or undefined
}

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

  // Add poster if found
  if (movie && movie.poster_path) {
    const img = document.createElement("img");
    img.src = `https://image.tmdb.org/t/p/w200${movie.poster_path}`;
    img.alt = movie.title + " poster";
    card.appendChild(img);
  } else {
    const placeholder = document.createElement("div");
    placeholder.textContent = "No poster available";
    card.appendChild(placeholder);
  }

  // Title
  const title_p = document.createElement("p");
  title_p.textContent = movie ? movie.title : title;
  card.appendChild(title_p);

  // Edit button
  const editButton = document.createElement("button");
  editButton.textContent = "Edit";
  editButton.addEventListener("click", () => {
    const input = document.createElement("input");
    input.value = title_p.textContent;

    card.replaceChild(input, title_p);

    editButton.textContent = "Save";
    editButton.onclick = () => {
      title_p.textContent = input.value;
      card.replaceChild(title_p, input);
      editButton.textContent = "Edit";
    };
  });
  card.appendChild(editButton);

  // Delete button
  const deleteButton = document.createElement("button");
  deleteButton.textContent = "Delete";
  deleteButton.addEventListener("click", () => {
    if (confirm("Are you sure you want to delete this movie?")) {
      card.remove();
    }
  });
  card.appendChild(deleteButton);

  movieList.appendChild(card);

  // Clear input
  titleInput.value = "";
});
