// const showsList = document.querySelector(".js-showsList");

let arrayData = [];
let favoriteShows = [];

// Traigo el API de series
function getShows() {
  fetch("http://api.tvmaze.com/shows")
    .then((response) => response.json())
    .then((data) => {
      arrayData = data;
      // Guardo en localStorage el API de series
      localStorage.setItem("shows", JSON.stringify(generalData));
    });
}

// Cuando cargo la página web =
if (localStorage.getItem("shows") === null) {
  // Si no está el API en localStorage
  // Ejecuto la función que a través de fetch que pide API de series y lo pinto
  getShows();
  renderShows(arrayData);
} else {
  // Si si está el API en localStorage
  // Lo recupero del localStorage y lo pinto
  arrayData = JSON.parse(localStorage.getItem("shows"));
  renderShows(arrayData);
}
