const tryuserword = prompt('inserisci una parola');

polidroma(tryuserword);

function polidroma(userword) {
    
    let arrayword = [];

    for (let i = 0; i < userword.length; i++){
    
        arrayword.push(userword[i]);
    }

    let newarrayword = [];

    for(let i = 0; i < userword.length; i++){

        newarrayword.push(userword[i]);
    }

    let revarrayword = newarrayword.reverse()

    if(revarrayword.toString() == arrayword.toString()){
    
        return alert('la tua parola è polidroma')
    }else{
    
        return alert('la tua parola non è polidroma')
    }
}


