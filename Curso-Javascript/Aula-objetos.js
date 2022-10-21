const gabriel = {
    nome: 'Gabriel Machadi',
    idade: 25,

    descrever: function () {
        console.log(`Meu nome é ${this.nome} e minha idade é ${this.idade}`)
    }
};

gabriel.altura = 1.69; //incremeta a chave e o atributo

//delete gabriel.nome;


const atributo = 'idade';

console.log(gabriel[atributo]);

console.log(gabriel.nome);
console.log(gabriel.idade);
console.log(gabriel);

gabriel.descrever();