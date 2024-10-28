let val1 = document.getElementById('valor1');
let val2 = document.getElementById('valor2');


function soma(){
    let res = document.getElementById('total');
    soma = parseFloat(val1.value) + parseFloat(val2.value);
    res.value = soma;
}

function substracao(){
    let res = document.getElementById('total');
    substracao = parseFloat(val1.value) - parseFloat(val2.value);
    res.value = substracao;
}

function multiplica(){
    let res = document.getElementById('total');
    multiplica = parseFloat(val1.value) * parseFloat(val2.value);
    res.value = multiplica;
}

function divide(){
    let res = document.getElementById('total');
    let divide = parseFloat(val1.value) / parseFloat(val2.value);
    res.value = divide;
}

function porcento(){
    let res = document.getElementById('total');
    let porcento = parseFloat(val1.value) / parseFloat(val2.value);
    res.value = porcento;
}

function valorPi(){
    let res = document.getElementById('total');
    const VALORPI = 3.14159;
    res.value = VALORPI;
}

function divideInt(){
    let res = document.getElementById('total');
    let divideInt = parseInt(val1.value) / parseInt(val2.value);
    res.value = parseInt(divideInt);
}

function factorial(){
    let res = document.getElementById('total');
    let valorFact = parseInt(val1.value)
    if ((valorFact == 0) | (valorFact==1)){
        res.value = 1;
    }else{
        let fact = 1
        for (let i=1; i<=valorFact;i++){
            fact = fact * i;
        }
        res.value = fact;
    }
}


