/// fizzBuzz -> compara alguns valores e ter um tipo de retorno baseado no valor que teve de entrada


//Divisivel por 3 => Fizz
//Divisivel por 5 => Buzz
//Divisivel por 3 e 5 => FizzBuzz
//Não é Divisivel por 3 e 5 => entrada
//Não é um número => 'Não é um número'

const resultado = fizzBuzz();
console.log(resultado);

function fizzBuzz(entrada) {
    if (typeof entrada !== 'number'){
        return 'Não é um número';
    }
    if ( entrada % 3 === 0 && entrada % 5 === 0 ) {
        return 'FizzBuzz';
    }
    if ( entrada % 3 === 0 ) {
        return 'Fizz';
    }
    if (entrada % 5 === 0 ) {
        return 'Buzz';
    } else {
        return entrada;
    }

}