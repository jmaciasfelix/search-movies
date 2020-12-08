import React, { useEffect, useRef, useState } from "react";
import styled from "styled-components";
//components
import { Button } from "../Utils/Button";
//constant
import { useSearch } from "../../hooks/useSearch";
import { useLocation } from "wouter";

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
  const [value, setValue] = useState("");
  const { result, setSearch, error, loading } = useSearch();
  const [, setLocation] = useLocation();

  const handleSearch = (e) => {
    e.preventDefault();
    value && setSearch(encodeURI(value));
  };

  useEffect(() => {
    result && value && console.log("Se renderiza");
    result && value && setLocation(`/details/${value.trim()}`);
  }, [result, setLocation, value]);

  return (
    <Form onSubmit={handleSearch}>
      <label htmlFor="search">Search a film</label>
      <div>
        <input
          type="text"
          name="search"
          value={value}
          placeholder={"Search with Filmmit 🔍"}
          onChange={(e) => setValue(e.target.value)}
        />
        <Button type="search" disabled={loading}>
          Search
        </Button>
        {error && <p>Someone has burned the movies 🔥🎥, try again 🚿</p>}
        {loading && <p>⌛</p>}
      </div>
    </Form>
  );
};
