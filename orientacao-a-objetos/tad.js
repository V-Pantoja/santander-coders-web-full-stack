/* Um objeto é detonado pela abertura de chaves, os atributos são pares chave-valor separados por dois pontos (:) e os métodos são funções. */
const pessoa = {
   nome: "Alexandra",
   idade: 26,
   sexo: "Feminino"
};

console.log(pessoa.sexo);

// função dentro do objeto sem a necessidade de passar parametros (pois vai ser usado os dados do objeto)
const quadrado = {
   base: 10,
   altura: 20,
   calculaArea: function(){return this.base * this.altura}
};

console.log(quadrado.calculaArea());
