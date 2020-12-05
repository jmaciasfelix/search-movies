import React, { useContext } from "react";
import styled from "styled-components";
//Context
import { ThemeContext } from "../../context/Theme";
import { Button } from "../Utils/Button";
//utils

const Wrapper = styled.header`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 8px 0px;
  border-bottom: 1px solid grey;
  h1 {
    margin: 0;
  }
`;

export const Header = ({ setTheme }) => {
  const { isDark } = useContext(ThemeContext);

  const toggleTheme = () => {
    setTheme({ isDark: !isDark });
  };

  return (
    <Wrapper>
      <h1>Filmmit 🍿</h1>
      <Button onClick={toggleTheme} type="theme">{isDark ? "🌞" : "🌑"}</Button>
    </Wrapper>
  );
};
