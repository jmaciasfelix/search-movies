import React, { useContext } from "react";
import styled from "styled-components";
//Context
import { ThemeContext } from "../context/Theme";

const Wrapper = styled.div`
  display: grid;
  height: 100vh;
  place-items: center;
`;

const Content = styled.main`
  background: ${(props) => (props.isDark ? "black" : "#fff")};
  color: ${(props) => (props.isDark ? "#fff" : "black")};
  border-radius: 10px;
  box-shadow: 0 10px 25px rgba(0, 0, 0, 0.1);
  padding: 5px 10px;
  display: flex;
  justify-content: space-between;
  flex-direction: column;
  height: 90vh;
  width: 450px;

  @media (max-width: 520px) {
    height: 90vh;
    width: 520px;
  }
`;

export const Layout = ({ children }) => {
  const { isDark } = useContext(ThemeContext);
  return (
    <Wrapper>
      <Content isDark={isDark}>{children}</Content>
    </Wrapper>
  );
};
