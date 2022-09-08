exibirAsteriscos(5);

function exibirAsteriscos(linhas) {
    /*let padrao = '';
    for(let linha = 1; 1 linha <= linha++){
        padrao += '*';
        console.log(padrao);
    }*/
    for(let linha = 1; linha <= linhas; linha++){
        let padrao = '';
        for(let i = 0; i < linha; i++){
            padrao += '*';
        }
        console.log(padrao);
    }
}