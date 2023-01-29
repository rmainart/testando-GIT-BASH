//  If...Else

// se a hora estiver entre as 6 horas até 12:00 : Bom dia !
// se estiver entre 12:00 até 18:00 : Boa tarde!
// Caso contrário : Boa noite!

let hora = 13;

if (hora > 6 && hora < 12){
    //codigo a ser executado
    console.log('Bom dia!');
}
else if (hora < 18){
    // codigo a ser executado
    console.log('Boa tarde!');
}
else{
    //codigo a ser executado
    console.log('Boa noite!');
}