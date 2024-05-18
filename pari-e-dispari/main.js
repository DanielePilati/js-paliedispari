"use strict";

// L’utente sceglie pari o dispari e inserisce un numero da 1 a 5.
const userNum = Number(prompt("inserisci un numero tra 1 e 5")); //chiedo in inputo un numero da 1 a 5
const userChoice = prompt('scegli "pari" o "dispari" ').toLowerCase; // e di scegliere tra pari e dispari
let sum = userNum + getRandomArbitrary(1, 5); // Sommiamo i due numeri
// Dichiariamo chi ha vinto.

// Stabiliamo se la somma dei due numeri è pari o dispari (usando una funzione)
function evenOdd(num) {
  return num % 2 === 0;
}
// Generiamo un numero random (sempre da 1 a 5) per il computer (usando una funzione).
function getRandomArbitrary(min, max) {
  return Math.random() * (max - min) + min;
}
