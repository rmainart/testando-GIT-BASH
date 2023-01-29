// Escreva uma função que usa 2 numeros e retorna o maior entre eles. 

let valorMaior = max(10,10);
console.log(valorMaior);

function max(n1,n2){

if ( n1 > n2){
    return n1;
} else return n2;
}

let valorMaior2 = max2(10,10);
console.log(valorMaior2);

function max2(n1,n2){
    
    return n1>n2 ? n1 : n2 ; 
}