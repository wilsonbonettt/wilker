// --- app.js COMPLETO E CORRIGIDO ---

console.log("Carregando módulos do sistema...");

// Caminhos corrigidos: usando ./ porque a pasta trunk está dentro de ws
const linhaDeComando = require("./trunk/code/interface/linhaDeComando");
const agendaBO = require("./trunk/code/agendaBO");
const eventoBO = require("./trunk/code/eventoBO");

console.log("Sucesso! Todos os arquivos foram encontrados.");

 linhaDeComando.menuDeOpcoes(); // Chame sua função de início aqui se necessário