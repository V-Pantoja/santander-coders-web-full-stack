import React, {useState} from 'react';


/* useState é uma função que produz um vetor, na primeira posição vem uma referência ao estado que você acabou de criar. Na segunda posição vem uma função que permite modificar o estado. Se desejar um valor padrão inicial, ele pode ser passado por parâmetro na chamada do useState. */
export default function App() {
  const [nome, setNome] = useState('');

  return (
    <>
      Nome: <input type="text" value={nome} onChange={(event) => setNome(event.target.value)} />
      <br/>
      Olá {nome}
    </>
  );
}