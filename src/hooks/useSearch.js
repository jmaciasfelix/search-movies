import { useState, useEffect } from "react";
//constant
import { apiKeyMovieDb, endpointMovieDb } from "../constant";
//hooks
import { useLocalStorage } from "./useLocalStorage";

export const useSearch = () => {
  const [search, setSearch] = useState("");
  const [result, setResult] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);
  //TODO Use key user fireBase or use sessionStorage [https://ed.team/blog/que-es-y-como-utilizar-localstorage-y-sessionstorage]
  const [, setValue] = useLocalStorage("result", "");

  useEffect(() => {
    if (search) {
      setLoading(true);
      fetch(
        `${endpointMovieDb}/search/movie?api_key=${apiKeyMovieDb}&language=en-US&query=${search}&page=1&include_adult=false`
      )
        .then((response) => response.json())
        .catch((error) => {
          console.error("ERROR THEMOVIEDB ", error);
          setError(true);
          setLoading(false);
        })
        .then(({ results }) => {
          setError(false);
          setLoading(false);

          const films = results.map(({ id, title, release_date, backdrop_path }) => ({
              id,
              title,
              release_date,
              backdrop_path,
            })
          ).filter(({backdrop_path})=>backdrop_path);

          setValue(films);
          setResult(films);
        });
    }
  }, [search, setValue]);

  return { result, setSearch, error, loading };
};
