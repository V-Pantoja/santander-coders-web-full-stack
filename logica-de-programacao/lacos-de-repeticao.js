let count = 1;

/* O while é a estrutura que executa um código enquanto uma condição for verdadeira. */
while (count <= 100) {
   console.log(count);
   count += 1;
   //ou count++;
}

count = 0;

/* Do-While, onde primeiro se executa o código e depois é verificado a condição para continuar executando ou não. */
do {
   console.log(count);
   count++;
} while (count <= 15);

/* O For é uma estrutura de repetição que é executado um número específico de vezes. Nele é declarado ou não uma variável com um valor inicial, depois é determinado a condição de parada e por fim o passo dado entre o valor inicial e o final. */
for (let numero = 1; numero <= 50; numero++) {
   console.log(numero);
}
