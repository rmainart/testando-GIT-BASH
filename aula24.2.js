// Exercicio Nota Escolar
// Obter a média a partir de uma array

// 00 - 59: F
// 60 - 69: D
// 70 - 79: C
// 80 - 89: B
// 90 - 100: A

const array = [70, 70, 80];

console.log(mediaDoAluno(array));

function mediaDoAluno(notas){
    const media = calcularMedia(notas);
    
    if (media <= 59){
        return 'F';
    }
    if (media <= 69){
        return 'D';
    }
    if (media <= 79){
        return 'C';
    }
    if (media <= 89){
        return 'B';
    } else { 
        return 'A';
    }

}

function calcularMedia(array){
    let somaMedia = 0;
    for (let valor of array){
        somaMedia += valor;
    }
    return somaMedia/(array.length);  // .length -> tamanho do array

}