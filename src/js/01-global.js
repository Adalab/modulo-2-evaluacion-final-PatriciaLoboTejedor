"use strict";

console.log(">> Ready :)");

// Constante globales
const form = document.querySelector(".js-form");
const inputSearch = document.querySelector(".js-inputText");
const inputButton = document.querySelector(".js-inputButton");
const favoritesList = document.querySelector(".js-favoritesList");
const showsList = document.querySelector(".js-showsList");

// Array vacio que llenaré con los datos de la API
let arrayData = [];
// Array vacio que llenaré con los favoritos del usuario
let arrayFavoriteShows = [];
