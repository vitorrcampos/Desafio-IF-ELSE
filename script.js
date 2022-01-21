

let idade = 17

if (idade >= 18){
    console.log("Parabéns, você tem 18 anos ou mais!")
} else{
    console.log("Você ainda não tem 18 anos!")
}

let humano = true

if (idade >= 18 && humano == true) {
    console.log("A condição deu true")
} else{
   console.log("A condição deu false")
}


let mes = "Maio"

if (mes === "Dezembro" || mes === "Janeiro") { console.log("seu aniversário é em dezembro ou janeiro") }
else{
    console.log(`seu aniversário é em ${mes}` )
}



//*** Exercícios bônus
//4 - Criar uma condição que exiba uma mensagem no console se seu nome começar com a letra R

let nome = "João"

if(nome.substring(0,1) === "E"){
    console.log("Seu nome começa com a letra E")
}else{
    console.log("Seu nome não começa com a letra E")
}

//5 - Criar uma condição que exiba uma mensagem no console se seu sobrenome tenha mais de 6 letras OU seu nome começar com a letra E

let sobrenome = "Vitor"

if (sobrenome.length > 6 || nome.substring(0,1) === "E"){
    console.log("Seu nome começa com a letra E ou seu sobrenome tem mais de 6 letras")
}else{ console.log("Seu nome não começa com a letra E ou seu sobrenome não tem mais de 6 letras")}