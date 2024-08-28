let x = prompt("Veuillez saisir un entier");

function test(nb) {
  console.log(nb);
  if (isNaN(nb)) console.log("erreur");
  else {
    if (nb < 10) alert("Votre valeur est inférieur à 10");
    else alert("Votre valeur est supérieur à 10");
  }
}

// test(parseInt(x));
// test(Number(x));
test(+x);
