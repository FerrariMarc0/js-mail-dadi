'use strict';

const userNum= Number(prompt('Scegli un numero da 1 a 6:'));
const comNum= Math.round(Math.random() * 6);

console.log(userNum);
console.log(comNum);

if(userNum < comNum){
    console.log('AHI, AHI, AHI...SPIACENTE, HAI PERSO! RITENTA.');
    alert('AHI, AHI, AHI...SPIACENTE, HAI PERSO! RITENTA.');

} else if(comNum < userNum){
    console.log('YEP!! COMPLIMENTI, HAI VINTO!!!');
    alert('YEP!! COMPLIMENTI, HAI VINTO!!!');
    
} else{
    console.log("MANNAGGIA, MANNAGGIA! IL RISULTATO E' PARI...GIOCA DI NUOVO!");
    alert("MANNAGGIA, MANNAGGIA! IL RISULTATO E' PARI...GIOCA DI NUOVO!");
}
