import { shallow } from "enzyme";
import React from "react";
import App from "./App";

it("expect to render App component", () => {
  //mock the favorite coins

  expect(shallow(<App />)).toMatchSnapshot();
});

it("expect to render cool App component", () => {
  //mock the favorite coins

  expect(shallow(<App />)).toMatchSnapshot();
});
