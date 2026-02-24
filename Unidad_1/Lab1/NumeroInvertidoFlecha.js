const invertirNumeroFlecha = (numero) => {
  const esNegativo = numero < 0;
  const invertido = parseInt(Math.abs(numero).toString().split("").reverse().join(""), 10);
  return esNegativo ? -invertido : invertido;
};


console.log("Flecha:", invertirNumeroFlecha(9001));   
console.log("Flecha:", invertirNumeroFlecha(-120));   