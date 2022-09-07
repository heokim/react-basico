import { useState, useEffect } from "react";

export const useFetch = (url) => {
  const [data, setData] = useState(null);
  const [isPending, setIsPending] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const getData = async (url) => {
      try {
        let res = await fetch(url); // hacemos la peticion a la URL

        // si la respuesta tuvo un error, capturamos el error, sino continuamos
        if (!res.ok) {
          throw {
            err: true,
            status: res.status,
            statusText: !res.statusText ? "ocurrio un error!" : res.statusText
          };
        }

        let data = await res.json();

        setIsPending(false);
        setData(data);
        setError({ err: false });

      } catch (err) {
        setError(err);
        setIsPending(true);
      }
    };

    getData(url);

  }, [url]);

  return { data, isPending, error };
};
