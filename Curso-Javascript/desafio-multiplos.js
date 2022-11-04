var a = 3;
var N = 18;
let soma = 0;
let j = 0;

for (let i = 0; i <= N; i+= a) {
    var resultado = a * j;
    soma += resultado;
    j++;

}

console.log(soma);