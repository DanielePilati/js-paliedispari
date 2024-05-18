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
  word = word.toLowerCase();
  const characters = word.split("");
  const reverseWord = [...characters];
  reverseWord.reverse();
  return characters.join("") === reverseWord.join("");
}
