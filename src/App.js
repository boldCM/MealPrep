// import styled, { keyframes } from 'styled-components/macro';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import GlobalStyle from './GlobalStyle';
import HeaderComponent from './components/Header';
import GrocerieList from './pages/GrocerieList';
import RecipeList from './pages/RecipeList';
import WeekPlan from './pages/Weekplan';

function App() {
  return (
    <>
      <Router>
        <GlobalStyle />
        <Switch>
          <Route path="/GrocerieList">
            <GrocerieList />
          </Route>
          <Route path="/RecipeList">
            <RecipeList />
          </Route>
          <Route path="/WeekPlan">
            <WeekPlan />
          </Route>
          <Route path="/">
            <HeaderComponent />
          </Route>
        </Switch>
      </Router>
    </>
  );
}

export default App;
