//CREO UNA FUNZIONE CHE GENERI UN NUMERO CASUALE
function generaterandomnumber (low, high) {
    
    const randomnumber = Math.floor(Math.random() * high) + low;

    return randomnumber;
}

//GENERO UNA FUNZIONE PARI O DISPARI
function evenorodd (num1, num2){

    return (num1 + num2) % 2 == 0;
}

// DICHIARO IL VALORE MINIMO E MASSIMO
let minimum = 1;

let maximum = 5;

//CHIEDO IL NUMERO ALL'UTENTE
let usernumber;

do{

    usernumber = prompt('inserisci un numero da ' + minimum + ' a ' + maximum)

}while(usernumber < 1 || usernumber > 5 || isNaN(usernumber))

//GENERO UN NUMERO CASUALE CON LA FUNZIONE
const mynumber = generaterandomnumber(minimum, maximum);


//CREO LE FUNZIONI DEI TASTI PARI O DISPARI
const even = document.getElementById("even");

even.addEventListener(
    "click",
    function () {
        
        //document.getElementById('mynumber').innerHTML = mynumber;

        if(evenorodd(usernumber, mynumber)){

            document.getElementById('risultato').innerHTML = 'Hai Vinto!!'
        
        }else if(evenorodd(usernumber, mynumber)){

            document.getElementById('risultato').innerHTML = 'Hai Perso!!' 
        }
    }
)

const odd = document.getElementById("odd");

odd.addEventListener(
    "click",
    function () {
        
        //document.getElementById('mynumber').innerHTML = mynumber;

        if(evenorodd(usernumber, mynumber)){

            document.getElementById('risultato').innerHTML = 'Hai Perso!!'
            
        }else if(evenorodd(usernumber, mynumber)){
            
            document.getElementById('risultato').innerHTML = 'Hai Vinto!!' 
        }
    }
)