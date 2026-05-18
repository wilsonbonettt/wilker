const readline = require('readline');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

console.log('--- TERMINAL DA TABUADA INTELIGENTE ---');

rl.question('Digite o número base: ', (num) => {
    let numero = parseInt(num);

    if (isNaN(numero)) {
        console.log('Erro: Você deve digitar um número válido.');
        rl.close();
        return;
    }

    console.log('\nEscolha a operação:');
    console.log('1 - Multiplicação (*)');
    console.log('2 - Soma (+)');
    console.log('3 - Divisão (/)');
    
    rl.question('Opção: ', (opcao) => {
        rl.question('Número inicial da tabuada: ', (inicio) => {
            rl.question('Número final da tabuada: ', (fim) => {
                
                let nInicio = parseInt(inicio);
                let nFim = parseInt(fim);
                let op = parseInt(opcao);

                console.log('\n--- RESULTADO ---');

                for (let i = nInicio; i <= nFim; i++) {
                    let resultado;
                    let simbolo;

                    if (op === 1) {
                        resultado = numero * i;
                        simbolo = 'x';
                    } else if (op === 2) {
                        resultado = numero + i;
                        simbolo = '+';
                    } else if (op === 3) {
                        // Evita divisão por zero se necessário, embora aqui o foco seja a lógica
                        resultado = (numero / i).toFixed(2);
                        simbolo = '/';
                    }

                    // Lógica para verificar PAR ou ÍMPAR (conforme o objetivo da atividade)
                    let parOuImpar = "";
                    if (resultado % 2 === 0) {
                        parOuImpar = "PAR";
                    } else {
                        parOuImpar = "ÍMPAR";
                    }

                    console.log(numero + ' ' + simbolo + ' ' + i + ' = ' + resultado + ' -> ' + parOuImpar);
                }

                rl.close();
            });
        });
    });
});
