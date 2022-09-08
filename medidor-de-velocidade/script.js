

verificarVelocidade(60);

function verificarVelocidade(velocidade) {
    const velocidadeMaxima = 70;
    const KmPorPonto = 5;
    if (velocidade <= velocidadeMaxima)
        console.log('Ok');
    else {
        const pontos = Math.floor(((velocidade - velocidadeMaxima) / KmPorPonto));
        if(pontos >= 12)
            console.log('Carteira Suspensa');
        else
            console.log('Pontos',pontos);
    }
}