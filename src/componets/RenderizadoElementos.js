import React, { Component } from "react";
import data from "../helpers/data.json";

function ElementoLista(props) {
  return (
    <li>
      <a href={props.web} >{props.name}</a>
    </li>
  )
}

export default class RenderizadoElementos extends Component {

  constructor(props) {
    super(props);
    this.state = {
      seasons: ['Primavera', 'Verano', 'Otoño', 'Invierno'],
    }
  }

  render() {

    console.log(data);

    return (
      <div>
        <h2>Renderizado de Elementos</h2>
        <h3>Estaciones del año</h3>
        <ol>
          {this.state.seasons.map((e, index) => <li key={index}>{e}</li>)}
        </ol>
        <h3>Frameworks Front-End Java Scripts</h3>
        <ul>
          {
            data.frameworks.map((e) => (
              <ElementoLista
                key={e.id}
                name={e.name}
                web={e.web}
              />
            ))
          }
        </ul>
      </div>
    )
  };
}