function numeroMasRepetido(array) {
    let contador = {};
    let maxRepeticiones = 0;
    let numeroFrecuente = null;

    for (let i = 0; i < array.length; i++) {
        let num = array[i];

        contador[num] = (contador[num] || 0) + 1;

        if (contador[num] > maxRepeticiones) {
            maxRepeticiones = contador[num];
            numeroFrecuente = num;
        }
    }

    return Number(numeroFrecuente);
}


let numeros = [1, 2, 2, 3, 4, 2, 5, 1, 1, 1];

console.log("Tradicional:", numeroMasRepetido(numeros));