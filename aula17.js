// For..In

const pessoa = {
    nome: 'Rafael', // nome : key - Rafael: value
    idade: 28
};
// key-value
for ( let chave in pessoa) {
    console.log(chave,pessoa['nome']);
}

const cores = ['Vermelho', 'Azul', 'Verde'];

for ( let indice in cores) {
    console.log(indice,cores[indice]);
}

// For..Of -> mostra diretamente os indices

for (let cor of cores){
    console.log(cor);
}