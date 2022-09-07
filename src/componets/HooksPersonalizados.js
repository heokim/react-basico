import React, { useState, useEffect } from 'react';
import { useFetch } from '../hooks/useFetch';

export default function HooksPersonalizados(props) {

  let url = "https://pokeapi.co/api/v2/pokemon/";

  //console.log(useFetch());

  let { data, isPending, error } = useFetch(url);

  return (
    <>
      <h2> HooksPersonalizados</h2>
      <h3>isPending: {JSON.stringify(isPending)}</h3>
      <h3>
        Error: <mark>{JSON.stringify(error)}</mark>
      </h3>
      <h3>
        <pre style={{whiteSpace:"pre-wrap"}}>
          <code>{JSON.stringify(data)}</code>
        </pre>
      </h3>

    </>
  )
}