import React, { useContext } from 'react';
import styled from 'styled-components';
//Context
import { ThemeContext } from '../../context/Theme';

const Wrapper = styled.header`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 10px;
  border: 1px solid red;
`;

export const Header = ({ setTheme }) => {
  const { isDark } = useContext(ThemeContext);

  const toggleTheme = () => {
    setTheme({ isDark: !isDark });
  };

  return (
    <Wrapper>
      <h1>Filmmit 🍿</h1>
      <button onClick={toggleTheme}>{isDark ? '🌞' : '🌑'}</button>
    </Wrapper>
  );
};
