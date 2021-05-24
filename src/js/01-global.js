"use strict";

console.log(">> 1,2,3 - Ready :)");

// Constante globales
const form = document.querySelector(".js-form");
const inputSearch = document.querySelector(".js-inputText");
const inputButton = document.querySelector(".js-inputButton");
const favoritesList = document.querySelector(".js-favoritesList");
const showsList = document.querySelector(".js-showsList");
const buttonRemoveAll = document.querySelector(".js-buttonRemoveAll");

let searchText = "";
const imgDefault = `https://via.placeholder.com/210x295/ffffff/666666/?text=Show`;

// Array vacio que llenaré con los datos de la API
let arrayData = [];
// Array vacio que llenaré con los favoritos del usuario
let arrayFavoriteShows = [];
