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

  // Cambia a la clase favorites cuando pinchas sobre la tarjeta
  selectedShowCard.classList.toggle("favorites");

  // Reconoce el id del elemento clickado
  const selectedCardId = parseInt(selectedShowCard.id);

  // Buscamos el elemento por su id dentro de nuestro arrayData
  const itemShowInfo = arrayData.find(
    (showItem) => showItem.show.id === selectedCardId
  );

  // Buscar si la paleta clickada está en favoritos
  const isPresent = arrayFavoriteShows.find(
    (favoriteId) => favoriteId === itemShowInfo
  );

  if (isPresent === undefined) {
    // El ID de la paleta en la que ha hecho click no está en el array de favoritos
    arrayFavoriteShows.push(itemShowInfo);
  } else {
    arrayFavoriteShows = arrayFavoriteShows.filter(
      (favoriteId) => favoriteId !== itemShowInfo
    );
  }

  renderFavoriteShows();

  // Guardamos los favoritos en localStorage para poder recupearlo al recargar
  localStorage.setItem("favoritesShows", JSON.stringify(arrayFavoriteShows));

  // Si ya esta en 'My Favourite Shows' como le digo que no me la añada ni la pinte de nuevo?
  /*if (isPresent === itemShowInfo) {
    // El ID de la paleta está ya en favoritos
    arrayFavoriteShows = arrayFavoriteShows.filter(
      (favoriteId) => favoriteId !== itemShowInfo
    );
  } else {
    arrayFavoriteShows.push(itemShowInfo);
  }*/
}

function renderFavoriteShows() {
  // Creo una variable vacia con la que más tarde escribiré en el html
  let listFavoritesHtml = "";
  listFavoritesHtml += `<h2>My favorites shows</h2>`;
  listFavoritesHtml += `<ul class="main__search_favorites-list js-favoritesList">`;
  // A través de un bucle, recorro mi API (array de objetos)
  // y extraigo los datos que necesito pintar
  for (const showFavoriteItem of arrayFavoriteShows) {
    listFavoritesHtml += `<li id="${showFavoriteItem.show.id}" class="js-showCard">`;
    listFavoritesHtml += `<h3>${showFavoriteItem.show.name}</h3>`;
    if (showFavoriteItem.show.image === null) {
      listFavoritesHtml += `<img src="${imgDefault}" alt="${showFavoriteItem.show.name}">`;
    } else {
      listFavoritesHtml += `<img src="${showFavoriteItem.show.image.medium}" alt="${showFavoriteItem.show.name}">`;
    }
    listFavoritesHtml += `<input class="js-buttonRemove" type="button" value="X"/>`;
    listFavoritesHtml += `</li>`;
  }
  listFavoritesHtml += `</ul>`;

  // Lo pinto en el html
  favoritesSection.innerHTML = listFavoritesHtml;
}

// Recuperar los favoritos del localStorage y mantenlos pintados en la lista
function getFavoriteShows() {
  arrayFavoriteShows = JSON.parse(localStorage.getItem("favoritesShows"));
  renderFavoriteShows();
}
