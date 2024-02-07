//19. A partir de un array de números, devolver la suma de los números presentes en el array inicial.

let num = [100, 2, 20, 35, 4, 44];
let suma = num.reduce((acumulador, valoractual) => acumulador + valoractual);
console.log(suma);