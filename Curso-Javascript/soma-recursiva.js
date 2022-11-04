function soma(x) {
    if(x <= 1) {
        return 1;
    }
    else {
        return x + soma(x -1 );
    }
}

console.log(soma(4));