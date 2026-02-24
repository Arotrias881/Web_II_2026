const contarParesImparesFlecha = (array) => {
    let pares = 0;
    let impares = 0;

    array.forEach(num => {
        num % 2 === 0 ? pares++ : impares++;
    });

    return { pares, impares };
};


let numeros2 = [11, 14, 17, 20, 23, 26];

let resultado2 = contarParesImparesFlecha(numeros2);
console.log("Función Flecha:");
console.log(resultado2);