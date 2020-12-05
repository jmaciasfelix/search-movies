import React, { useState } from "react";
import styled from "styled-components";
//components
import { Button } from "../Utils/Button";
//constant
import { endpointMovieDb, apiKeyMovieDb } from "../../constant";

const Form = styled.form`
  display: flex;
  flex-direction: column;
  justify-content: center;
  text-align: center;
  //TODO alig vertically
  margin-top: 150px;

  label {
    font-size: 22px;
    font-weight: 700;
  }

  div {
    width: 100%;
    padding: 10px 0px;
    input {
      margin-right: 5px;
      border-radius: 5px;
      border: 1px solid gray;
      width: 80%;
      padding: 4px 6px;
      font-size: 16px;
    }
    button {
      font-size: 16px;
      padding: 4px 8px;
    }
  }
`;
export const Searcher = () => {
  const [search, setSearch] = useState("");
  const [loading, setLoading] = useState(false);

  const handleSearch = (e) => {
    e.preventDefault();
    //TODO search in IMDB and set result in search state
    fetch(
      "https://api.themoviedb.org/3/search/movie?api_key=4a6db02614b74a2d28418aa0b353924e&language=en-US&query=Star%20Wars&page=1&include_adult=false"
    )
      .then((response) => response.json())
      .then(({results}) => console.log(results));
  };

  return (
    <Form onSubmit={handleSearch}>
      <label htmlFor="search">Search a film</label>
      <div>
        <input
          type="text"
          name="search"
          value={search}
          placeholder={"Search with Filmmit 🔍"}
          onChange={(e) => setSearch(e.target.value)}
        />
        <Button type="search" disabled={loading}>
          Search
        </Button>
      </div>
    </Form>
  );
};
