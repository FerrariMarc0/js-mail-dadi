'use strict';

const casualMail= [
    'alberto@gmail.com', 
    'vittoria@live.it', 
    'agatino@outlook.com', 
    'gaetano@protonmail.com', 
    'gae@outlook.com', 
    'taniot@gmx.com', 
    'giovanni@yahoo.com', 
    'rosa@email.it', 
    'Eugenia@libero.it', 
    'giulia@gmail.com', 
    'alex@live.it', 
    'cribbio@outlook.com'
]

const userMail= document.getElementById('inputmail');
const button= document.getElementById('go');
const alErt= document.getElementById('negative');
const userList= document.getElementById('select');
const openList= document.getElementById('list');
let result= false;

openList.addEventListener('click',
function(){
    userList.classList.toggle('selection');
})
    
button.addEventListener('click',
function(){

    const userMailValue = userMail.value;
    
for( let i = 0; i < casualMail.length; i++){

    if(casualMail[i] === userMailValue){
        result = true;
    }
}

if(result === true){
    console.log("LA MAIL INSERITA E' CORRETTA!");
    alert("LA MAIL INSERITA E' CORRETTA!");
} else{
    console.log('SPIACENTE, LA MAIL INSERITA NON CORRISPONDE');
    alErt.classList.toggle('error');
}
})

