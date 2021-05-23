// Array vacio que llenaré con los favoritos del usuario
let favoriteShows = [];

// Función que oye con un bucle las fichas de series para ver cual recibe el click de favorito y actuar
function addListenersToShows() {
  const allShowCards = document.querySelectorAll(".js-showCard");
  for (const showCard of allShowCards) {
    showCard.addEventListener("click", handleClickCard);
  }
}

// Función que realiza las acciones de un elemento favorito
function handleClickCard(event) {
  // Reconoce la tarjeta de cada serie pinches donde pinches
  const showCardItem = event.currentTarget;
  console.log(showCardItem);

  // Cambia a la clase favorites cuando pinchas sobre la tarjeta
  showCardItem.classList.toggle("favorites");
}
