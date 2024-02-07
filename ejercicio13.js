/*13. Crear una función que pase de grados Celsius a Farenheit.
       * Pista: Para convertir de Celsius a Fahrenheit,simplemente multiplica por 1.8 y suma 32*/

function celsiusAFahrenheit (celsius){
    return celsius * 1.8 + 32;
}
let gradosCelsius = 30;
let gradosFahrenheit = celsiusAFahrenheit(gradosCelsius);
console.log (`${gradosCelsius} grados Celsius son ${gradosFahrenheit} grados Fahrenheit`);
