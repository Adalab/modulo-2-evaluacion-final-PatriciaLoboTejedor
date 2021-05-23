// Traigo el API de series
function getShows() {
  fetch("http://api.tvmaze.com/shows")
    .then((response) => response.json())
    .then((data) => {
      arrayData = data;
      // Guardo en localStorage el API de series
      localStorage.setItem("shows", JSON.stringify(generalData));
    });
}

// Cuando cargo la página web =
if (localStorage.getItem("shows") === null) {
  // Si no está el API en localStorage
  // Ejecuto la función que a través de fetch pide el API de series
  getShows();
  // Lo pinto
  /*renderShows(arrayData);*/
} else {
  // Si si está el API en localStorage
  // Lo recupero del localStorage
  arrayData = JSON.parse(localStorage.getItem("shows"));
  // Lo pinto
  /*renderShows(arrayData);*/
  /*getFavoriteShows();*/
}

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
