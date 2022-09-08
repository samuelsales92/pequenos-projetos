exibirNumerosPrimos(15);

function exibirNumerosPrimos(limite) {
    for(let numero = 2; numero <= limite; numero++){
        if (numeroPrimo(numero)) console.log(numero);
     }
}
    function numeroPrimo(numero){
        for(let divisor = 2; divisor < numero; divisor++){
            if(numero % divisor === 0) {
                    return false;               
        } 
    }
    return true;
}


 /*  for(let divisor = 2; divisor < numero; divisor++){
            if(numero % divisor === 0) {
                    ehPrimo = false;
                    break
            }
            
        }
        if (ehPrimo) console.log(numero);
    }*/