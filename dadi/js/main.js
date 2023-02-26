'use strict';

const button= document.querySelector('button');
const userNum= Math.round(Math.random() * 6);
const comNum= Math.round(Math.random() * 6);

console.log(userNum);
console.log(comNum);

button.addEventListener('click',
function(){

document.getElementById("user").innerHTML = userNum;
document.getElementById("computer").innerHTML = comNum;

if(userNum < comNum){
    document.getElementById("result").innerText = ("you loose!");
    console.log('AHI, AHI, AHI...SPIACENTE, HAI PERSO! RITENTA.');
    
    

} else if(comNum < userNum){
    document.getElementById("result").innerText = ("you win!!!");
    console.log('YEP!! COMPLIMENTI, HAI VINTO!!!');
    
    
} else{
    console.log("MANNAGGIA, MANNAGGIA! IL RISULTATO E' PARI...GIOCA DI NUOVO!");
    document.getElementById("result").innerText = ("sorry, retry...");
}

})