import React from 'react'; // esto por si es corremos sobre React Js < 16.0
import logo from './logo.svg';
import './App.css';
import Componente from './componets/Componente';
import Propiedades from './componets/Propiedades';
import Estado from './componets/Estado';
import RenderizadoCondicional from './componets/RenderizadoCondicional';
import RenderizadoElementos from './componets/RenderizadoElementos';
import { EventosES6, EventosES7, MasSobreEventos } from './componets/Eventos';
import ComunicacionComponentes from './componets/ComunicacionComponentes';
import CicloVida from './componets/CicloVida';
import AjaxApis from './componets/AjaxApis';
import ContadorHooks from './componets/ContadorHooks';
import ScrollHooks from './componets/ScrollHooks';
import RelogHooks from './componets/RelogHooks';
import AjaxHooks from './componets/AjaxHooks';
import HooksPersonalizados from './componets/HooksPersonalizados';
import Referencias from './componets/Referencias';
import Formularios from './componets/Formularios';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <a className="App-link" href="https://reactjs.org" target="_blank" rel="noopener noreferrer">
          Leer Documentacion Oficial de React
        </a>
        <hr style={{ width: "500px" }} />
        <a className="App-link" href="https://youtube.com/playlist?list=PLvq-jIkSeTUZ5XcUw8fJPTBKEHEKPMTKk" target="_blank" rel="noopener noreferrer">
          Aprender React Js Youtube Playlist de Jonmircha
        </a>
        <section>

          {/* <Componente msg="Hola soy un Componente "></Componente>
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
          <hr />
          <RenderizadoElementos />
          <hr />
          <EventosES6 />
          <hr />
          <EventosES7 />
          <hr />
          <MasSobreEventos />
          <hr />
          <ComunicacionComponentes />
          <hr />
          <CicloVida />
          <hr />
          <AjaxApis /> 
          <hr />
          <ContadorHooks />
          <hr />
          <ScrollHooks />
          <hr />
          <RelogHooks />
          <hr />
          <AjaxHooks />
          <hr />
          <HooksPersonalizados />
          <hr />
          <Referencias />*/}
          <hr />
          <Formularios />
        </section>
        <br />
        <br />
      </header>


    </div>
  );
}

export default App;
