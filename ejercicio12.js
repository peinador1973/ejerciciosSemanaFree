//Calcular la serie de fibonacci que devuelve hasta -n- números en un array.//
function fibonacci (n){
    let fib = [0, 1];
    for (let i = 2; i < n; i++) {
        fib[i] = fib[i - 1] + fib[i - 2];
    }
    return fib.slice(0, n);
}
let n= 10;
let resultado = fibonacci(n);
console.log (resultado);
