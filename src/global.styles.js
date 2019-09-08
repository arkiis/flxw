import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
body {
  font-family: 'Roboto', sans-serif;
 

  @media screen and (max-width: 800px) {
    padding: 10px;
  }
}
h1,h2,h3,h4,h5,button{
  font-family: 'Poppins', sans-serif;
}

a {
  text-decoration: none;
  color: black;
}

* {
  box-sizing: border-box;
}

`;
