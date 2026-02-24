const numeroMasRepetidoFlecha = (array) =>
  Object.entries(array.reduce((contador, num) => {
    contador[num] = (contador[num] || 0) + 1;
    return contador;
  }, {})).reduce((a, b) => a[1] > b[1] ? a : b)[0];


console.log("Flecha:", numeroMasRepetidoFlecha([7, 7, 2, 2, 2, 7, 7]));  