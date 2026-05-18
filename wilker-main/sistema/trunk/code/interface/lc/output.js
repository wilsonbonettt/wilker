/**
* Responsabilidade:
* -Exibir informações no terminal
* -Não contém lógica de negocio
*
* Reuso futuro:
* -Pode ser substituido por logs, interface web ou app mobile
* -Padroniza mensagens do sistema inteiro
*/
function sucesso(mensagem){
console.log(`Sucesso: ${mensagem}`);
}
function erro(mensagem){
console.log(`Erro: ${mensagem}`);
}
function info(mensagem){
console.log(`Info: ${mensagem}`);
}
function listar(titulo, itens){
console.log(`\n Lista: ${titulo}`)
itens.forEach((item, i) => {
console.log(`${i + 1}.`, item);
});
}
module.exports = {
sucesso,
erro,
info,
listar
}