// Criar função para mostrar os numero primos

// Primos
// Compostos

// Ex.: 10,11
// 10 ( divisivel por 1 ou por ele mesmo )
// 10 -> 1, 2, 4, 6, 10.
// 11 -> 1, 11. OK
exibirNumerosPrimos(15);

function exibirNumerosPrimos(limite){
    for ( numero = 2; numero <= limite; numero++){
        let ehPrimo = true;
        for (let divisor = 2; divisor < numero; divisor++){
            if (numero % divisor === 0){
            ehPrimo = false;
            break;
            }
        }
    
        if (ehPrimo) {
        console.log(numero);
        }    
    }


}