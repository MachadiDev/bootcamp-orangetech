function calcularImc(peso, altura) {
    imc = peso / (altura * altura);
    return(imc);
}

function classificarImc(imc) {
    if (imc <= 18.4) {
        return('Magreza');
    }
    else if (imc >= 18.5 && imc <= 24.9) {
        return('Esta dentro do normal');
    }
    else if(imc >= 25 && imc <= 29.9) {
        return('Sobrepeso');
    } else {
        return('Obesidade');
    }
}

//main
(function () {
    const peso = 85;
    const altura = 1.75;

    const imc = calcularImc(peso, altura);
    console.log(classificarImc(imc));
})();
