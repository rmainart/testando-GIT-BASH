// Switch case

let permissao; // usuario comum, gerente, diretor

permissao = 'oi';

switch (permissao){
    case 'comum':
        console.log('Usuario comum');
        break;
    
    case 'gerente':
        console.log('Usuario gerente');
        break;
    
    case 'diretor':
        console.log('Usuario diretor');
        break;

    default:
        console.log('Usuario não reconhecido!');

}