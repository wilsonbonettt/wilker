/** 
 * @file linhaDeComando.js 
 * @layer Interface (CLI) 
 * @description Gerencia a navegação, o estado do sistema e a integração VO/BO. 
 */ 
 
const input = require("./lc/input");
const output = require("./lc/output");
const professorVO = require("../valueobjects/professorVO");
const eventoBO = require("../eventoBO");
const agendaBO = require("../agendaBO");
const agendaVO = require("../valueobjects/agendaVO");

    
/** 
 * Função Principal de Navegação 
 readline.question("Digite o nome do evento: ", (entrada) => { 
 */ 
async function menuDeOpcoes() { 
    output.info("..:: SGAP - Sistema Gestor de Aulas e Professores ::.."); 
 
    let nomeUsuario = await input.perguntar("Identifique-se para iniciar a operação: "); 
    output.sucesso(`Bem-vindo, arquiteto(a) ${nomeUsuario}!`); 
 
    const listaDeOpcoes = [ 
        "Ver Escala Semanal (Listagem)", 
        "Reservar Horário (Cadastro Validado)", 
        "Sair do Sistema" 
    ]; 
 
    let opcao = 0; 
 
    do { 
        output.listar("Painel de Controle", listaDeOpcoes); 
        let entrada = await input.perguntar("Selecione uma opção (1-3): "); 
        opcao = entrada; 
 
        switch (opcao) { 
            case "1": 
                // Fase 5: Aciona a Maestria da Automação (Loops Aninhados) 
                agendaBO.listarAgendaCompleta(); 
                break;
                     case "2": 
                // Fase 4: Implementação da Inserção Validada e RN1 
                output.info("--- Iniciar Reserva de Horário ---"); 
 
                let profNome = await input.perguntar("Nome do Professor: "); 
 
                // Combate ao Logic Leak: Conversão explícita para Number 
                let h = parseInt(await input.perguntar("Índice do Horário (0 a 3): ")); 
                let d = parseInt(await input.perguntar("Índice do Dia (0 a 4): ")); 
 
                // Validação de Limites da Matriz (Soberania Lógica) 
                if (isNaN(h) || isNaN(d) || h < 0 || h > 3 || d < 0 || d > 4) { 
                    output.erro("Coordenadas inválidas! Use apenas números dentro da grade."); 
                } else { 
                    // Consulta ao BO antes de qualquer escrita na matriz (RN1) 
                    // Passamos o novo nome e o que já existe na célula da matriz 
                    let dadoAtual = agendaVO.gradeSemanal[h][d]; 
 
                    if (eventoBO.validarConflito(profNome, dadoAtual ? dadoAtual.nomeProfessor : null)) { 
                        // Gravação na Matriz (Endereçamento em RAM) 
                        agendaVO.gradeSemanal[h][d] = { nomeProfessor: profNome }; 
                        output.sucesso(`Professor ${profNome} alocado na posição [${h}][${d}].`); 
                    } 
                } 
                break; 
 
            case "3": 
                output.info("Encerrando a operação e salvando estado..."); 
                opcao = "sair"; 
                break; 
 
            default: 
                output.erro("Opção inexistente. Tente novamente."); 
                break; 
        } 
    } while (opcao !== "sair"); 
} 

module.exports = { menuDeOpcoes };





