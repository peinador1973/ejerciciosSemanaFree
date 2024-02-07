//A partir de este array de números, ordena la secuencia en forma creciente y luego filtra números menor de 10.//
let num = [100, 2, 20, 35, 4, 44];
let numOrdenados = num.sort((a, b) => a - b);
let numMenor = numOrdenados.filter(num => num < 10);
console.log(numOrdenados);
console.log(numMenor);