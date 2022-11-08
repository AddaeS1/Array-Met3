const cidades = [
    "Salvador",
    "São Paulo",
    "Brasilia",
    "Recife",
    "Rio de Janeiro",
];


var maiorPalavra = cidades.reduce(function(maior, palavraAtual) {
    if(palavraAtual.length > maior.length)
       return palavraAtual;
    else
       return maior;
    }, "");

    console.log(maiorPalavra);

/*let maiorNome = cidades.reduce((acumulador, elementoAtual) => {
    let maior = acumulador ;

    if(elementoAtual.cidade > maior){
        maior = elementoAtual;
    }
    return maior;
});

console.log(maiorNome);*/