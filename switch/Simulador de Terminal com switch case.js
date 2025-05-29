let comando = prompt("Digite o programa desejado: ")

if (comando == "Linux") {
  console.log("mkdir, ls, cd, cd.., rm, clear, cp, mv, cat, echo")

  let comando = prompt("Digite o comando desejado")

  switch (comando) {
    case "Ls":
      console.log("Para aparecer as pastas presentes no seu usuário")
      break
    case "mkdir":
      console.log("Para criar um novo diretório (pasta)")
      break
    case "cd":
      console.log("Para acessar uma pasta")
      break
    case "cd ..":
      console.log("Serve para voltar para a pasta acessada anteriormente")
      break
    case "rm":
      console.log("Serve para remover os arquivos e diretórios")
      break
    case "clear":
      console.log("É usado para limpar os comandos executados anteriormente")
      break
    case "cp":
      console.log("Copiar um arquivo")
      break
    case "mv":
      console.log("Para mover um arquivo")
      break
    case "cat":
      console.log("Para mostrar o texto escrito dentro do arquivo")
      break
    case "echo":
      console.log("Serve para criar um arquivo dentro da pasta")
      break
    default:
      console.log("Comando Linux não reconhecido")
  }

} else if (comando == "CMD") {
  console.log("mkdir, dir, cd, cd.., del, cls, echo, copy, move, rmdir, exit")

  let comando = prompt("Digite o comando desejado: ")

  switch (comando) {
    case "Dir":
      console.log("Para aparecer as pastas presentes no seu usuário")
      break
    case "mkdir":
      console.log("Para criar um novo diretório (pasta)")
      break
    case "cd":
      console.log("Para acessar uma pasta")
      break
    case "cd ..":
      console.log("Serve para voltar para a pasta acessada anteriormente")
      break
    case "del":
      console.log("Serve para excluir os arquivos do diretório")
      break
    case "cls":
      console.log("É usado para limpar os comandos executados anteriormente na sua tela")
      break
    case "echo":
      console.log("Exibir mensagens no terminal ou mostrar variáveis")
      break
    case "copy":
      console.log("Usado para copiar arquivos de um diretório para o outro")
      break
    case "move":
      console.log("Usado para mover arquivos")
      break
    case "rmdir":
      console.log("Remover diretórios vazios")
      break
    case "exit":
      console.log("Exit para fechar o prompt de comando ou scripts e sessões de terminal")
      break
    default:
      console.log("Comando CMD não reconhecido")
  }

} else {
  console.log("Erro de sistema")
}
