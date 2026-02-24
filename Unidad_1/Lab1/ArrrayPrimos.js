function esPrimo(num) {
  if (num <= 1) return false;
  if (num === 2) return true;
  if (num % 2 === 0) return false;

  for (let i = 3; i * i <= num; i += 2) {
    if (num % i === 0) return false;
  }
  return true;
}

function soloPrimos(array) {
  return array.filter(esPrimo);
}

let arr1 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 15, 17];
console.log("Tradicional:", soloPrimos(arr1));
