import React from "react";
import ReactDOM from "react-dom";
import AppCompSimples from "./components/AppCompSimples";
import AppProps from "./components/AppProps";
import AppEstado from "./components/AppEstado";
import AppCondicional from "./components/AppCondicional";
import AppCicloDeVida from "./components/AppCicloDeVida";
import reportWebVitals from "./reportWebVitals";

ReactDOM.render(
  <React.StrictMode>
    <AppCicloDeVida />
    
  </React.StrictMode>,
  document.getElementById("root")
);

reportWebVitals();
