import React from 'react';
import { useParams, Link } from 'react-router-dom';
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
// const { GrocerieList } = useParams();
// const handleClick = () => {

// };

export default function BurgerMenu() {
  return (
    <>
      <BurgerMenuBlack>
        <Link to="/GrocerieList">
          <img src={burgerMenuBlack} alt="Burger Menu" />
        </Link>
      </BurgerMenuBlack>
    </>
  );
}
