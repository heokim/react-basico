import React, { useState, useEffect } from 'react';

function Pokemon({ avatar, name }) {
  return (
    <figure>
      <img src={avatar} alt={name} />
      <figcaption>{name}</figcaption>
    </figure>
  )
}

export default function AjaxHooks(props) {

  const [pokemons, setPokemons] = useState([])
  /*
  version de AjaxApis.js adaptado asi mismo

  useEffect(() => {

    let url = "https://pokeapi.co/api/v2/pokemon/";

    fetch(url)
      .then((res) => res.json())
      .then((json) => {
        //console.log(json);
        json.results.forEach((el) => {
          fetch(el.url)
            .then((res) => res.json())
            .then((json) => {
              //console.log(json);
              let pokemon = {
                id: json.id,
                name: json.name,
                avatar: json.sprites.front_default,
              };

              setPokemons((pokemons) => [...pokemons, pokemon])
            });
        });
      });
  }, [])
  */

  // nuevo codigo para hacer fetch funcional
  useEffect(() => {

    /* NO es recomendable pasar una funcion ASYNC a un HOOK, 
     si se necesita usarlo, cree una asincrona dentro del HOOK y ejecutela */

    const getPokemons = async (url) => {
      let res = await fetch(url), json = await res.json();

      json.results.forEach(async (el) => {
        let res = await fetch(el.url), json = await res.json();
        //console.log(json);
        let pokemon = {
          id: json.id,
          name: json.name,
          avatar: json.sprites.front_default,
        };

        setPokemons((pokemons) => [...pokemons, pokemon])
      });
    }

    getPokemons("https://pokeapi.co/api/v2/pokemon/");

  }, []);

  return (
    <>
      <h2>Peticiones Asincronas en Hooks</h2>

      {pokemons.length === 0 ? (
        <h3>Cargando...</h3>) : (
        pokemons.map(el => (
          <Pokemon key={el.id} name={el.name} avatar={el.avatar} />
        )))}
    </>
  )
}