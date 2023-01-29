// Receber uma quantidade de valores para avaliar
// função exibe se cada valor é par ou impar.

exibirTipo(10);

function exibirTipo(limite){
    for (let i = 1 ; i <= limite ; i++){
        if (i % 2 === 1 ){
            console.log(i,'Impar');
        } else {
            console.log(i,'Par');
        }
    }
    
}