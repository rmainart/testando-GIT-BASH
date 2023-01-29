// Operador Lógico ou (||)
//retorna TRUE se um dos operandos forem true

console.log(false || true);
let maiorDeIdade = false;
let possuiCarteiraDeTrabalho = true;
let podeAplicar = maiorDeIdade ||  possuiCarteiraDeTrabalho;

console.log('Pode aplicar: ',podeAplicar);

// Operador Lógico não ou not (!)
//retorna TRUE se um dos operandos fo

let candidatoRecusado = !podeAplicar;
console.log('Candidato recusado: ',candidatoRecusado);