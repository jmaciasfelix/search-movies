import React from "react";
import styled from "styled-components";

const Wrapper = styled.div`
  padding: 0px 10px;
  flex: 0.95;
`;

export const Content = ({ children }) => <Wrapper>{children}</Wrapper>;
