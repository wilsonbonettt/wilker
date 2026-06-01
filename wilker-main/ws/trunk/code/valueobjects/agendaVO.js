/** 
* @file agendaVO.js 
* @description Matriz bidimensional para a grade semanal (Horas x Dias). 
*/ 
// Definição da estrutura da agenda 
const diasSemana = ["Segunda", "Terça", "Quarta", "Quinta", "Sexta"]; 
const horarios = ["08:00", "09:00", "10:00", "11:00"]; 
// A matriz é a "Fonte Única da Verdade" para a visão da agenda 
let gradeSemanal = [ 
[null, null, null, null, null], // 08:00 
[null, null, null, null, null], // 09:00 
[null, null, null, null, null], // 10:00 
[null, null, null, null, null]  // 11:00 
]; 
module.exports = { 
gradeSemanal, 
diasSemana, 
horarios 
};
