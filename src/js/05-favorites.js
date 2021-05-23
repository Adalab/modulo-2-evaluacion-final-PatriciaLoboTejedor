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
    (showItem) => showItem.id === selectedCardId
  );
  // Elementos id en nuestro array de favoritos
  const showCardFav = arrayFavoriteShows.find(
    (elementCardShow) => elementCardShow.id === selectedCardId
  );
  // Condicional para actuar en función de click a favoritos:
  if (showCardFav === undefined) {
    // Si todavía no está en el array de favoritos = lo añadimos
    arrayFavoriteShows.push(itemShowInfo);
  } else {
    // Si ya estaba en el array de favoritos = lo quitamos
    arrayFavoriteShows = arrayFavoriteShows.filter(
      (showCard) => showCard.id !== selectedCardId
    );
  }

  // Guardamos los favoritos en localStorage para poder recupearlo al recargar
  localStorage.setItem("favoritesShows", JSON.stringify(arrayFavoriteShows));

  renderFavoritesShows(arrayFavoriteShows);
}

function renderFavoritesShows(data) {
  // Creo una variable vacia con la que más tarde escribiré en el html
  let listFavoriteHtml = "";
  // A través de un bucle, recorro mi API (array de objetos)
  // y extraigo los datos que necesito pintar
  for (const favoriteShowItem of data) {
    listFavoriteHtml += `<li id="${favoriteShowItem.id}" class="js-favoriteShowCard"><h4>${favoriteShowItem.name}</h4><img src="${favoriteShowItem.image.medium}" alt="${favoriteShowItem.name}"></li>`;
  }
  // Lo pinto en el html
  favoritesList.innerHTML = listFavoriteHtml;

  // Invoco a la función que escucha mis fichas de series
  // para que se puedan seleccionarlas como favoritas
  addListenersToShows();
}

function getFavoriteShows() {
  // Recuperar los favoritos del localStorage
  arrayFavoriteShows = JSON.parse(localStorage.getItem("favoritesShows"));
  renderFavoritesShows(arrayFavoriteShows);
}
getFavoriteShows();
