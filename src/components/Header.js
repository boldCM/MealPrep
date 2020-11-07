import React from 'react';
import styled from 'styled-components/macro';
import BurgerMenueBlack from './BurgerMenu';

const HeaderContainer = styled.div`
  display: flex;
  background-color: limegreen;
`;

const Header = styled.h1`
  display: flex;
  /* background-color: limegreen; */
  align-items: center;
  justify-content: center;
  margin: 0;
  height: 100px;
  width: 100vw;
`;

export default function HeaderComponent() {
  return (
    <HeaderContainer>
      <Header>Meal Prep</Header>
      <BurgerMenueBlack />
    </HeaderContainer>
  );
}
