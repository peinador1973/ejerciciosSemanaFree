/*9. Dados estos 3 arrays con subarrays anidados, resuelve a, b y c.
a. convertir array1 en un solo array
b. convertir array2 en un array con los 4 primeros elementos del array y un subarray anidado del último [5,6]
c. convertir array3 en un solo array*/

let array1 = [1, 2, [3, 4]];
let resultado1 = array1.flat();
console.log (resultado1)


let array2 = [1, 2, [3, 4, [5, 6]]];
let arrayAplanado = array2.flat();
console.log (arrayAplanado);