// JS aula 36 - Natureza dinamica de objetos

const mouse = {
    cor: 'red',
    marca: 'renner'
}

mouse.velocidade = 5000;
mouse.trocarDPI = function(){
    console.log('mudando DPI');
}

//delete mouse.velocidade;
//delete mouse.trocarDPI;

console.log(mouse);