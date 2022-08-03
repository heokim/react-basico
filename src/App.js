import React from 'react'; // esto por si es corremos sobre React Js < 16.0
import logo from './logo.svg';
import './App.css';
import Componente from './componets/Componente';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
        <section>
          <Componente msg="Hola soy un Componente "></Componente>
        </section>
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
      </header>


    </div>
  );
}

export default App;
