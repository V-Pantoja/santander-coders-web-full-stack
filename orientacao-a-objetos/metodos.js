/* Métodos dão aos nossos objetos o poder de executar códigos, o que chamamos de comportamento há algumas aulas. Tudo o que você aprendeu em lógica de programação até o momento pode ser utilizado dentro dos métodos (e somente dentro dos métodos) quando estamos no contexto orientado a objetos. */

class Quadrado{
   constructor(base, altura){
      //condição
      if(isNaN(base) || isNaN(altura)) throw "Base e altura precisam ser números";

      this.base = base;
      this.altura = altura;
      this.cor = undefined;
   }
   calcularArea() {
      return this.base * this.altura;
   }
   duplicaBase() {
      this.base = 2 * this.base;
   }
   imprimir() {
      return `<div style='width:${this.base}px; height:${this.altura}px; background-color:${this.cor || "blue"}'></div>`;
   }
}
const quadrado = new Quadrado(11, 15);
quadrado.duplicaBase();

console.log(quadrado.calcularArea());
