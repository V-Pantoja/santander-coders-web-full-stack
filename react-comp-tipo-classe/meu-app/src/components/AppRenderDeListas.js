/* Muitas vezes temos listas para renderizar usando React. Para fazer isso podemos decidir por duas abordagens quanto às listas: 
A primeira é renderizar os items usando HTML simples.
A segunda é criar um componente que será usado como item da lista.
Ambas tem vantagens e desvantagens. */

import React from 'react';

class AppRenderDeListas extends React.Component {

  constructor(props) {
    super(props);

    this.state = {
      itens: ["item1", "item2", "item3", "item4"]
    }

    this.state2 = {
      itens2: [
        {id: 1, nome: 'item1', completo: false},
        {id: 2, nome: 'item2', completo: true},
        {id: 3, nome: 'item3', completo: true},
        {id: 4, nome: 'item4', completo: false},
      ]
    }
  }

  render() {
    return (
      <>
        <ul>
          {this.state.itens.map((item, indice) => <li key={indice}>{item}</li>)}

          {this.state2.itens2.map((itens2) => (
            <Iten key={itens2.id} completo={itens2.completo}>
              {itens2.nome}
            </Iten>
          ))}
        </ul>
      </>
    );
  }
}

class Iten extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {

    const textDecoration = this.props.completo ? 'line-through' : 'none';
    return (
      <>
        <li data-id={this.props.id} style={{textDecoration}}>
          {this.props.children}
        </li>
      </>
    );
  }
}

export default AppRenderDeListas;
