// Factory / Functions



const celular = {
    marcaCelular : 'ASUS',
    tamanhoTela : {
        vertical : 155,
        horizontal : 75
    },
    capacidadeBateria : 5000,
    ligar : function(){
        console.log('Fazer ligação...');
    }
}

// Factory comeca abaixo

function criarCelular(marcaCelular, tamanhoTela, capacidadeBateria){
    return {
        marcaCelular : marcaCelular,
        tamanhoTela, // pode deixar em branco também
        capacidadeBateria,
        ligar(){
            console.log('Fazer ligação...');
        }
    }
}

const celular1 = criarCelular('Samsung', 5.5, 5000);
console.log(celular1);