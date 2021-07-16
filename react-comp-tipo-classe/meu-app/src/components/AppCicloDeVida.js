import React from "react";

class AppCicloDeVida extends React.Component {
  constructor(props) {
    super(props);
    this.state = {nome: undefined, txtNome: ''};
  }

  changetxtName = (event) => {
    this.setState({txtNome: event.target.value});
  }

  // Vamos usar o método para procurar no sessionStorage do navegador se ele tem um valor para o nome.
  componentDidMount = () => {
    const nome = sessionStorage.getItem('nome');
    if (nome) this.setState({nome});
  }

  // Vamos aproveitar para colocar o nome no sessionStorage quando o usuário clicar no botão:
  persistName = () => {
    this.setState({nome: this.state.txtNome});
    sessionStorage.setItem('nome', this.state.txtNome);
  }

  render() {

    const renderForm = () => {
      return (
        <>
        Nome: <input type="text" value={this.state.nome} onChange={this.changetxtName}/>
        <button onClick={this.persistName}>Salvar</button>
        </>
      );
    }

    const renderTxt = () => {
      return(
        <>
          <p>Olá {this.state.nome}</p>
        </>
      );
    }

    return !this.state.nome ? renderForm() : renderTxt();

  }
}

export default AppCicloDeVida;
