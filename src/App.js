import React from 'react'; // esto por si es corremos sobre React Js < 16.0
import logo from './logo.svg';
import './App.css';
import Componente from './componets/Componente';
import Propiedades from './componets/Propiedades';
import Estado from './componets/Estado';
import RenderizadoCondicional from './componets/RenderizadoCondicional';

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
          <hr />
          <Propiedades
            cadena="Esto de una cadena de Texto"
            numero={19}
            booleano={true}
            arreglo={[1, 2, 3, 4]}
            objeto={{ nombre: "Andres", correo: "andresssshk@gmail.com" }}
            funcion={num => num * num}
            elementoReact={<i>Esto es un elemento react</i>}
            componenteReact={<Componente msg="Soy un componente pasado desde las props, " />}
          />
          <hr />
          <Estado />
          <hr />
          <RenderizadoCondicional />
        </section>
        <br />
        <br />
      </header>


    </div>
  );
}

export default App;
