/**
* Responsabilidade:
* -Ler dados do terminal
* -Não contem regra de negocio
* -Não sabe nada sobre professores, salas ou aulas
*
* Reuso futuro:
* -Pode ser usado em qualquer sistema CLI
* -Pode ser substituido por API ou interface grafica sem quebrar o
resto do sistema
*/
const readline = require("readline");
function criarInterface(){
return readline.createInterface({
input: process.stdin,
output: process.stdout
})
}
function perguntar(pergunta){
const rl = criarInterface();
return new Promise((resolve) => {
rl.question(pergunta, (resposta) => {
rl.close();
resolve(resposta);
})
})
}
module.exports = {
perguntar
}