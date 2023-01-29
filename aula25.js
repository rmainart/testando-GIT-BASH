// Criar uma função que exibe a quantidade de * 
// que aquela linha possui

exibirAteriscos(10);

function exibirAteriscos(linhas){
    // let padrao = '';
    // for (let linha = 1; linha <= linhas; linha++){
    //     padrao += '*';    
    //     console.log(padrao)
    // }

    for (linha = 1; linha <= linhas; linha++){
        let padrao = '';
        for (let i = 0; i <= linha; i++){
            padrao += '*';
        }
        console.log(padrao);
    }
}