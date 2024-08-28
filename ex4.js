let tab = ["virginie", "aziza", "chloe"];

const inputEtudiant = document.getElementById("inp");
const btn = document.getElementById("btn-ajouter");
let divAffiche = document.getElementById("liste");

btn.addEventListener("click", () => {
  tab.push(inputEtudiant.value);
  tab.sort();
  divAffiche.textContent = tab.join(" :: ");
});
