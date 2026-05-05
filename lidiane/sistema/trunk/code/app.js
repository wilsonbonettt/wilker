/**
* Sistema Gestor de Aulas e Professores
* Escopo: Gerir a reserva de espaços para aulas,
* combinando a disponibilidade do professor em horarios e dias,
* RN1: Nenhum professor pode estar em dois lugares ao mesmo tempo
* RF1: Precisamos apresentar uma agenda semanal completa contendo,
* dia da semana, horario, professor e disciplina.
* Observação: Objetos mínimos: Professor, Sala, Evento.
* RF2: Sistema precisa ser multiplataforma.
*/
const interfaceLC = require("./interface/linhaDeComando");
const interfaceWEB = require("./interface/WEB");
async function main(){
//apresentar na tela menu de opções ao usuario
var interface = process.argv[2];
if(interface == 0){
//chamar interfaceWEB
}else{
interfaceLC.menuDeOpcoes();
}
//inicialmente linha de comando
/** evoluindo para web usando ejs, com
bootstrap personalizado a criterio do aluno
*/
}
main();