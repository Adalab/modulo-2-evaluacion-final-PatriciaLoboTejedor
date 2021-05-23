// Función y evento con los que elimino los default del formulario para su envío
// como el hecho de que se "recargue" al pulsar enter
function handleSubmit(event) {
  event.preventDefault();
}
form.addEventListener("submit", handleSubmit);

// Función que llama al API en función de la búsqueda del usuario
function getShows() {
  // Recoger el valor actual del input en minúsculas
  searchText = inputSearch.value.toLowerCase();
  const urlSearch = `https://api.tvmaze.com/search/shows?q=${searchText}`;

  // Traigo el API de series
  fetch(urlSearch)
    .then((response) => response.json())
    .then((data) => {
      arrayData = data;

      // Pinto las búsquedas
      renderShows(arrayData);
    });
}

// Evento que realiza la búsqueda cuando se hace click sobre search
inputButton.addEventListener("click", getShows);

if (localStorage.getItem("lastSearh") === null) {
  getShows();
} else {
  // Sí tiene los datos guardados
  getFavoriteShows();
}
