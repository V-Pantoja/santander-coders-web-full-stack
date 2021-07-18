import React from 'react';
import ReactDOM from 'react-dom';
import AppCompFunc from './components/AppCompFunc';
import AppHookDeEstado from './components/AppHookDeEstado';
import AppHookDeEfeitos from './components/AppHookDeEfeitos';
import reportWebVitals from './reportWebVitals';

ReactDOM.render(
  <React.StrictMode>
    <AppCompFunc text="Hellooo!"> </AppCompFunc>

    <AppHookDeEstado></AppHookDeEstado>

    <AppHookDeEfeitos></AppHookDeEfeitos>
  </React.StrictMode>,
  document.getElementById('root')
);

reportWebVitals();
