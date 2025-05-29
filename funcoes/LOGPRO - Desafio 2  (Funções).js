let user = prompt("Digite o user: ") let password = prompt("digite a senha: ") let mensagem function validacao(user,password) { if (user === "miranha && pasword === "2428"){ mensagem = "Login realizado com sucesso" }else{ mensagem = "Login invalido, usuario ou senha invalido" } } validacao(user, password) console.log(mensagem)
 
let user = prompt("Digite o user:");
let password = prompt("Digite a senha:");
let mensagem;
 
function validacao(user, password) {
  switch (user) {
	case "Miranha":
  	switch (password) {
    	case "2428": mensagem = "Login realizado com sucesso"; break;
    	default: mensagem = "Senha incorreta"; break;
  	}
  	break;
	case "Fernanda":
  	switch (password) {
    	case "123": mensagem = "Login realizado com sucesso"; break;
    	default: mensagem = "Senha incorreta"; break;
  	}
      break;
	case "Igor":
  	switch (password) {
    	case "4282": mensagem = "Login realizado com sucesso"; break;
    	default: mensagem = "Senha incorreta"; break;
  	}
  	break;
	case "Gabrielly":
  	switch (password) {
    	case "senha1": mensagem = "Login realizado com sucesso"; break;
    	default: mensagem = "Senha incorreta"; break;
  	}
  	break;
	case "Maria":
  	switch (password) {
    	case "m123": mensagem = "Login realizado com sucesso"; break;
 	   default: mensagem = "Senha incorreta"; break;
  	}
  	break;
	case "Geovanna":
  	switch (password) {
    	case "p321": mensagem = "Login realizado com sucesso"; break;
    	default: mensagem = "Senha incorreta"; break;
  	}
  	break;
	case "Valéria":
  	switch (password) {
    	case "j000": mensagem = "Login realizado com sucesso"; break;
    	default: mensagem = "Senha incorreta"; break;
  	}
  	break;
	case "Irineu":
  	switch (password) {
   	 case "r999": mensagem = "Login realizado com sucesso"; break;
    	default: mensagem = "Senha incorreta"; break;
  	}
  	break;
	case "Gerson":
  	switch (password) {
    	case "sof123": mensagem = "Login realizado com sucesso"; break;
    	default: mensagem = "Senha incorreta"; break;
  	}
  	break;
	case "fatima":
  	switch (password) {
    	case "leo321": mensagem = "Login realizado com sucesso"; break;
    	default: mensagem = "Senha incorreta"; break;
  	}
  	break;
	default:
  	mensagem = "Usuário não encontrado";
  }
}
 
validacao(user, password);
console.log(mensagem);

