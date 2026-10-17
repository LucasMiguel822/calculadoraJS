let digitoA
let digitoB
let a = 0
let b = 0
let operacao
let resultado
let test = 1
let igual = document.querySelector('.igual')
let um = document.querySelector('.um')
let dois = document.querySelector('.dois')
let tres = document.querySelector('.tres')
let quatro = document.querySelector('.quatro')
let cinco = document.querySelector('.cinco')
let seis = document.querySelector('.seis')
let sete = document.querySelector('.sete')
let oito = document.querySelector('.oito')
let nove = document.querySelector('.nove')
let zero = document.querySelector('.zero')
let adicao = document.querySelector('.adicao')
let subtracao = document.querySelector('.subtracao')
let multiplicacao = document.querySelector('.multiplicacao')
let divisao = document.querySelector('.divisao')
let display = document.querySelector('.display')

um.addEventListener('click', um1)

function um1(){

    digitoA = 1

    if(test == 1){
        a = a * 10 + digitoA
        display.textContent = a
    } else {
        digitoB = 1
        b = b * 10 + digitoB
        display.textContent = a + " " + operacao + " " + b
    }
}


dois.addEventListener('click', dois1)

function dois1(){

    digitoA = 2

    if(test == 1){
        a = a * 10 + digitoA
         display.textContent = a 
    } else {
        digitoB = 2
        b = b * 10 + digitoB
         display.textContent = a + " " + operacao + " " + b
    }
}


tres.addEventListener('click', tres1)

function tres1(){

    digitoA = 3

    if(test == 1){
        a = a * 10 + digitoA
         display.textContent = a 
    } else {
        digitoB = 3
        b = b * 10 + digitoB
         display.textContent = a + " " + operacao + " " + b
    }
}


quatro.addEventListener('click', quatro1)

function quatro1(){

    digitoA = 4

    if(test == 1){
        a = a * 10 + digitoA
         display.textContent = a 
    } else {
        digitoB = 4
        b = b * 10 + digitoB
         display.textContent = a + " " + operacao + " " + b
    }
}


cinco.addEventListener('click', cinco1)

function cinco1(){

    digitoA = 5

    if(test == 1){
        a = a * 10 + digitoA
         display.textContent = a 
    } else {
        digitoB = 5
        b = b * 10 + digitoB
         display.textContent = a + " " + operacao + " " + b
    }
}


seis.addEventListener('click', seis1)

function seis1(){

    digitoA = 6

    if(test == 1){
        a = a * 10 + digitoA
         display.textContent = a 
    } else {
        digitoB = 6
        b = b * 10 + digitoB
         display.textContent = a + "" + operacao + "" + b
    }
}


sete.addEventListener('click', sete1)

function sete1(){

    digitoA = 7

    if(test == 1){
        a = a * 10 + digitoA
         display.textContent = a 
    } else {
        digitoB = 7
        b = b * 10 + digitoB
         display.textContent = a + "" + operacao + "" + b
    }
}


oito.addEventListener('click', oito1)

function oito1(){

    digitoA = 8

    if(test == 1){
        a = a * 10 + digitoA
         display.textContent = a 
    } else {
        digitoB = 8
        b = b * 10 + digitoB
         display.textContent = a + " " + operacao + " " + b
    }
}


nove.addEventListener('click', nove1)

function nove1(){

    digitoA = 9

    if(test == 1){
        a = a * 10 + digitoA
         display.textContent = a 
    } else {
        digitoB = 9
        b = b * 10 + digitoB
         display.textContent = a + " " + operacao + " " + b
    }
}


zero.addEventListener('click', zero1)

function zero1(){

    digitoA = 0

    if(test == 1){
        a = a * 10 + digitoA
         display.textContent = a
    } else {
        digitoB = 0
        b = b * 10 + digitoB
         display.textContent = a + " " + operacao + " " + b
    }
}


adicao.addEventListener('click', adicao1)

function adicao1(){

    operacao = '+'
    test = 2
     display.textContent = a + " " + operacao 

}


subtracao.addEventListener('click', subtracao1)

function subtracao1(){

    operacao = '-'
    test = 2
     display.textContent = a + " " + operacao

}


multiplicacao.addEventListener('click', multiplicacao1)

function multiplicacao1(){

    operacao = 'x'
    test = 2
     display.textContent = a + " " + operacao 

}


divisao.addEventListener('click', divisao1)

function divisao1(){

    operacao = '÷'
    test = 2
     display.textContent = a + " " + operacao 
}

igual.addEventListener('click', igual1)

function igual1(){
    if(operacao == '+'){
        resultado = a + b
        console.log(resultado)

        display.textContent = resultado
    }

    else if(operacao == '-'){
        resultado = a - b
        console.log(resultado)

        display.textContent = resultado
    }

    else if(operacao == 'x'){
        resultado = a * b
        console.log(resultado)

        display.textContent = resultado
    }

    else if(operacao == '÷'){
        resultado = a / b
        console.log(resultado)

        display.textContent = resultado
    }
}