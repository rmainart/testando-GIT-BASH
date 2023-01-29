// Criar um método para ler proprieades de um objeto e 
// exibir somente as propriedades do tipo string que estão nesse objeto


const filme = {
    titulo: 'Vingadores',
    ano: 2018,
    diretor: 'Robin',
    personagem: 'Thor'
}

exibirPropriedades(filme);

function exibirPropriedades(obj){
    for (prop in obj){
        if (typeof obj[prop] === 'string'){  // prop -> só mostra a propriedade
            // obj[prop] -> mostra o conteudo da propriedade
            console.log(prop,obj[prop])
        }
    }

}