import React from "react";

// Compomente creado con clase
// no se usa mucho apartir de la llegade de los Hooks
/*
class Componente extends Component {
    render() {
        return <h2>{this.props.msg + "Soy un componente basado en Clase"}</h2>
    }
}
*/

// Componente funcional
/*
function Componente(props) {
    return (
        <h2>
            {props.msg + "Funcional basado en Funcion explicita"}
        </h2>
    );
}
*/

// con funcion no declarada, Expresada
const Componente = props => {
    return (
        <h2>
            {props.msg + "Funcional expresado desde una prop"}
        </h2>
    );
};

export default Componente;