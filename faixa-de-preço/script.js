let faixas = [
    {tooltip: 'até R$700', minimo: 0, maximo: 700},
    {tooltip: 'de R$700 a R$1000', minimo: 700, maximo: 1000},
    {tooltip: 'de R$1000 ou mais', minimo: 1000, maximo: 9999999}
];

//segundad opção (Factory Function)
function criaFaixaPreco(tooltip,minimo,maximo){
    return {
        tooltip,
        minimo,
        maximo
    }
}

let faixas2 = [
    criaFaixaPreco('a',0,700),
    criaFaixaPreco('b',700,1000),
    criaFaixaPreco('c',1000,9999999)
]
//terceira opção (Constructor Function)

function FaixaPreco(tooltip,minimo,maximo){
    this.tooltip = tooltip,
    this.minimo = minimo,
    this.maximo = maximo
}

let faixas3 = [
    new FaixaPreco('d',0,700),
    new FaixaPreco('e',700,1000),
    new FaixaPreco('f',1000,99999)
]

console.log(faixas);
console.log(faixas2);
console.log(faixas3);