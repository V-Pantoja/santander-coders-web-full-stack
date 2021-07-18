import React from "react";
import ReactDOM from "react-dom";
import AppCompSimples from "./components/AppCompSimples";
import AppProps from "./components/AppProps";
import AppEstado from "./components/AppEstado";
import AppCondicional from "./components/AppCondicional";
import AppCicloDeVida from "./components/AppCicloDeVida";
import AppRenderDeListas from "./components/AppRenderDeListas";
import {AppCompAninhados, Item} from "./components/AppCompAninhados";
import AppFormulario from "./components/AppFormulario";
import reportWebVitals from "./reportWebVitals";

ReactDOM.render(
  <React.StrictMode>
    <AppCompAninhados>
      <Item key={999} id={999} completo={false}>
        Teste1
      </Item>

      Teste3NaoDeveAparecerNaTela

      <Item key={9988} id={9988} completo={true}>
        Teste2
      </Item>
    </AppCompAninhados>

    <AppFormulario>
      
    </AppFormulario>
  </React.StrictMode>,
  document.getElementById("root")
);

reportWebVitals();
