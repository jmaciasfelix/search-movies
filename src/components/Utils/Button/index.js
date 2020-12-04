import React from "react";
import styled from "styled-components";

//TODO types buttons
const typeButtons = {
  login: `background-color: blue; border: 1px solid red; padding: 5px 20px;`,
  theme: `background-color: red; border: 1px solid blue; padding: 2px 30px;`,
  default: `background-color: yellow; border: 1px solid red; padding: 2px 10px;`,
};

const Btn = styled.button`
  padding: 2px 10px;
  background-color: green;
  ${({ type }) =>
    typeButtons[type] ? typeButtons[type] : typeButtons["default"]}
`;

export const Button = ({ children, onClick, disabled, type = "login" }) => (
  <Btn onClick={onClick} disabled={disabled} type={type}>
    {children}
  </Btn>
);
