// Falsy => todos os valores que são:
//undefined
//null
//0
//false
//''
//NaN -> not a number (valores invalidos)

// Truthy

let corPersonalizada = '';
let corPadrao = 'azul';
let corPerfil = corPersonalizada || corPadrao;

console.log(corPerfil);
