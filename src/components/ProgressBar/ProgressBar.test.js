import { shallow } from "enzyme";
import React from "react";
import ProgressBar from "./ProgressBar";

it("expect to render ProgressBar component", () => {
  expect(shallow(<ProgressBar />)).toMatchSnapshot();
});
