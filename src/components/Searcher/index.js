import React, { useState } from "react";
import styled from "styled-components";

const Form = styled.form`
  display: flex;
  flex-direction: column;
  justify-content: center;
  text-align: center;
  border: 1px solid red;

  label {
    font-size: 22px;
    font-weight: 600;
  }
`;
export const Searcher = () => {
  const [search, setSearch] = useState("");

  const handleSearch = (e) => {
    e.preventDefault();
  };

  return (
    <Form onSubmit={handleSearch}>
      <div>
        <label htmlFor="search">Search a film</label>
        <div>
          <input
            type="text"
            name="search"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
          />
          <button>Submit</button>
        </div>
      </div>
    </Form>
  );
};
