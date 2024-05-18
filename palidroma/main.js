"use strict";

//Chiedere all’utente di inserire una parola

const userWord = prompt("scrivi una parola");

if (isPalindrom(userWord)) {
  alert("è una frase palindroma");
} else {
  alert("non è una frase palindroma");
}

// Creare una funzione per capire se la parola inserita è palindroma

function isPalindrom(word) {
  word = word.toLowerCase(); // trasformo la parola in lowercase
  const characters = word.split(""); // prendo la parola e la metto in un array
  const reverseWord = [...characters]; // copio l'array
  reverseWord.reverse(); //lo giro tramite il metodo .reverse()
  return characters.join("") === reverseWord.join(""); // ritorna il confronto tra i due array
}
