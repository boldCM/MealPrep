import React from 'react';
import styled from 'styled-components/macro';

const Header = styled.h1`
  display: flex;
  background-color: limegreen;
  align-items: center;
  justify-content: center;
  margin: 0;
  height: 100px;
`;

export default function HeaderComponent() {
  return <Header>Meal Prep</Header>;
}
