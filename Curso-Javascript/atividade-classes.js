class Pessoa {
    nome;
    idade;
    anoDeNascismento;

    constructor(nome, idade) {
        this.nome = nome;
        this.idade = idade;
        this.anoDeNascismento = 2022 - idade;
    }


}

function compararPessoas(p1,p2) {
    if (p1.idade > p2.idade) {
        console.log(`${p1.nome} é mais velho(a) que ${p2.nome}`);
    } else if(p1.idade < p2.idade) {
        console.log(`${p1.nome} é mais novo(a) que ${p2.nome}`);
    } else {
        console.log(`${p1.nome} e ${p2.nome} tem a mesma idade`);
    }
    
}

const gabriel = new Pessoa('Gabriel Machadi', 24);
const vitor = new Pessoa('Vitor', 22);

compararPessoas(vitor,gabriel);