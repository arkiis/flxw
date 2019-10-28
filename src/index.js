import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter } from "react-router-dom";
import Apptest from "./app-test";
import promiseMiddleware from "redux-promise";
import App from "./App";
import styled from "styled-components";
import { Provider } from "react-redux";
import ApiTest from "./apiTest";
import GlobalStyle from "../src/global.styles";
import store from "./store/index";
import { ThemeProvider } from "styled-components";
import theme from "./utils/mediaQueries";
import * as serviceWorker from "./serviceWorker";
import Loader from "./UI/loader/loader";

const Wrapper = styled.div`
  width: 100%;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const root = document.getElementById("root");

ReactDOM.render(
  <>
    <Wrapper>
      <Loader />
    </Wrapper>
  </>,
  root
);

store.firebaseAuthIsReady.then(() => {
  ReactDOM.render(
    <Provider store={store}>
      <BrowserRouter>
        <ThemeProvider theme={theme}>
          <>
            <App />
            <GlobalStyle />
          </>
        </ThemeProvider>
      </BrowserRouter>
    </Provider>,
    root
  );
});

serviceWorker.unregister();
