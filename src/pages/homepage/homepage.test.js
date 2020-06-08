import React from "react";
import Homepage from "./homepage";
import { shallow, mount, render } from "enzyme";

jest.mock("./homepage.jsx", () => () => "Homepage");

it("renders without crashing", () => {
  const wrapper = shallow(<Homepage />);
});
