import React from "react";
import styled from "styled-components";
//router
import { Link } from "wouter";
//components
import { SearchIcon, FavIcon, ResultIcon } from "../Icons";
import { Button } from "../Utils/Button";

const Wrapper = styled.nav`
  display: flex;
  align-items: center;
  justify-content: space-around;
  border-top: 1px solid grey;
  padding: 5px 0px;
  button {
    background: transparent;
    border: none;
    cursor: pointer;
  }
  button:focus {
    outline: none;
  }
`;

export const Nav = () => {
  return (
    <Wrapper>
      <Link href="/home">
        <Button>
          <SearchIcon />
        </Button>
      </Link>
      <Link href="/details/StarWars">
        <Button>
          <ResultIcon />
        </Button>
      </Link>
      <Link href="/fav">
        <Button>
          <FavIcon />
        </Button>
      </Link>
    </Wrapper>
  );
};
