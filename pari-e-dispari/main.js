"use strict";
// L’utente sceglie pari o dispari e inserisce un numero da 1 a 5.
const userNum = Number(prompt("inserisci un numero tra 1 e 5")); //chiedo in inputo un numero da 1 a 5
let userChoice = prompt('scegli "pari" o "dispari"'); // e di scegliere tra pari e dispari
userChoice = userChoice.toLowerCase();
let check = null;
let sum = Math.floor(userNum + getRandomArbitrary(1, 5)); // Sommiamo i due numeri

// Dichiariamo chi ha vinto.
//verifico se l'utente ha messo pari o dispari
if (userChoice === "pari") {
  check = true;
  whoWin(sum, check);
} else if (userChoice === "dispari") {
  check = false;
  whoWin(sum, check);
} else {
  alert('inserisci la parola "pari" o "dispari" correttamente');
}

// uso una funzione per verificare chi ha vinto
function whoWin(num, check) {
  if (evenOdd(num) === check) {
    alert("you win");
  } else {
    alert("you loose");
  }
}

// Stabiliamo se la somma dei due numeri è pari o dispari (usando una funzione)
function evenOdd(num) {
  return num % 2 === 0;
}
// Generiamo un numero random (sempre da 1 a 5) per il computer (usando una funzione).
function getRandomArbitrary(min, max) {
  return Math.random() * (max - min) + min;
}
