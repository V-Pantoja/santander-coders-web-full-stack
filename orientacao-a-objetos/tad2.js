const agenda = {
   contatos: [
      {nome: 'contato1', telefone: 001, email: 'email-1@teste.com'},
      {nome: 'contato2', telefone: 002, email: 'email-2@teste.com'},
      {nome: 'contato3', telefone: 003, email: 'email-3@teste.com'},
      {nome: 'contato4', telefone: 004, email: 'email-4@teste.com'}
   ],
   adicionar: function(contato) {this.contatos.push(contato)}
   // O metodo push() adiciona um elemento ao final de um vetor.
   // Observe que para nos referirmos a um atributo ou método do objeto de dentro dele mesmo precisamos usar o prefixo this para saber que é algo que pertence ao objeto e não alguma variável declarada previamente.
};

console.log(agenda.contatos);
