class Pessoa {
    nome;
    idade;
    anoDeNascismento;

    constructor(nome, idade) {
        this.nome = nome;
        this.idade = idade;
        this.anoDeNascismento = 2022 - idade;
    }

    descrever() {
        console.log(`Meu nome é ${this.nome} e minha idade é ${this.idade} nascido em ${this.anoDeNascismento}`);
    }
}

const gabriel = new Pessoa('Gabriel Machadi', 24);

//gabriel.nome = 'Gabriel Machadi';
//gabriel.idade = 25;

gabriel.descrever();

