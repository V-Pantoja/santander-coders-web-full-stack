/* Filter é uma função de alta ordem semelhante ao map, a diferença é que o objetivo do filter é filtrar elementos do vetor. Portanto a função passada para o deve receber o elemento e retornar um booleano. Se retorna true o elementor será mantido, senão retirado. */

const vetor = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

// A const pares vai receber pelo filter os valores pares(divisiveis por dois) da const vetor.
const pares = vetor.filter(x => x % 2 === 0);
//ou
const valorPares = vetor.filter(function(x){return x % 2 === 0});

console.log(pares);
console.log(valorPares);
