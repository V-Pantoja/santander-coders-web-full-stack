/* Recebendo uma Função como Parâmetro */
const somar = (a, b) => a + b;
const subtrair = (a, b) => a - b;
const aplicarOperacao = (a, b, operacao) => operacao(a,b);

const resultado1  = aplicarOperacao(1,2,somar);
const resultado2 = aplicarOperacao(1,2,subtrair);

/* Retornando Funções */
const somarX = (x) => (y) => x + y;
const somar2 = somarX(2);

console.log(somar2(5)); // X = 2 e Y = 5
// retorna 7
