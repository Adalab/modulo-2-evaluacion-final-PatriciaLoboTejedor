// Función que escucha las cruces para eliminar individualmente los elementos favs
/*function addListenersToFavoriteShows() {
  const buttonsRemove = document.querySelectorAll(".js-buttonRemove");
  for (const buttonRemove of buttonsRemove) {
    buttonRemove.addEventListener("click", handleFavoriteClickCard);
  }
}*/

// Función que elimina todos los favoritos del listado lateral y de localStorage
function handleRemoveAllFavorites() {
  // Vaciamos el array
  arrayFavoriteShows = [];
  // Vaciamos el localStorage
  localStorage.removeItem("favoritesShows");
  // Y volvemos a pintar todo
  renderFavoriteShows();
  renderShows();
}
// Evento que borra todos los favoritos con el boton Detelete All
buttonRemoveAll.addEventListener("click", handleRemoveAllFavorites);
