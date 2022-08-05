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