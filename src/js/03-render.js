// Función que pinta mis busquedas en la web
function renderShows() {
  // Creo una variable vacia con la que más tarde escribiré en el html
  let listHtml = "";
  // A través de un bucle, recorro mi API (array de objetos)
  // y extraigo los datos que necesito pintar
  for (const showItem of arrayData) {
    // Buscar si la tarjeta clickada está en favoritos
    const cardIsPresent = arrayFavoriteShows.find(
      (favoriteId) => favoriteId.show.id === showItem.show.id
    );
    // Si la tarjeta en la que hacemos click está en el array de favoritos
    if (cardIsPresent !== undefined) {
      // Le añadimos la clase favorita
      listHtml += `<li id="${showItem.show.id}" class="main__shows_list-li js-showCard favorites">`;
    } else {
      // Sino lo pintamos tal cual
      listHtml += `<li id="${showItem.show.id}" class="main__shows_list-li js-showCard">`;
    }

    listHtml += `<h3>${showItem.show.name}</h3>`;
    if (showItem.show.image === null) {
      listHtml += `<img src="${imgDefault}" alt="${showItem.show.name}">`;
    } else {
      listHtml += `<img src="${showItem.show.image.medium}" alt="${showItem.show.name}">`;
    }
    listHtml += `</li>`;
  }
  // Lo pinto en el html
  showsList.innerHTML = listHtml;

  // Invoco a la función que escucha mis fichas de series
  // para que se puedan seleccionarlas como favoritas
  addListenersToShows();
}
