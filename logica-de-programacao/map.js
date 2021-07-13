/* Função map() função é usada para transformar vetores. Passamos uma função para o Map, e essa função é aplicada a cada item do vetor. */
const vetor1 = ["10", "20", "30"];

// conversão do valor para Integer(inteiro)
const stringToInt = (x) => parseInt(x);

// map() vai pegar cada valor do vetor1 e usar na função stringToInt, convertendo-os de string para integer, Adicionando na nova const segundoVetor.
const segundoVetor = vetor1.map(stringToInt);
console.log(segundoVetor);


/* Para provar que os valores foram modificados para numéricos, elevaremos ao quadrado. */

// Pode-se aplicar a funcionalidade dentro da função map():
const aoQuadrado = segundoVetor.map(x => x * x);
console.log(aoQuadrado);
