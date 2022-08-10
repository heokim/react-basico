import React, { useEffect, useState } from 'react'

export default function ScrollHooks(props) {

  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    console.log("Moviendo el Scroll");
    const detectarScroll = () => setScrollY(window.pageYOffset);
    window.addEventListener("scroll", detectarScroll)

    return () => {
      window.removeEventListener("scroll", detectarScroll)
      console.log("Fase de Desmontaje");
    }
  }, [scrollY]);

  // componentDidMount
  useEffect(() => {
    console.log("Fase de Montaje");
  }, []);

  // componentDidUpdate
  useEffect(() => {
    console.log("Fase de Actualizacion");
  });

  // componentDidUnMount,
  useEffect(() => {

    // detecta automaticamente que se esta desmontanto cuando tiene un return
    return () => {
      console.log("Fase de Desmontaje");
    };
  });

  return (
    <>
      <h2>Hooks - useEffect y el Ciclo de Vida</h2>
      <p>Scroll Y del Navegador {scrollY}px</p>
    </>
  )
}