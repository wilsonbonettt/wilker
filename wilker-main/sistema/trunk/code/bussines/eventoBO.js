/**
* @file eventoBO.js
* @layer Business Object (BO)
* @description Implementa a Regra de Ouro (RN1): impede conflitos de horários.
*/
const output = require("../interface/lc/output");
/**
* RN1: Valida se há colisão de professores no mesmo espaço e tempo.
* @param {string} horarioNovo
* @param {string} horarioExistente
* @returns {boolean} True se autorizado, False se houver conflito.
*/
function validarConflito(horarioNovo, horarioExistente) {
// Implementação de Condicionais Complexas (Fase 4)
if (horarioNovo === horarioExistente) {
output.erro("CONFLITO DETECTADO: Este professor já possui um evento neste horário!");
return false; // Bloqueia a reserva
} else {
output.sucesso("Horário disponível. Reserva autorizada.");
return true; // Autoriza o fluxo
}
}
module.exports = {
validarConflito
};