// Función y evento con los que elimino los default del formulario
// para su envío, como el hecho de que se "recargue" al pulsar enter
function handleSubmit(event) {
  event.preventDefault();
}
form.addEventListener("submit", handleSubmit);

// Función que llama al API en función de la búsqueda del usuario
function getShows() {
  // Recoge el valor actual del input en minúsculas
  searchText = inputSearch.value.toLowerCase();
  // Lo pinta sobre la url de la API para realizar la búsqueda
  const urlSearch = `//api.tvmaze.com/search/shows?q=${searchText}`;

  // Trae el API de series referente a la búsqueda
  fetch(urlSearch)
    .then((response) => response.json())
    .then((data) => {
      arrayData = data;

      // Pinto las búsquedas
      renderShows(arrayData);
    });
}

// Si se recarga la página de manera automática o sin querer...
if (localStorage.getItem("favoritesShows") !== null) {
  // y se tienen los datos guardados de favoritos, se devuelven
  getFavoriteShows();
}

// Evento que realiza la búsqueda cuando se hace click sobre search
inputButton.addEventListener("click", getShows);
// Evento que realiza la búsqueda cuando la usuaria hace enter
form.addEventListener("submit", getShows);
