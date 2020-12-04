import React from "react";
import styled from "styled-components";

const Wrapper = styled.div`
  display: grid;
  height: 100vh;
  place-items: center;
`;

const Content = styled.main`
  background: #fff;
  border-radius: 10px;
  box-shadow: 0 10px 25px rgba(0, 0, 0, 0.1);
  height: 90vh;
  width: 450px;

  @media (max-width: 520px) {
    height: 90vh;
    width: 520px;
  }
`;

export const Layout = ({ children }) => {
  return (
    <Wrapper>
      <Content>{children}</Content>
    </Wrapper>
  );
};
