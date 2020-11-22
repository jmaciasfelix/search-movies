import React from 'react';
import styled from 'styled-components';

const Wrapper = styled.header`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 10px;
  border: 1px solid red;
`;

export const Header = () => {
  return (
    <Wrapper>
      <h1>Filmmit 🍿</h1>
      <div>🌑</div>
    </Wrapper>
  );
};
