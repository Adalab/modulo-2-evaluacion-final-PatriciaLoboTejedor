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
  // Ejecuto la función que a través de fetch pide el API de series
  getShows();
  // Lo pinto
  /*renderShows(arrayData);*/
} else {
  // Si si está el API en localStorage
  // Lo recupero del localStorage
  arrayData = JSON.parse(localStorage.getItem("shows"));
  // Lo pinto
  /*renderShows(arrayData);*/
  /*getFavoriteShows();*/
}
