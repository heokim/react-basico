import React, { Component } from 'react';

class Relog extends Component {

  render() {
    return (
      <h3>{this.props.hora}</h3>
    )
  }

  componentWillUnmount() {
    console.log(3, "El componente Relog a sido eliminado del DOM");
  }
}

export default class CicloVida extends Component {

  constructor(props) {
    super(props);
    console.log(0, "El componente se inicializa, aún NO esta en el DOM")

    this.state = {
      hora: new Date().toLocaleTimeString(),
      visible: false,
    }

    this.temporizador = null;
  }

  // se ejecuta cuando el componente se encuentra de el DOM
  componentDidMount() {
    console.log(1, "El componente ya se encuentra en el DOM");
  }

  // se ejecuta cada vez que se renderia, este puede resivir
  componentDidUpdate(prevProps, prevState) {
    console.log(2, "El estado o las props del componente han cambiado");
    console.log(prevProps);
    console.log(prevState);
  }

  // se ejecuta cuando de quitar el componente del DOM
  componentWillUnmount() {
    console.log(3, "El componente CicloVida a sido eliminado del DOM");
  }

  // metodo para setear temporizador
  tictac = (e) => {
    this.temporizador = setInterval(() => {
      this.setState({
        hora: new Date().toLocaleTimeString(),
      })
    }, 1000);
  }

  // inicia el temporizador
  iniciar = (e) => {
    this.tictac();
    this.setState({
      visible: true,
    })
  }

  // para el intervalo del temporizador
  detener = (e) => {
    clearInterval(this.temporizador);
    this.setState({
      visible: false,
    })
  }

  render() {

    console.log(4, "El componente se dibuja (o redibuja por algun cambio) en el DOM")

    return (
      <>
        <h2>Ciclo de Vida de los Componentes de Clase</h2>
        {this.state.visible && <Relog hora={this.state.hora} />}
        <button onClick={this.iniciar}>inicar</button>
        <button onClick={this.detener}>detener</button>
      </>
    )
  }
}