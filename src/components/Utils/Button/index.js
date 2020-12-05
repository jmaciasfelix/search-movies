import React from "react";
import styled from "styled-components";

//TODO types buttons
const typeButtons = {
  search: `
  `,
  login: `
    
  `,
  theme: `
    background-color: transparent;
    border: none
  `,
  default: `
    
  `,
};

const Btn = styled.button`
  padding: 2px 10px;
  border-radius: 5px;
  background: transparent;
  border: 1px solid gray;
  cursor: pointer;
  &:focus {
    outline: none;
  }
  ${({ type }) =>
    typeButtons[type] ? typeButtons[type] : typeButtons["default"]}
`;

export const Button = ({ children, onClick, disabled, type = "default" }) => (
  <Btn onClick={onClick} disabled={disabled} type={type}>
    {children}
  </Btn>
);
