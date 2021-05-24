// Eliminar individualmente los elementos favoritos de listado lateral
function addListenersToFavoriteShows() {
  const buttonsRemove = document.querySelectorAll(".js-buttonRemove");
  for (const buttonRemove of buttonsRemove) {
    buttonRemove.addEventListener("click", handleFavoriteClickCard);
  }
}

// Eliminar todos los favoritos del listado lateral y de localStorage
function handleRemoveAllFavorites() {
  // Vaciamos el array
  arrayFavoriteShows = [];
  // Vaciamos el localStorage
  localStorage.removeItem("favoritesShows");
  // Y volvemos a pintar todo
  renderFavoriteShows();
  renderShows();
}

buttonRemoveAll.addEventListener("click", handleRemoveAllFavorites);
