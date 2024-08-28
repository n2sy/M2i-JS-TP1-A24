let tab = [
  125,
  "ABC",
  214,
  87,
  "ERT",
  "TYUIO",
  254,
  963,
  47,
  "Scrt",
  "Sezat",
  52,
  47,
  "Nidhal",
  89,
];

let tabNumbers = tab.filter((element) => typeof element == "number");
let tabStrings = tab.filter((element) => typeof element == "string");

console.log(tabNumbers);
console.log(tabStrings);

tabStrings.sort();
console.log(tabStrings);
tabNumbers.sort((a, b) => a - b);
/*
si a -b < 0 donc a < b donc a sera placé avant b
si a -b > 0 donc a > b donc a sera placé aprés b
si a -b = 0 donc a = b donc l'ordre reste le même
*/
console.log(tabNumbers);

tabStrings.reverse();
console.log(tabStrings);

let somme = tabNumbers.reduce((a, b) => a + b);
let produit = tabNumbers.reduce((a, b) => a * b);
let moyenne = somme / tabNumbers.length;
console.log(somme, produit, moyenne);

let max = Math.max(...tabNumbers);
let min = Math.min(...tabNumbers);
console.log(max, min);

let randomNumber = 2;
let elem = tabNumbers.includes(randomNumber);
if (elem) {
  console.log(
    randomNumber,
    "se trouve à la position ",
    tabNumbers.indexOf(randomNumber)
  );
} else {
  console.log("Element introuvable");
}

let tabSup = tabNumbers.filter((a) => a >= moyenne);
let tabInf = tabNumbers.filter((element) => element < moyenne);
console.log(tabSup, tabInf);

let t = tabInf.concat(tabStrings);
t = t.concat(tabSup);
console.log(t);

let t2 = [...tabInf, ...tabStrings, ...tabSup];
console.log(t2);
