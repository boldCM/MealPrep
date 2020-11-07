import styled, { keyframes } from 'styled-components/macro';
import GlobalStyle from './GlobalStyle';
import logo from './logo.svg';
import HeaderComponent from './components/Header';

function App() {
  return (
    <>
      <GlobalStyle />
      <HeaderComponent />
    </>
  );
}

export default App;
