import React from 'react';
import { useParams, Link } from 'react-router-dom';
import styled from 'styled-components/macro';
import DropDown from 'react-dropdown';
import burgerMenuBlack from '../icons/burgerMenuBlack.svg';
import 'react-dropdown/style.css';

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
const handleClick = () => {
  const options = ['one', 'two', 'three'];
  const defaultOption = options[0];
  return (
    <>
      <DropDown
        options={options}
        // onChange={this._onSelect}
        value={defaultOption}
        placeholder="Select an option"
      />
      {/* Old HTML: */}
      {/* <label htmlFor="DropDown" />
      <form>
        <select id="DropDown" name="Options">
          <option value="GrocerieList">GrocerieList</option>
          <option value="Weekplan">Weekplan</option>
        </select>
      </form> */}
    </>
  );
};

export default function BurgerMenu() {
  const options = ['GrocerieList', 'WeekPlan', 'three'];
  const defaultOption = options[0];
  return (
    <>
      <BurgerMenuBlack onClick={handleClick}>
        {/* <Link to="/GrocerieList"> */}
        {/* </Link> */}

        <img src={burgerMenuBlack} alt="Burger Menu" />
        <DropDown
          options={options}
          // onChange={this._onSelect}
          // value={defaultOption}
          // placeholder="Select an option"
        />
      </BurgerMenuBlack>
    </>
  );
}
