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
  // Reconoce la tarjeta de cada serie pinches donde pinches de su li
  const selectedShowCard = event.currentTarget;

  // Reconoce el id del elemento clickado
  const selectedCardId = parseInt(selectedShowCard.id);

  // Buscamos el elemento por su id dentro de nuestro arrayData
  const itemShowInfo = arrayData.find(
    (showItem) => showItem.show.id === selectedCardId
  );

  // Buscamos si la tarjeta clickada está en el array de favoritos
  const cardIsPresent = arrayFavoriteShows.find(
    (favId) => favId.show.id === selectedCardId
  );

  // Si el ID de la tarjeta en la que hacemos click no está en el array de favoritos
  if (cardIsPresent === undefined) {
    // La añadimos
    arrayFavoriteShows.push(itemShowInfo);
  } else {
    // La quitamos o no la añadimos
    arrayFavoriteShows = arrayFavoriteShows.filter(
      (favoriteId) => favoriteId.show.id !== selectedCardId
    );
  }

  // Repintamos todo y guardamos en local
  renderFavoriteShows();
  renderShows();
  setInLocalStorage();
}

// Función para pintar en la seccion los elementos favoritos
function renderFavoriteShows() {
  // Creo una variable vacia con la que más tarde escribiré en el html
  let listFavoritesHtml = "";
  // A través de un bucle, recorro mi API (array de objetos)
  // y extraigo los datos que necesito pintar
  for (const showFavoriteItem of arrayFavoriteShows) {
    listFavoritesHtml += `<li id="${showFavoriteItem.show.id}" class="favorite-card js-showFavoriteCard">`;
    listFavoritesHtml += `<h3 class="favorite-card_title">${showFavoriteItem.show.name}</h3>`;
    if (showFavoriteItem.show.image === null) {
      listFavoritesHtml += `<img src="${imgDefault}" alt="${showFavoriteItem.show.name}">`;
    } else {
      listFavoritesHtml += `<img src="${showFavoriteItem.show.image.medium}" alt="${showFavoriteItem.show.name}">`;
    }
    listFavoritesHtml += `<div class="favorite-card_input js-showCard" id="${showFavoriteItem.show.id}"><i class="fas fa-times"></i></div>`;
    listFavoritesHtml += `</li>`;
  }

  // Lo pinto en el html
  favoritesList.innerHTML = listFavoritesHtml;

  /*addListenersToFavoriteShows();*/
}

// Guardamos los favoritos en localStorage para poder recupearlo al recargar
function setInLocalStorage() {
  localStorage.setItem("favoritesShows", JSON.stringify(arrayFavoriteShows));
}

// Función que recuperar los favoritos del localStorage y los mantiene pintados en la lista
function getFavoriteShows() {
  arrayFavoriteShows = JSON.parse(localStorage.getItem("favoritesShows"));
  renderFavoriteShows();
  renderShows();
}

// Boton LOG que pintara el numero de favoritos en el array
const buttonLog = document.querySelector(".js-log");
function favoriteLong() {
  console.log(`tienes ${arrayFavoriteShows.length} favoritos`);
}

buttonLog.addEventListener("click", favoriteLong);
