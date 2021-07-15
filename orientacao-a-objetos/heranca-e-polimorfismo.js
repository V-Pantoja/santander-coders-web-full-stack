// Classe "Pai"
class Pessoa {
   constructor(nome, idade) {
      this.nome = nome;
      this.idade = idade;
   }
}

// A palavra extends denota a herança(atributos e metodos) e a palavra super refere-se a super classe que foi herdada.
class Cidadao extends Pessoa {
   constructor(nome, idade, rg, cpf) {
      super(nome, idade);
      this.rg = rg;
      this.cpf = cpf;
   }
}
const cidadao = new Cidadao('Lucas', 28, '02001', '455100');
console.log(cidadao instanceof Pessoa);
