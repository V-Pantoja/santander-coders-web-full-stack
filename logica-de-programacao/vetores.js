/* Vetor é uma sequência ordenada de valores. Também é chamado pelo nome em inglês, array. É denotado pelo uso de colchetes, com os valores separados por vírgula. */
let vetor = [10, 20, 30, 40, 50];
console.log(vetor[2]);

// Mudando o valor guardado
vetor[3] = "Diamante";
console.log(vetor[3]);

/* Também é possível declarar o vetor vazio e ir adicionando pela posição os elementos: */
let alunos = [];

alunos[0] = "Pedro";
alunos[1] = "Alice";
alunos[5] = "Samuel";

console.log(alunos);

/* Exemplo de percorrer um vetor (usando o laço For) */
let iVetor = [2, 4, 6, 8, 10, 12];

for (let indice = 0; indice < iVetor.length; indice++) {
   console.log(iVetor[indice]);
}

// ou de uma maneira mais simples:
for (let indice2 of iVetor) {
   console.log(indice2);
}

/* Matriz */
let matriz = [
   [1, 2, 3],
   [4, 5, 6],
   [7, 8, 9],
];

// Percorrer matriz:
for (let linha of matriz) {
   for (let elemento of linha) {
      console.log(elemento);
   }
}
