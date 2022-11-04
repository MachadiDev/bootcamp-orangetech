let elementos = [64, 137, -16, 43, 67, 81, -90, 212, 10, 75]; 

let valor = parseInt(gets());
let pos = 0;
var x = false;
//TODO: Retorne o valor do elemento no Array junto de sua respectiva posição.

while (pos <= elementos.length && x == false) {
  
  if (elementos[pos] === valor) {
    console.log(`Achei ${valor} na posicao ${pos}`);
    x = true;
  }
  else {
    pos += 1;
  }
}

if (x === false) {
  console.log(`Numero ${valor} nao encontrado!`);
}

