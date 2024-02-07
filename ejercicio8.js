//8. Crea dos arrays y declara una función que tome estos dos arrays, saque el último elemento del primero y lo agregue al segundo.//

let animales = ["perro", "gato,"];
let comida = ["carne", "pescado,"];

function ultimoElemento (array1, array2){
    let elemento = array1.pop();
    array2.push(elemento);
}
ultimoElemento (animales, comida);
console.log(animales);
console.log(comida);