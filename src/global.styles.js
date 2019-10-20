import { createGlobalStyle } from "styled-components";

export default createGlobalStyle`

html{

}

body, a, p, td, th, span {
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
  margin: 0;
  padding: 0;
}

`;
