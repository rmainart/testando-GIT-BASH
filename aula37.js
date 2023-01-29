// Objeto postagem do blog

// Eu quero que voce crie neste execicio um objeto de postagem de blog que vai conter as seguintes propriedades.

// postagem
/*
titulo
mensagem
autor
visualizações
comentarios
    (autor,mensagem)
estaAoVivo
*/

let postagem = {
    titulo: 'a',
    mensagem: 'b',
    autor: 'c',
    visualizacoes: 10,
    comentarios: [
        { autor: 'a', mensagem: 'b'},
        { autor: 'a', mensagem: 'b'}
    ],
    estaoAoVivo: true
}

console.log(postagem);
