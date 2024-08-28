const input1 = document.getElementById("idPrenom");
const input2 = document.getElementById("idNom");
const btn = document.getElementById("afficherBtn");

// function traitement() {
//   console.log(input1.value, input2.value);
//   let msg = `Je m'appelle ${input1.value} ${input2.value}. Merci !`;
//   alert(msg);
// }

btn.addEventListener("click", () => {
  let msg = `Je m'appelle ${input1.value} ${input2.value}. Merci !`;
  alert(msg);
});

// function addition(a, b) {
//     return a + b;
// }

//  (a, b) => {
//     return a + b;
// }

//  (a, b) =>  a + b;

//  a =>  a + 10;

//  () =>  20 + 10;
