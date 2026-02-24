const contarParesImparesFlecha = (array) =>
  array.reduce((acc, num) => {
    num % 2 === 0 ? acc.pares++ : acc.impares++;
    return acc;  
  }, { pares: 0, impares: 0 });


let numeros2 = [11, 14, 17, 20, 23, 26];

let resultado2 = contarParesImparesFlecha(numeros2);
console.log("Función Flecha:");
console.log(resultado2);