import React, { useState, useEffect } from 'react';

function Relog({ hora }) {
  return (
    <h3>{hora}</h3>
  )
}

export default function RelogHooks(props) {

  const [hora, setHora] = useState(new Date().toLocaleTimeString());
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    console.log("Fase de Montaje");
    let temporizador;

    if (visible) {
      temporizador = setInterval(() => { setHora(new Date().toLocaleTimeString()) }, 1000);
    } else {
      clearInterval(temporizador);
    }

    return () => {
      console.log("Fase de Desmontaje");
      clearInterval(temporizador);
    };

  }, [visible]);  

  return (
    <>
      <h2>Relog con Hooks</h2>
      {visible && <Relog hora={hora} />}
      <button onClick={() => setVisible(true)}>inicar</button>
      <button onClick={() => setVisible(false)}>detener</button>
    </>
  )
}