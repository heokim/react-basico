import React, { Component } from 'react';

export class EventosES6 extends Component {
  constructor(props) {
    super(props);
    this.state = {
      contador: 0,
    }

    // enlazamos el this dentro de las funciones sumar y restar, con el this del componente
    this.sumar = this.sumar.bind(this);
    this.restar = this.restar.bind(this);
  }

  sumar(e) {
    console.log("Sumando");
    this.setState({
      contador: this.state.contador + 1
    })
  }

  restar(e) {
    console.log("Restando");
    this.setState({
      contador: this.state.contador - 1
    })
  }

  render() {
    return (
      <div>
        <h2>Eventos en Componentes de Clase ES6</h2>
        <nav>
          <button onClick={this.sumar}>+</button>
          <button onClick={this.restar}>-</button>
        </nav>
        <h3>{this.state.contador}</h3>
      </div>
    )
  }
}

// Properties Initializer, ES7+
export class EventosES7 extends Component {
  // no es necesario el contructor, asi tam

  // para el estado no hace falta usar el this.state, sino directo un objeto state
  state = {
    contador: 0,
  }

  // para evitar el bindeo usamos arrows functions para las funciones, ya que las arrows functions heredan el "this" del contexto en el que estan
  sumar = (e) => {
    console.log("Sumando");
    this.setState({
      contador: this.state.contador + 1
    })
  }

  restar = (e) => {
    console.log("Restando");
    this.setState({
      contador: this.state.contador - 1
    })
  }

  render() {
    return (
      <div>
        <h2>Eventos en Componentes de Clase ES7</h2>
        <nav>
          <button onClick={this.sumar}>+</button>
          <button onClick={this.restar}>-</button>
        </nav>
        <h3>{this.state.contador}</h3>
      </div>
    )
  }
}

// Componente personalizado, de prueba
// variante: nomal
// function Boton(props) {
//   return <button onClick={props.myOnClick}>Botón hecho componente</button>
// }
// variante: usando arrow funtions
// const Boton = (props) => {
//   return <button onClick={props.myOnClick}>Botón hecho componente</button>
// }
// variante: anterior + usando la tecnica de estructuracion del objeto
const Boton = ({ myOnClick }) => {
  return <button onClick={myOnClick}>Botón hecho componente</button>
}


export class MasSobreEventos extends Component {

  handleClick = (e, mensaje) => {
    console.log(e); // impresion del evento, es un objeto de React llamado: SyntheticBaseEvent, leer mas en la ducumentacion de react para ver los eventos que soporta este
    console.log(e.nativeEvent); // es para obtener el evento nativo de Js
    console.log(e.target);// objeto en el que esta incrustado el evento.
    console.log(e.nativeEvent.target);

    console.log('mensaje: ' + mensaje);
  }

  render() {
    return (
      <div>
        <h2>Más Sobre Eventos</h2>
        <button onClick={(e) => this.handleClick(e, "Hola, pasando parametro desde un evento")}>Saludar</button>

        {/* Evento personalizado */}
        {/* <Boton onClick={(e) => this.handleClick(e, "Evento desde otro componente")} /> // este no va a andar*/}
        <Boton myOnClick={(e) => this.handleClick(e, "Evento desde otro componente")} />
      </div>
    )
  }
}