import { createGlobalStyle } from 'styled-components';

export const GlobalStyles = createGlobalStyle`
  @import url('https://fonts.googleapis.com/css2?family=Comfortaa:wght@300;400;500;600;700&display=swap');

  body {
    margin: 0;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    background-color: #010a13;
  }

  * {
    box-sizing: border-box;
    text-decoration: none;
    font-family: 'Bai Jamjuree', sans-serif !important;
font-family: 'Inconsolata', monospace;
font-family: 'Saira Condensed', sans-serif;
  }

  #root {
    height: 100vh;
    overflow: hidden;

    @media (max-width: 1200px) {
      height: fit-content;
    }
  }
`;
