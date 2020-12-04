import React from "react";
import styled from "styled-components";
//router
import { Link } from "wouter";
//components
import { SearchIcon, FavIcon, ResultIcon } from "../Icons";
import { Button } from "../Utils/Button";

const Wrapper = styled.nav`
  border: 1px solid green;
  display: flex;
  align-items: center;
  justify-content: space-around;
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
