// Función y evento con los que elimino los default del formulario para su envío
// como el hecho de que se "recargue" al pulsar enter
function handleSubmit(event) {
  event.preventDefault();
}
form.addEventListener("submit", handleSubmit);

//Búsqueda a través del form =
// 1)evento click
// 2)recojo texto
// 3)filtro por texto
// 4)ejecuto la búsqueda
// 5)pinto el filtro

// Función de busqueda a través del input de texto
function searchShowCards() {
  // 2) Recoger el valor actual del input en minúsculas
  const searchText = inputSearch.value;

  // 3) Filtrar las series que tienen en parte de su nombre el campo de búsqueda
  const searchShowCardsFilter = arrayData.filter((showCard) =>
    showCard.name.toLowerCase().includes(searchText.toLowerCase())
  );
  return searchShowCardsFilter;
}
// Función que ejecuta la búsqueda y pinta solo los resultado
function handleButtonSearch() {
  // 4) Ejecuto la función de filtrar por búsqueda
  const filteredShowCards = searchShowCards();
  // 5) Ejecuto la función de pintar esa búsqueda
  renderShows(filteredShowCards);
}
// 1) Evento que realiza la búsqueda cuando se hace click sobre search
inputButton.addEventListener("click", handleButtonSearch);
