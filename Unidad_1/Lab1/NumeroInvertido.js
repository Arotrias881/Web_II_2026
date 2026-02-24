function invertirNumero(numero) {
  
  const esNegativo = numero < 0;
  const invertido = parseInt(Math.abs(numero).toString().split("").reverse().join(""), 10);
  return esNegativo ? -invertido : invertido;
}

console.log("Tradicional:", invertirNumero(12345));   
console.log("Tradicional:", invertirNumero(-780));    