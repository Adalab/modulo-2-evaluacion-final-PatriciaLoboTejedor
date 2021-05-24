// Función que oye con un bucle las fichas de series
// para ver cual recibe el click de favorito y actuar
function addListenersToShows() {
  const allShowCards = document.querySelectorAll(".js-showCard");
  for (const showCard of allShowCards) {
    showCard.addEventListener("click", handleFavoriteClickCard);
  }
}

// Función que realiza las acciones de un elemento favorito
function handleFavoriteClickCard(event) {
  // Reconoce la tarjeta de cada serie pinches donde pinches
  const selectedShowCard = event.currentTarget;

  // Reconoce el id del elemento clickado
  const selectedCardId = parseInt(selectedShowCard.id);

  // Buscamos el elemento por su id dentro de nuestro arrayData
  const itemShowInfo = arrayData.find(
    (showItem) => showItem.show.id === selectedCardId
  );

  // Buscar si la tarjeta clickada está en favoritos
  const cardIsPresent = arrayFavoriteShows.find(
    (favoriteId) => favoriteId.show.id === itemShowInfo.show.id
  );

  // Si el ID de la tarjeta en la que hacemos click no está en el array de favoritos
  if (cardIsPresent === undefined) {
    // La añadimos
    arrayFavoriteShows.push(itemShowInfo);
  } else {
    // La quitamos o no la añadimos
    arrayFavoriteShows = arrayFavoriteShows.filter(
      (favoriteId) => favoriteId.show.id !== itemShowInfo.show.id
    );
  }

  // Repintamos todo y guardamos en local
  renderFavoriteShows();
  renderShows();
  setInLocalStorage();
}

function renderFavoriteShows() {
  // Creo una variable vacia con la que más tarde escribiré en el html
  let listFavoritesHtml = "";
  // A través de un bucle, recorro mi API (array de objetos)
  // y extraigo los datos que necesito pintar
  for (const showFavoriteItem of arrayFavoriteShows) {
    listFavoritesHtml += `<li id="${showFavoriteItem.show.id}" class="js-showFavoriteCard">`;
    listFavoritesHtml += `<h3>${showFavoriteItem.show.name}</h3>`;
    if (showFavoriteItem.show.image === null) {
      listFavoritesHtml += `<img src="${imgDefault}" alt="${showFavoriteItem.show.name}">`;
    } else {
      listFavoritesHtml += `<img src="${showFavoriteItem.show.image.medium}" alt="${showFavoriteItem.show.name}">`;
    }
    listFavoritesHtml += `<input class="js-showCard" type="button" value="X"  id="${showFavoriteItem.show.id}" />`;
    listFavoritesHtml += `</li>`;
  }
  listFavoritesHtml += `</ul>`;

  // Lo pinto en el html
  favoritesList.innerHTML = listFavoritesHtml;

  addListenersToFavoriteShows();
}

// Guardamos los favoritos en localStorage para poder recupearlo al recargar
function setInLocalStorage() {
  localStorage.setItem("favoritesShows", JSON.stringify(arrayFavoriteShows));
}

// Recuperar los favoritos del localStorage y mantenlos pintados en la lista
function getFavoriteShows() {
  arrayFavoriteShows = JSON.parse(localStorage.getItem("favoritesShows"));
  renderFavoriteShows();
}
