import { createGlobalStyle } from "styled-components";

export default createGlobalStyle`

html{

}

body, a, p, td, th, span {
  font-family: 'Roboto', sans-serif;
 
 

  @media ${props => props.theme.mediaQueries.medium} {

  }
}

h1,h2,h3,h4,h5,button{
  font-family: 'Poppins', sans-serif;
}

a {
  text-decoration: none;
  color: black;
  cursor: pointer;
}

* {
  box-sizing: border-box;
  margin: 0;
  padding: 0;
}

`;
