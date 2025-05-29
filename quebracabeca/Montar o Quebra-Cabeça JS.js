Código 1
let idade = prompt("Digite sua idade:")
let categoria= 0

if (idade >= 60) {
    categoria="idosa"
}else if (idade > 18 && idade < 60){
    categoria = "adulta"
}else if(idade > 12 && idade <= 18){
    categoria= "adolescente"
}else if (idade < 12){
    categoria = "criança"
}else{
    idade = "inválida"
    categoria = "inválida"
}
console.log("Idade final:" + idade)
console.log("Categoria:" + categoria)










Código 2
let idade = prompt("Digite sua idade:")
let voto = 0

if (+idade >= 18 && +idade < 70) {
  console.log("Voto obrigatório.");
} else if (+idade >= 16 && +idade < 18) {
  console.log("Voto facultativo.");
} else if (+idade >= 70) {
  console.log("Voto facultativo.");
} else {
  console.log("Não vota.");
}

/*//Código 3 let numero = Number(prompt("Digite um número:")) if (numero > 0) { console.log("Positivo") }else if (numero === 0){ console.log("Zero") }else if (numero < 0){ console.log("Negativo") }else{ console.log("Número invalido") }*/ /*//Código 4 let combustivel = prompt("Digite o tipo de combustível:").toLowerCase() if (combustivel === "gasolina"){ console.log("Você escolheu Gasolina") }else if (combustivel === "alcool" || combustivel === "alcool"){ console.log("Voce escolheu alcool") }else if (combustivel === "diesel"){ console.log("Voce escolheu diesel") }else { console.log("Opção invalida") }*/ /*/





Código 4
/*//Código 4 let combustivel = prompt("Digite o tipo de combustível:").toLowerCase() if (combustivel === "gasolina"){ console.log("Você escolheu Gasolina") }else if (combustivel === "alcool" || combustivel === "alcool"){ console.log("Voce escolheu alcool") }else if (combustivel === "diesel"){ console.log("Voce escolheu diesel") }else { console.log("Opção invalida") }*/ /*/




/Código 5 let velocidade = Number(prompt("Digite sua velocidade:")) if (velocidade > 60 && velocidade <= 80){ console.log("Atenção") }else if (velocidade > 0 && velocidade <= 60){ console.log("Dentro do limite") }else if (velocidade > 80){ console.log("Multado") }else{ console.lo("Velocidade invalida") }*/

