// Criar função somar que retorna a 
// soma de todos os multiplos de 3 e 5
// Multiplos de 3 -> 3,6,9
// Multiplos de 5 -> 5,10
// resultado 33
somar(10);

function somar(limite){
    let somaM = 0;
    for (let i = 1; i <= limite; i++){
        if (i % 3 === 0 || i % 5 === 0 ){
            somaM = somaM + i; // somaM += i, pode ser usado assim tambem.
        }
    }
    console.log(somaM);
}