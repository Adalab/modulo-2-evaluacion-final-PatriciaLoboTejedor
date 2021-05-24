// Función que pinta mis busquedas en la web
function renderShows() {
  // Creo una variable vacia con la que más tarde escribiré en el html
  let listHtml = "";
  // A través de un bucle, recorro mi API (array de objetos)
  // y extraigo los datos que necesito pintar
  for (const showItem of arrayData) {
    // compruebas si está en favoritos y le añades la clase
    listHtml += `<li id="${showItem.show.id}" class="js-showCard">`;
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
