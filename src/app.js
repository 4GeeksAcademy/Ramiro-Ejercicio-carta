import "bootstrap";
import "./style.css";

import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";
/* eslint-disable */
let simbolos = ["♦", "♥", "♠", "♣"];
let numeros = ["A", 2, 3, 4, 5, 6, 7, 8, 9, 10, "J", "Q", "K"];

let simbolo = Math.floor(Math.random() * simbolos.length);
let numero = Math.floor(Math.random() * numeros.length);
// let cracionDeDiv = document.createElement("div");
let divPadre = document.querySelector("#carta");
// let añadiendoADivPadre = divPadre.appendChild(cracionDeDiv);

function encabezado() {
  let logoCartaInicio = document.querySelector("#logoCartaArriba");
  logoCartaInicio.innerHTML = `${simbolos[simbolo]}`;
  if (simbolos[simbolo] == "♦" || simbolos[simbolo] == "♥") {
    logoCartaInicio.classList.add("text-danger");
  }
  divPadre.appendChild(logoCartaInicio);
}
function contenido() {
  let numeroCarta = document.querySelector("#numCarta");
  numeroCarta.innerHTML = `${numeros[numero]}`;
  divPadre.appendChild(numeroCarta);
}
function final() {
  let logoCartaFinal = document.querySelector("#logoCartaAbajo");
  logoCartaFinal.innerHTML = `${simbolos[simbolo]}`;
  if (simbolos[simbolo] == "♦" || simbolos[simbolo] == "♥") {
    logoCartaFinal.classList.add("text-danger");
  }
  divPadre.appendChild(logoCartaFinal);
}

window.onload = function() {
  encabezado();
  contenido();
  final();
};
