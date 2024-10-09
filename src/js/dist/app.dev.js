"use strict";

document.addEventListener("DOMContentLoaded", function () {
  crearGaleria();
});

function crearGaleria() {
  var CANTIDAD_IMAGENES = 16;
  var galeria = document.querySelector(".galeria-imagenes");

  var _loop = function _loop(i) {
    var imagen = document.createElement("IMG");
    imagen.src = "src/img/gallery/full/".concat(i, ".jpg");
    imagen.alt = "Imagen Galeria"; //Event Hendaler

    imagen.onclick = function () {
      mostrarImagen(i);
    };

    galeria.appendChild(imagen);
  };

  for (var i = 1; i <= CANTIDAD_IMAGENES; i++) {
    _loop(i);
  }
}

function mostrarImagen(i) {
  //generar modal
  var modal = document.createElement("DIV");
  modal.classList.add("modal");
  modal.onclick = cerrarModal; //agregar al html

  var body = document.querySelector("body");
  body.appendChild(modal);
}

function cerrarModal() {
  console.log("desde cerrarModal");
}