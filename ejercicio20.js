/*A partir de 2 arrays, compararlos y devolver un array sin duplicados
a través de una función. Ejemplo a=[1,2,3,4], b=[1,2] Resultado = [3, 4];*/

function unicosDeAmbosArrays (arrayA, arrayB){
    let unicosA = arrayA.filter(elemento => !arrayB.includes(elemento));
    let unicosB = arrayB.filter(elemento => !arrayA.includes(elemento));
    return unicosA.concat(unicosB);
}
let a =[3, 5, 7, 9];
let b =[5, 8];
let resultado = unicosDeAmbosArrays (a, b);
console.log(resultado);