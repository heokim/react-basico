import React, { Component } from 'react';

export default class Padre extends Component {

  state = {
    contador: 0,
  }

  incrementearContador = (e) => {
    this.setState({ contador: this.state.contador + 1 })
  }

  render() {
    return (
      <>
        <h2>Comunicación entre Componentes</h2>
        <p>
          Contador <b>{this.state.contador}</b>
        </p>
        <Hijo mensaje="mensaje para el hijo 1" />
        <Hijo mensaje="mensaje para el hijo 2" incrementearContador={this.incrementearContador} />
      </>
    )
  }
}

function Hijo(props) {
  return (
    <>
      <h3>{props.mensaje}</h3>
      <button onClick={props.incrementearContador} >+</button>
    </>
  )
}