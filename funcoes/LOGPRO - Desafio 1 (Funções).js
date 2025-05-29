let num1 = Number (prompt("digite um numero: ")
let num2 = Number (prompt("Digite o segundo numero: ")
let operacao = prompt("qual a operação? digite apenas simbolos: ")
let resultado
function soma(num1,num2){
    return resultado = num1 + num2
}
function subtracao(num1,num2){
    return resultado = num1 - num2
}
function multiplicação(num1,num2){
    resultado = num1 * num2
}
function divisao(num1,num2){
    return resultado = num1 / num2
    
}
switch (operacao) {
    case "+":
        resultado = soma(num1, num2)
        break
        case "-":
            resultado = subtracao(num1, num2)
            break
            case "*":
            resultado = multiplicacao(num1, num2)
            break
            case "/":
            resultado = divisao(num1, num2)
            break
            default:
            resultado = "Inválido"
            break
}
console.log("O resultado é:", resultado)

