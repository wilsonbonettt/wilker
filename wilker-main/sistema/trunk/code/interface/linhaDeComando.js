/**
* @author Professor Wilker
* @todo Criar menu de opções
* @todo Importar arquivo de entrada
* @todo Importar arquivo de saida
* @todo Exportar menu de opções.
*/
const input = require("./lc/input");
const output = require("./lc/output");
async function menuDeOpcoes(){
output.info("..Interface LC..");
let nome = await input.perguntar("Digite seu nome: ");
output.sucesso(`Bem vindo, ${nome}!`);
const listaDeOpcoes = [
"Listar Professores",
"Cadastrar Professores",
"Sair"
]
let opcoes = 0;
do{
output.info("\n Escolha uma das opções: ");
output.listar("Menu de Opções..." , listaDeOpcoes);
opcoes = await input.perguntar("Digite o número da opção:");
switch (opcoes) {
case "1":
output.info("Opção 1, Listando Professores...");
break;
case "3":
output.info("Opção 3, Sair...");
opcoes = 0;
break;
default:
console.log("Escolha uma opção do menu.");
break;
}
}while(opcoes != 0);
}
module.exports = {
menuDeOpcoes
};