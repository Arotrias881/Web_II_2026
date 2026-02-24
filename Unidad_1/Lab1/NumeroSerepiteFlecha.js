const numeroMasRepetidoFlecha = (array) => {
    let contador = {};
    let maxRepeticiones = 0;
    let numeroFrecuente = null;

    array.forEach(num => {
        contador[num] = (contador[num] || 0) + 1;

        if (contador[num] > maxRepeticiones) {
            maxRepeticiones = contador[num];
            numeroFrecuente = num;
        }
    });

    return Number(numeroFrecuente);
};


console.log("Flecha:", numeroMasRepetidoFlecha([7,7,2,2,2,7,7]));