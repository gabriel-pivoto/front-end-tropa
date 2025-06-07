import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
  * {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
    font-family: sans-serif;
  }

  body {
    background-color: #f9f9f9;
  }

  input, button {
    display: block;
    width: 100%;
    padding: 0.75rem;
    margin-top: 1rem;
  }

  button {
    background-color: #007BFF;
    color: white;
    border: none;
    cursor: pointer;
  }

  button:hover {
    background-color: #0056b3;
  }
`;

export default GlobalStyle;
