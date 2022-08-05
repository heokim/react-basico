import React, { Component } from 'react';

export default class Eventos extends Component {
  constructor(props) {
    super(props);
    this.state = {
      contador: 0,
    }

    // enlazamos el this dentro de las funciones sumar y restar, con el this del componente
    this.sumar = this.sumar.bind(this);
    this.restar = this.restar.bind(this);
  }

  sumar(event) {
    console.log("Sumando");
    this.setState({
      contador: this.state.contador + 1
    })
  }

  restar(event) {
    console.log("Restando");
    this.setState({
      contador: this.state.contador - 1
    })
  }

  render() {
    return (
      <div>
        <h2>Eventos en Componentes de Clase</h2>
        <nav>
          <button onClick={this.sumar}>+</button>
          <button onClick={this.restar}>-</button>
        </nav>
        <h3>{this.state.contador}</h3>
      </div>
    )
  }
}