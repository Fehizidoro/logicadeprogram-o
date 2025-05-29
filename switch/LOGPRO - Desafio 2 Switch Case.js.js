let idioma = prompt("Digite o idioma (pt, en, es):")
switch (idioma) {
  case "pt":
    console.log("Olá!")
    break
  case "en":
    console.log("Hello!")
    break
  case "es":
    console.log("Hola!")
    break
  default:
    console.log("Idioma não encontrado.")
}

// Exercício 2 - Dia da semana
Exercício 2: Escreva um código que exiba os dias da semana com base no número fornecido (1 para domingo, 2 para segunda-feira, etc.).
let dia = prompt("Digite o número do dia da semana (1-7):")
switch (dia) {
  case "1":
    console.log("Domingo")
    break
  case "2":
    console.log("Segunda-feira")
    breakJazz
  case "3":
    console.log("Terça-feira")
    break;
  case "4":
    console.log("Quarta-feira")
    break;
  case "5":
    console.log("Quinta-feira")
    break;
  case "6":
    console.log("Sexta-feira")
    break;
  case "7":
    console.log("Sábado")
    break;
  default:
    console.log("Dia inválido.")
}

// Exercício 3 – Transporte
Exercício 3: Escreva um script que exiba diferentes tipos de transporte com base no número fornecido (1 para carro, 2 para bicicleta, 3 para ônibus, etc.).
let transporte = prompt("Digite o número do transporte (1-Carro, 2-Bicicleta, 3-Ônibus):")
switch (transporte) {
  case "1":
    console.log("Carro")
    break;
  case "2":
    console.log("Bicicleta")
    break
  case "3":
    console.log("Ônibus")
    break
  default:
    console.log("Transporte inválido.")
}

// Exercício 4 – Urgência
Exercício 4: Desenvolva um programa que classifique diferentes níveis de urgência com base em um número fornecido (1 para baixa, 2 para média, 3 para alta).
let urgencia = prompt("Digite o nível de urgência (1-Baixa, 2-Média, 3-Alta):")
switch (urgencia) {
  case "1":
    console.log("Baixa")
    break
  case "2":
    console.log("Média")
    break
  case "3":
    console.log("Alta")
    break
  default:
    console.log("Nível de urgência inválido.")
}

// Exercício 6 - Categoria do veículo
Exercício 6: Crie um código que exiba diferentes tipos de veículos com base na categoria (compacto, SUV, caminhão).
let categoriaVeiculo = prompt("Digite a categoria do veículo (compacto, SUV, caminhão):")
switch (categoriaVeiculo) {
  case "compacto":
    console.log("Veículo compacto")
    break
  case "SUV":
    console.log("Veículo SUV")
    break;
  case "caminhão":
    console.log("Caminhão")
    break
  default:
    console.log("Categoria inválida.")
}

// Exercício 7 - Tarifa de estacionamento
Exercício 7: Desenvolva um programa que calcule diferentes tarifas de estacionamento com base na duração do tempo estacionado.
let tempo = prompt("Digite o tempo de estacionamento (em horas):")
let tarifa

tempo = parseFloat(tempo)

if ((tempo)) {
  console.log("Tempo inválido.")
  switch (true) {
    case tempo <= 1:
      tarifa = 5
      break
    case tempo <= 2:
      tarifa = 10
      break
    case tempo > 2:
      tarifa = 15
      break
  }
  console.log("Tarifa: R$"(tarifa))
}
// Exercício 8 - Dificuldade de jogo
Exercício 8: Escreva um script que exiba diferentes níveis de dificuldade em jogos com base no número fornecido (1 para fácil, 2 para médio, 3 para difícil).
let dificuldade = prompt("Digite o nível de dificuldade (1-Fácil, 2-Médio, 3-Difícil):")
switch (dificuldade) {
  case "1":
    console.log("Fácil")
    break
  case "2":
    console.log("Médio")
    break
  case "3":
    console.log("Difícil")
    break
  default:
    console.log("Nível de dificuldade inválido.")
}

// Exercício 9 - Serviço da academia
Exercício 9: Crie um código que determine diferentes tipos de serviços oferecidos por uma academia com base na categoria (aula de yoga, musculação, personal trainer).
let servico = prompt("Digite o serviço (yoga, musculação, personal):")
switch (servico) {
  case "yoga":
    console.log("Aula de yoga")
    break
  case "musculação":
    console.log("Musculação")
    break
  case "personal":
    console.log("Personal trainer")
    break
  default:
    console.log("Serviço inválido.")
}

// Exercício 10 – Ingresso
Exercício 10: Escreva um script que exiba diferentes preços de ingressos para um evento com base na categoria escolhida (estudante, meia entrada, inteira).
let categoriaIngresso = prompt("Digite a categoria do ingresso (estudante, meia, inteira):")
switch (categoriaIngresso) {
  case "estudante":
    console.log("R$10")
    break
  case "meia":
    console.log("R$15")
    break
  case "inteira":
    console.log("R$30")
    break
  default:
    console.log("Categoria inválida.")
}

// Exercício 11 - Instrumentos por gênero musical
Exercício 11: Desenvolva um programa que exiba diferentes tipos de instrumentos musicais com base no gênero musical.
let genero = prompt("Digite o gênero musical (Rock, Samba, Jazz):")
switch (genero) {
  case "Rock":
    console.log("Guitarra elétrica")
    break
  case "Samba":
    console.log("Pandeiro")
    break
  case "Jazz":
    console.log("Saxofone")
    break
  default:
    console.log("Gênero musical não reconhecido.")
}

// Exercício 12 - Cursos por área de tecnologia
Exercício 12: Crie um código que exiba diferentes tipos de cursos oferecidos em uma escola de tecnologia com base na área (front-end, back-end, mobile).
let area = prompt("Digite a área (front-end, back-end, mobile):")
switch (area) {
  case "front-end":
    console.log("Curso de HTML, CSS e JavaScript")
    break
  case "back-end":
    console.log("Curso de Node.js e bancos de dados")
    break
  case "mobile":
    console.log("Curso de desenvolvimento de apps")
    break
  default:
    console.log("Área não reconhecida.")
}

// Exercício 13 - Habilidade em esportes por idade
Exercício 13: Desenvolva um programa que determine diferentes níveis de habilidade em esportes com base na idade do atleta.
let idade = prompt("Digite a idade do atleta:");

switch (idade) {
  case "5":
  case "6":
  case "7":
  case "8":
  case "9":
  case "10":
  case "11":
  case "12":
    console.log("Iniciante")
    break

  case "13":
  case "14":
  case "15":
  case "16":
  case "17":
  case "18":
    console.log("Intermediário")
    break

  default:
    console.log("Avançado")
    break
}

// Exercício 14 - Dificuldade em desafios matemáticos
Exercício 14: Escreva um script que exiba diferentes níveis de dificuldade em desafios matemáticos com base na categoria (básico, intermediário, avançado).
let desafio = prompt("Digite a categoria do desafio (básico, intermediário, avançado):")
switch (desafio) {
  case "básico":
    console.log("Desafios com operações simples.")
    break
  case "intermediário":
    console.log("Desafios com frações e porcentagens.")
    break
  case "avançado":
    console.log("Desafios com álgebra e lógica.")
    break
  default:
    console.log("Categoria inválida.")
}
