import React from 'react';
import styled from 'styled-components/macro';
import burgerMenuBlack from '../icons/burgerMenuBlack.svg';

const BurgerMenuBlack = styled.button`
  border-radius: 100%;
  margin: 30px;
  & :focus {
    outline: none;
  }
  & :hover {
    background-color: orange;
  }
`;

export default function BurgerMenu() {
  return (
    <>
      <BurgerMenuBlack>
        <img src={burgerMenuBlack} alt="Burger Menu" />
      </BurgerMenuBlack>
    </>
  );
}
