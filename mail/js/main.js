
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

const userMail= prompt('Ineririsci la tua email:');
let result= false;

for( let i = 0; i < casualMail.length; i++){
    
    if(casualMail[i] === userMail){
        result = true;
    }
}

if(result === true){
    console.log('La mail inserita è corretta!')
    alert('La mail inserita è corretta!')
} else{
    console.log('Spiacente, la mail inserita non corrisponde, riprova.')
    alert('Spiacente, la mail inserita non corrisponde, riprova.');
}