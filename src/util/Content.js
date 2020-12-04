import React from "react";
import styled from "styled-components";

const Wrapper = styled.div`
  padding: 0px 10px;
`;

export const Content = ({ children }) => <Wrapper>{children}</Wrapper>;
