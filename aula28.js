// camelCase umDoiTresQuatro
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

// Construtor
// Pascal case UmDoisTresQuatro

function Celular(marcaCelular, tamanhoTela, capacidadeBateria){
    this.marcaCelular = marcaCelular,
    this.tamanhoTela = tamanhoTela,
    this.capacidadeBateria = capacidadeBateria,
    this.ligar = function(){
        console.log("Fazendo ligação...");
    }
    
}

const celular = new Celular('Samsung', 5.5,5000);
console.log(celular);