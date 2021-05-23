// Eliminar elementos favoritos de listado lateral
function addListenersToFavoriteShows() {
  const buttonsRemove = document.querySelectorAll(".js-buttonRemove");
  for (const buttonRemove of buttonsRemove) {
    buttonRemove.addEventListener("click", handleRemoveFavorites);
  }
}

function handleRemoveFavorites(ev) {
  // Reconoce la tarjeta favorita de cada serie pinches donde pinches
  const selectedPreviewShowCard = ev.currentTarget;

  // Reconoce el id del elemento clickado
  const selectedCardId = parseInt(selectedPreviewShowCard.id);

  // Buscamos el elemento por su id dentro de nuestro array de Favoritos
  const itemShowInfo = arrayFavoriteShows.findIndex(
    (showItem) => showItem.show.id === selectedCardId
  );

  // Eliminamos ese elemento del array a traves de su ubicación en el index
  arrayFavoriteShows.splice(itemShowInfo - 1, 1);

  // y volvemos a pintar
  renderFavoriteShows();

  // Guardamos los favoritos en localStorage para poder recupearlo al recargar
  localStorage.setItem("favoritesShows", JSON.stringify(arrayFavoriteShows));
}
