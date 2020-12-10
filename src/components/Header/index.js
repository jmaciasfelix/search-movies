import React, { useContext } from "react";
import styled from "styled-components";
import { Link } from "wouter";
//Context
import { ThemeContext } from "../../context/Theme";
//components
import { Button } from "../Utils/Button";
import { LoginIcon } from "../Icons/LoginIcon";

const Wrapper = styled.header`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 8px 0px;
  border-bottom: 1px solid grey;
  h1,
  h2 {
    margin: 0;
    cursor: pointer;
  }
  p {
    cursor: pointer;
  }
`;

export const Header = ({ setTheme }) => {
  const { isDark } = useContext(ThemeContext);

  const toggleTheme = () => {
    setTheme({ isDark: !isDark });
  };

  return (
    <Wrapper>
      <Link href="/login">
        <h2>
          <LoginIcon />
        </h2>
      </Link>
      <Link href="/home">
        <h1>Filmmit 🍿</h1>
      </Link>
      <Button onClick={toggleTheme} type="theme">
        {isDark ? "🌞" : "🌑"}
      </Button>
    </Wrapper>
  );
};
