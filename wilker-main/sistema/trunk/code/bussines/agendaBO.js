/**
* @file agendaBO.js
* @layer Business Object (BO)
* @description Transforma a matriz bruta em uma agenda visual para o usuário.
*/
const output = require("../interface/lc/output");
const agendaVO = require("../model/agendaVO");
/**
* Percorre a matriz (Horas x Dias) para exibir a escala completa.
* Demonstra proficiência em endereçamento de memória RAM.
*/
function listarAgendaCompleta() {
output.info("--- ESCALA SEMANAL DE AULAS ---");
// Loop externo: percorre os horários (linhas da matriz)
for (let i = 0; i < agendaVO.horarios.length; i++) {
let linhaDaAgenda = `${agendaVO.horarios[i]} | `;
// Loop aninhado: percorre os dias (colunas da matriz)
for (let j = 0; j < agendaVO.diasSemana.length; j++) {
let evento = agendaVO.gradeSemanal[i][j];
// Tratamento de dados nulos (células vazias)
let descricao = evento ? evento.nomeProfessor : "[LIVRE]";
linhaDaAgenda += `${agendaVO.diasSemana[j].substring(0,3)}: ${descricao} | `;
}
console.log(linhaDaAgenda);
}
}
module.exports = {
listarAgendaCompleta
};