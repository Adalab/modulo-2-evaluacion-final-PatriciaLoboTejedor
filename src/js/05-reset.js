// Eliminar elementos favoritos de listado lateral
function addListenersToFavoriteShows() {
  const buttonsRemove = document.querySelectorAll(".js-buttonRemove");
  for (const buttonRemove of buttonsRemove) {
    buttonRemove.addEventListener("click", handleFavoriteClickCard);
  }
}

// Eliminar todos los favoritos del listado lateral
function handleRemoveAllFavorites() {
  // Vaciamos el array
  arrayFavoriteShows = [];
  // y volvemos a pintar el array vacío
  renderFavoriteShows();
  // Vaciamos el localStorage
  localStorage.clear("favoritesShows");
}

buttonRemoveAll.addEventListener("click", handleRemoveAllFavorites);
