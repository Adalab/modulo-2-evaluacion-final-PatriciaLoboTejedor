// Función que pinta mis busquedas en la web
function renderShows(data) {
  // Creo una variable vacia con la que más tarde escribiré en el html
  let listHtml = "";
  // A través de un bucle, recorro mi API (array de objetos)
  // y extraigo los datos que necesito pintar
  for (const showItem of data) {
    listHtml += `<li id="${showItem.id}" class="js-showCard"><h3>${showItem.name}</h3><img src="${showItem.image.medium}" alt="${showItem.name}"></li>`;
  }
  // Lo pinto en el html
  showsList.innerHTML = listHtml;

  // Invoco a la función que escucha mis fichas de series
  // para que se puedan seleccionarlas como favoritas
  addListenersToShows();
}
