import React from "react";
import Header from "./components/header/header.component";
import { GlobalStyle } from "../src/global.styles";
import "./App.css";

function App() {
  return (
    <div>
      <GlobalStyle />
      <Header />
      <h1>Crypto Dashboard</h1>
    </div>
  );
}

export default App;
