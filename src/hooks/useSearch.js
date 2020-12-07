import { useState, useEffect } from "react";
//constant
import { apiKeyMovieDb, endpointMovieDb } from "../constant";

export const useSearch = () => {
  const [search, setSearch] = useState("");
  const [result, setResult] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);

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
          setResult(
            results.map(({ id, title, release_date, backdrop_path }) => ({
              id,
              title,
              release_date,
              backdrop_path,
            }))
          );
        });
    }
  }, [search]);

  return { result, setSearch, error, loading };
};
