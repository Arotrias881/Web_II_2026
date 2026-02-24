const invertirNumeroFlecha = (numero) =>
  parseInt(Math.abs(numero).toString().split("").reverse().join(""), 10) * Math.sign(numero);


console.log("Flecha:", invertirNumeroFlecha(9001));   
console.log("Flecha:", invertirNumeroFlecha(-120));   