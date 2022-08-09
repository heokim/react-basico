import React, { useState } from 'react';

export default function ContadorHooks(props) {

  // console.log(useState());

  const [contador, setContador] = useState(0);

  const sumar = () => {
    setContador(contador + 1);
  }

  const restar = () => {
    setContador(contador - 1);
  }

  return (
    <>
      <h2>Hooks - useState</h2>
      <p>{props.titulo}</p>
      <h3>{contador}</h3>
      <nav>
        <button onClick={sumar}>+</button>
        <button onClick={restar}>-</button>
      </nav>
    </>
  )
}


// propiedades por defectos
ContadorHooks.defaultProps = {
  titulo: "Clicks",
}