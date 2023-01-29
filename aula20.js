// Medidor de velocidade

//Vel. max de 70 km
// a cada 5km acima do limite voce ganha 1 ponto
//Math.floor() => arredondar o decimal mais proximo
//caso os pontos maior que 12 => "Carteira Suspensa"




verificarVelocidade(65);

function verificarVelocidade(velocidade){
    const velocidadeMaxima = 70;
    const kmPorPonto = 5;
    if (velocidade <= velocidadeMaxima) {
        console.log('Velocidade permitida.'); 
    } else{       
        const pontos = (velocidade - velocidadeMaxima) / kmPorPonto;
        if (pontos >= 12) {
        console.log('Carteira Suspensa');
        } else {
        console.log('Pontos:',Math.floor(pontos));
        }
    }
}